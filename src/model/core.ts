'use strict';

/** NOTE: Surveymonkey documentation says IDs are integer, but the actual endpoints returns string instead */
export type Id = string;

export interface ApiResponse<T> {
  statusCode: number;
  body: T;
  rateLimit: RateLimitMetadata;
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

export function toInt(value: string): number | undefined {
  try { return parseInt(value);} catch (e) {return undefined;}
}

export interface Paging {
  page?: number;
  per_page?: number;
}
