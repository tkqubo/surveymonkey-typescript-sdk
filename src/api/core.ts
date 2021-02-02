'use strict';

import request, {CoreOptions, Headers} from 'request';
import {ApiResponse, HttpMethod, RateLimitMetadata, TimeUnitRateLimitMetadata, toInt} from '../model';
import { isEmpty, logger, trimJson } from '../utils';

export const URL_BASE = 'https://api.surveymonkey.net/v3';

export interface SurveymonkeyConfig {
  token: string;
  trimText?: boolean;
}

export type SegmentType = string | number;

export abstract class ApiBase {
  protected urlBase: string = URL_BASE;
  protected pathBase: string = '';

  constructor(protected config: SurveymonkeyConfig) {}

  protected get headers(): Headers {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.config.token}`
    };
  }

  protected requestUrl(segments: SegmentType[]): string {
    const compactSegment = segments?.filter(isEmpty)
    const urlSegment = compactSegment?.length > 0 ? `/${compactSegment.join('/')}` : '';
    return `${this.urlBase}${urlSegment}`;
  }

  protected async doGet<T>(segments: SegmentType[] = [], params?: any): Promise<ApiResponse<T>> {
    return this.doGetWithoutPathBase([this.pathBase, ...segments], params);
  }

  protected async doGetWithoutPathBase<T>(segments: SegmentType[], params?: any): Promise<ApiResponse<T>> {
    return this.doRequestWithoutPathBase('GET', segments, params);
  }

  protected async doHead<T>(segments: SegmentType[] = [], params?: any): Promise<boolean> {
    return this.doHeadWithoutPathBase([this.pathBase, ...segments], params);
  }

  protected async doHeadWithoutPathBase(segments: SegmentType[], params?: any): Promise<boolean> {
    const url = this.requestUrl(segments);
    const requestOption = this.requestOption('HEAD', url, {qs: params});
    const {statusCode} = await requestPromise(requestOption);
    return 200 <= statusCode && statusCode < 400;
  }

  protected async doOptions(segments: SegmentType[] = [], params?: any): Promise<HttpMethod[]> {
    return this.doOptionsWithoutPathBase([this.pathBase, ...segments], params);
  }

  protected async doOptionsWithoutPathBase(segments: SegmentType[], params?: any): Promise<HttpMethod[]> {
    const url = this.requestUrl(segments);
    const requestOption = this.requestOption('OPTIONS', url, {qs: params});
    const {headers} = await requestPromise(requestOption);
    const rawMethods: string = headers['access-control-allow-methods']
    return rawMethods.split(/, */g) as HttpMethod[];
  }

  private async doRequestWithoutPathBase(method: HttpMethod, segments: SegmentType[], params: any): Promise<ApiResponse<any>> {
    const url = this.requestUrl(segments);
    const requestOption = this.requestOption(method, url, {qs: params});
    const {statusCode, body: rawBody, headers} = await requestPromise(requestOption);
    const body = JSON.parse(rawBody);
    const rateLimit = toRateLimitMetadata(headers);
    logger.debug(`${method} ${url} - statusCode=${statusCode}, limit.minute=${rateLimit.minute.remaining}, limit.day=${rateLimit.day.remaining}`)
    const response: ApiResponse<any> = this.trimText ? {statusCode, rateLimit, body: trimJson(body)} :{statusCode, rateLimit, body};
    if (statusCode < 400) {
      return response;
    } else {
      throw new Error(`Request failed with ${statusCode} error: ${JSON.stringify(response)}`);
    }
  }

  protected requestOption(method: HttpMethod, url: string, additional: CoreOptions = {}): request.CoreOptions & request.RequiredUriUrl {
    return {url, method, headers: this.headers, ...additional,};
  }

  private get trimText() {
    return this.config.trimText !== false;
  }
}

function requestPromise(requestOption: request.CoreOptions & request.RequiredUriUrl): Promise<request.ResponseAsJSON> {
  return new Promise<request.ResponseAsJSON>((resolve, reject) =>
    request(requestOption, (error: any, response: request.Response) => {
      if (!!error) {
        reject(error);
      } else {
        resolve(response.toJSON());
      }
    })
  );
}

function toRateLimitMetadata(headers: request.Headers): RateLimitMetadata {
  return {
    minute: toTimeUnitRateLimitMetadata(headers, 'minute'),
    day: toTimeUnitRateLimitMetadata(headers, 'day'),
  };
}

function toTimeUnitRateLimitMetadata(header: request.Headers, unit: 'minute' | 'day'): TimeUnitRateLimitMetadata {
  return {
    limit: toInt(header[`x-ratelimit-app-global-${unit}-limit`]),
    remaining: toInt(header[`x-ratelimit-app-global-${unit}-remaining`]),
    reset: toInt(header[`x-ratelimit-app-global-${unit}-reset`]),
  };
}
