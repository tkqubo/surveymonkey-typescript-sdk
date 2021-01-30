'use strict';

export type SortOrder = 'ASC' | 'DESC';

export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD';

export interface Pagination {
  /** Which page of resources to return. Defaults to 1 */
  page?: number;
  /** Number of resources to return per page */
  per_page?: number;
}
