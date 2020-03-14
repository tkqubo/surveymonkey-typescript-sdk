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

export abstract class ApiBase {
  protected urlBase: string = URL_BASE;
  protected abstract pathBase: string;

  constructor(protected config: SurveymonkeyConfig) {
  }

  protected get headers(): Headers {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.config.token}`
    };
  }

  protected requestUrl(...segments: string[]): string {
    const urlSegment = segments?.length > 0 ? `/${segments.join('/')}` : '';
    return `${this.urlBase}${urlSegment}`;
  }

  protected requestOptions(additional: RequestPromiseOptions = {}): RequestPromiseOptions {
    return {method: 'GET', headers: this.headers, ...additional};
  }

  protected async doRequest<T>(...segments: string[]): Promise<T> {
    return this.doRequestWithoutPathBase(this.pathBase, ...segments);
  }

  protected async doRequestWithoutPathBase<T>(...segments: string[]): Promise<T> {
    const url = this.requestUrl(...segments);
    // console.debug(`request: ${url}`);
    const response = await request(url, this.requestOptions()).promise();
    return JSON.parse(response);
  }
}
