'use strict';

export interface ApiResponse<T> {
  statusCode: number;
  body: T;
  rateLimit: RateLimitMetadata;
}

export type PaginatedApiResponse<T> = ApiResponse<PaginatedBody<T>>;

export interface PaginatedBody<T> {
  data: T[];
  per_page: number;
  page: number;
  total: number;
  links: Links;
}

export interface RateLimitMetadata {
  minute: TimeUnitRateLimitMetadata;
  day: TimeUnitRateLimitMetadata;
}

export interface TimeUnitRateLimitMetadata {
  limit?: number;
  remaining?: number;
  reset?: number;
}

export interface Links {
  self: string;
  prev?: string;
  next?: string;
  first?: string;
  last?: string;
}

export interface Paging {
  page?: number;
  per_page?: number;
}

/** NOTE: Surveymonkey documentation says IDs are integer, but the actual endpoints returns string instead */
export type Id = string;
