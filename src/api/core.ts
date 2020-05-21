'use strict';

import {Headers} from 'request';
import request, {RequestPromiseOptions} from 'request-promise-native';

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

  protected requestOptions(additional: RequestPromiseOptions = {}): RequestPromiseOptions {
    return {method: 'GET', headers: this.headers, ...additional,};
  }

  protected async doRequest<T>(segments: SegmentType[], params?: any): Promise<T> {
    return this.doRequestWithoutPathBase([this.pathBase, ...segments], params);
  }

  protected async doRequestWithoutPathBase<T>(segments: SegmentType[], params?: any): Promise<T> {
    const url = this.requestUrl(segments);
    // console.debug(`request: ${url}`);
    const response = await request(url, this.requestOptions({qs: params})).promise();
    const json = JSON.parse(response)
    if (this.trimText) {
      return ApiBase.trimJson(json);
    } else {
      return json;
    }
  }

  private get trimText() {
    return this.config.trimText !== false;
  }

  private static trimJson(value: unknown): any {
    if (value === null || value === undefined) {
      return value;
    } else if (typeof value === 'string') {
      return value.trim();
    } else if (value instanceof Array) {
      return value.map(ApiBase.trimJson);
    } else if (value instanceof Object) {
      const obj: { [key: string]: any } = {};
      for (const name in value) {
        obj[name] = ApiBase.trimJson((value as any)[name]);
      }
      return obj;
    } else {
      return value;
    }
  }
}

function isEmpty(type: SegmentType): boolean {
  if (typeof type === 'string') {
    return !!type.length;
  } else {
    return true;
  }
}
