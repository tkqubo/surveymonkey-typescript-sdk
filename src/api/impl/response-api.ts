'use strict';

import {ApiBase} from '../core';
import {
  ApiResponse,
  Id,
  PaginatedApiResponse,
  Response,
  ResponseDetail,
  ResponseListItem,
  SortOrder
} from '../../model';


export namespace ResponseApi {
  export namespace QueryParameter {
    export type TotalTimeUnits = 'second' | 'minute' | 'hour';

    export interface GetResponseList {
      /** Page of resources to return. Defaults to 1 */
      page?: number;
      /** Number of resources to return per page */
      per_page?: number;
      /** Responses started after this date */
      start_created_at?: string;
      /** Responses started before this date */
      end_created_at?: string;
      /** Responses modified after this date */
      start_modified_at?: string;
      /** Responses modified before this date */
      end_modified_at?: string;
      /** Status of the response: completed, partial, overquota, disqualified */
      status?: 'completed' | 'partial' | 'overquota' | 'disqualified';
      /** Email of the recipient */
      email?: string;
      /** First Name of the recipient */
      first_name?: string;
      /** Last Name of the recipient */
      last_name?: string;
      /** The IP the response was taken from */
      ip?: string;
      /** The custom value associated with the response */
      custom?: string;
      /** The maximum amount of time spent on the response */
      total_time_max?: number;
      /** The minimum amount of time spent on the response */
      total_time_min?: number;
      /** Unit of time for total_time_min and total_time_max: second, minute, hour */
      total_time_units?: TotalTimeUnits;
      /** Sort order: ASC or DESC] */
      sort_order?: SortOrder;
      /** Field used to sort returned responses: date_modified */
      sort_by?: 'date_modified';
    }

    export interface GetResponseBulkList {
      /** Page of resources to return. Defaults to 1 */
      page?: number;
      /** Number of resources to return per page. Max of 100 allowed per page. Defaults to 50 */
      per_page?: number;
      /** When ‘true’, this includes the question and answer text, in addition to IDs. */
      simple?: string;
      /** Only include responses for this list of collector IDs */
      collector_ids?: string;
      /** Responses started after this date */
      start_created_at?: string;
      /** Responses started before this date */
      end_created_at?: string;
      /** Responses modified after this date */
      start_modified_at?: string;
      /** Responses modified before this date */
      end_modified_at?: string;
      /** Status of the response: completed, partial, overquota, disqualified */
      status?: 'completed' | 'partial' | 'overquota' | 'disqualified';
      /** Email of the recipient */
      email?: string;
      /** First Name of the recipient */
      first_name?: string;
      /** Last Name of the recipient */
      last_name?: string;
      /** The IP the response was taken from */
      ip?: string;
      /** The custom value associated with the response */
      custom?: string;
      /** The maximum amount of time spent on the response */
      total_time_max?: number;
      /** The minimum amount of time spent on the response */
      total_time_min?: number;
      /** Unit of time for total_time_min and total_time_max: second, minute, or hour */
      total_time_units?: TotalTimeUnits;
      /** Sort order: ASC or DESC] */
      sort_order?: SortOrder;
      /** Field used to sort returned responses: date_modified */
      sort_by?: 'date_modified';
      /** List of survey pages to filter on. Returns all pages if not provided */
      page_ids?: string;
      /** List of survey questions to filter on. Returns all questions if not provided */
      question_ids?: string;
    }
  }
}


export class ResponseApi extends ApiBase {
  getResponseList(surveyId: Id, params?: ResponseApi.QueryParameter.GetResponseList): Promise<PaginatedApiResponse<ResponseListItem>> {
    return this.doGetWithoutPathBase(['surveys', surveyId, 'responses'], params);
  }

  getResponseBulkList(surveyId: Id, params?: ResponseApi.QueryParameter.GetResponseBulkList): Promise<PaginatedApiResponse<ResponseDetail>> {
    return this.doGetWithoutPathBase(['surveys', surveyId, 'responses', 'bulk'], params);
  }

  getResponse(surveyId: Id, responseId: Id): Promise<ApiResponse<Response>> {
    return this.doGetWithoutPathBase(['surveys', surveyId, 'responses', responseId]);
  }

  getResponseDetail(surveyId: Id, responseId: Id): Promise<ApiResponse<ResponseDetail>> {
    return this.doGetWithoutPathBase(['surveys', surveyId, 'responses', responseId, 'details']);
  }
}
