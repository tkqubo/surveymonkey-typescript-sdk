'use strict';

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
