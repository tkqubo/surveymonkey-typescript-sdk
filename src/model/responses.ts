'use strict';

import {Id} from './core';

export interface ResponseListItem {
  id: string;
  href: string;
}

export interface Response extends ResponseListItem {
  survey_id: string;
  collector_id: string;
  recipient_id: string;
  total_time: number;
  custom_value: string;
  first_name: string;
  last_name: string;
  email_address: string;
  logic_path: any; //TODO
  metadata: any; //TODO
  page_path: any[]; //TODO
  edit_url: string;
  analyze_url: string;
  ip_address: string;
  custom_variables: {};
  response_status: ResponseStatusType;
  collection_mode: CollectionModeType;
  date_created: string;
  date_modified: string;
}

export interface ResponseDetail extends Response {
  pages: ResponsePage[]
}

export type ResponseStatusType = 'completed' | 'partial' | 'overquota' | 'disqualified';

export type CollectionModeType = 'default' | 'preview' | 'data_entry' | 'survey_preview' | 'edit';

export interface ResponsePage {
  id: string;
  questions: ResponseQuestion[];
}

export interface ResponseQuestion {
  id: Id;
  variable_id?: Id;
  answers: Answer[];
}

export interface Answer {
  choice_id?: Id;
  row_id?: Id;
  col_id?: Id;
  other_id?: Id;
  text?: string;
  download_url?: string;
  content_type?: string;
  tag_data?: any[]; //TODO
}
