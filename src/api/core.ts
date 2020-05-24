'use strict';

import request, {CoreOptions, Headers} from 'request';
import {ApiResponse, RateLimitMetadata, TimeUnitRateLimitMetadata, toInt} from '../model';
import {isEmpty, trimJson} from '../utils';

export const URL_BASE = 'https://api.surveymonkey.net/v3';

export interface SurveymonkeyConfig {
  token: string;
  trimText?: boolean;
}

export interface Links {
  self: string;
  prev?: string;
  next?: string;
  first?: string;
  last?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  per_page: number;
  page: number;
  total: number;
  links: Links;
}

export type SegmentType = string | number;

export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

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

  protected async doGet<T>(segments: SegmentType[], params?: any): Promise<ApiResponse<T>> {
    return this.doGetWithoutPathBase([this.pathBase, ...segments], params);
  }

  protected async doGetWithoutPathBase<T>(segments: SegmentType[], params?: any): Promise<ApiResponse<T>> {
    const url = this.requestUrl(segments);
    const requestOption = this.requestOption('GET', url, {qs: params});

    const {statusCode, body: rawBody, headers} = await requestPromise(requestOption);
    const body = JSON.parse(rawBody);
    const rateLimit = toRateLimitMetadata(headers);
    if (this.trimText) {
      return {statusCode, rateLimit, body: trimJson(body)};
    } else {
      return {statusCode, rateLimit, body};
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

