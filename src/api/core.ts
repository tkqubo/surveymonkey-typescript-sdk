'use strict';

import {Headers} from 'request';
import request, {RequestPromiseOptions} from 'request-promise-native';

export const URL_BASE = 'https://api.surveymonkey.net/v3';

export interface SurveymonkeyConfig {
  token: string;
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

  constructor(protected config: SurveymonkeyConfig) {
  }

  protected get headers(): Headers {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.config.token}`
    };
  }

  protected requestUrl(...segments: SegmentType[]): string {
    const compactSegment = segments?.filter(isEmpty)
    const urlSegment = compactSegment?.length > 0 ? `/${compactSegment.join('/')}` : '';
    return `${this.urlBase}${urlSegment}`;
  }

  protected requestOptions(additional: RequestPromiseOptions = {}): RequestPromiseOptions {
    return {method: 'GET', headers: this.headers, ...additional};
  }

  protected async doRequest<T>(...segments: SegmentType[]): Promise<T> {
    return this.doRequestWithoutPathBase(this.pathBase, ...segments);
  }

  protected async doRequestWithoutPathBase<T>(...segments: SegmentType[]): Promise<T> {
    const url = this.requestUrl(...segments);
    // console.debug(`request: ${url}`);
    const response = await request(url, this.requestOptions()).promise();
    return JSON.parse(response);
  }
}

function isEmpty(type: SegmentType): boolean {
  if (typeof type === 'string') {
    return !!type.length;
  } else {
    return true;
  }

  return false;
}
