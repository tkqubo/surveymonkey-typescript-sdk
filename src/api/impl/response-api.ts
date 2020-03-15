'use strict';

import {ApiBase, PaginatedResponse} from '../core';
import {Id, Response, ResponseDetail, ResponseListItem} from '../../model';

export type GetResponseListResponse = PaginatedResponse<ResponseListItem>;

export type GetResponseBulkListResponse = PaginatedResponse<ResponseDetail>;

export type GetResponseResponse = PaginatedResponse<Response>;

export class ResponseApi extends ApiBase {
  getResponseList(surveyId: Id): Promise<GetResponseListResponse> {
    return this.doRequestWithoutPathBase('surveys', surveyId, 'responses');
  }

  getResponseBulkList(surveyId: Id): Promise<GetResponseBulkListResponse> {
    return this.doRequestWithoutPathBase('surveys', surveyId, 'responses', 'bulk');
  }

  getResponse(surveyId: Id, responseId: Id): Promise<Response> {
    return this.doRequestWithoutPathBase('surveys', surveyId, 'responses', responseId);
  }

  getResponseDetail(surveyId: Id, responseId: Id): Promise<ResponseDetail> {
    return this.doRequestWithoutPathBase('surveys', surveyId, 'responses', responseId, 'details');
  }
}
