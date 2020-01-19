'use strict';

import {Question} from "./question";

export interface ButtonsText {
  next_button: string;
  prev_button: string;
  done_button: string;
  exit_button: string;
}

export interface PageListItem {
  id: string;
  title: string;
  description: string;
  position: number;
  href: string;
}

export interface Page extends PageListItem {
  question_count: number;
}

export interface PageDetail extends Page {
  questions: Question[];
}

export interface SurveyListItem {
  id: string;
  title: string;
  nickname: string;
  href: string;
}

export type Language = string;

export interface Survey extends SurveyListItem {
  custom_variables: { [key: string]: any; };
  category: string;
  language: Language;
  question_count: number;
  page_count: number;
  date_created: Date;
  date_modified: Date;
  buttons_text: ButtonsText;
  preview: string;
  folder_id: string;
  edit_url: string;
  collect_url: string;
  analyze_url: string;
  summary_url: string;
  response_count: number;
  footer: boolean;
  is_owner: boolean;
}

export interface SurveyDetail extends Survey {
  pages: PageDetail[];
}

export interface SurveyCategory {
  id: string;
  name: string;
}

export interface SurveyTemplate {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  available: boolean;
  num_questions: number;
  preview_link: string;
}

export interface SurveyLanguage {
  id: string;
  name: string;
  native_name: string;
}
