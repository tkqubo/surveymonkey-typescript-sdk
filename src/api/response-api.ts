'use strict';

import {ApiBase, PaginatedResponse} from './core';
import {Response, ResponseDetail, ResponseListItem} from '../model';

export type GetResponseListResponse = PaginatedResponse<ResponseListItem>;

export type GetResponseBulkListResponse = PaginatedResponse<ResponseDetail>;

export type GetResponseResponse = PaginatedResponse<Response>;

export class ResponseApi extends ApiBase {
  getResponseList(surveyId: number): Promise<GetResponseListResponse> {
    return this.doRequestWithoutPathBase('surveys', surveyId, 'responses');
  }

  getResponseBulkList(surveyId: number): Promise<GetResponseBulkListResponse> {
    return this.doRequestWithoutPathBase('surveys', surveyId, 'responses', 'bulk');
  }

  getResponse(surveyId: number, responseId: number): Promise<Response> {
    return this.doRequestWithoutPathBase('surveys', surveyId, 'responses', responseId);
  }

  getResponseDetail(surveyId: number, responseId: number): Promise<ResponseDetail> {
    return this.doRequestWithoutPathBase('surveys', surveyId, 'responses', responseId, 'details');
  }
}
