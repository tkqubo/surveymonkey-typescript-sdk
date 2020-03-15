'use strict';

import {Question} from './question';
import {Id} from "./core";

export interface ButtonsText {
  next_button: string;
  prev_button: string;
  done_button: string;
  exit_button: string;
}

export interface PageListItem {
  id: Id;
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
  id: Id;
  title: string;
  nickname: string;
  href: string;
}

export type Language = string;

export interface SurveyQuizOptionsFeedback {
  ranges_type: 'disabled';
  ranges: [];
}

export interface SurveyQuizOptions {
  is_quiz_mode: boolean;
  show_results_type: 'results_and_answers';
  feedback: SurveyQuizOptionsFeedback;
}

export interface Survey extends SurveyListItem {
  custom_variables: { [key: string]: any; };
  category: string;
  language: Language;
  question_count: number;
  page_count: number;
  date_created: string;
  date_modified: string;
  buttons_text: ButtonsText;
  preview: string;
  folder_id: Id;
  edit_url: string;
  collect_url: string;
  analyze_url: string;
  summary_url: string;
  response_count: number;
  footer: boolean;
  is_owner: boolean;
  quiz_options?: SurveyQuizOptions;
}

export interface SurveyDetail extends Survey {
  pages: PageDetail[];
}

export interface SurveyCategory {
  id: Id;
  name: string;
}

export interface SurveyTemplate {
  id: Id;
  name: string;
  title: string;
  description: string;
  category: string;
  available: boolean;
  num_questions: number;
  preview_link: string;
}

export interface SurveyLanguage {
  id: Id;
  name: string;
  native_name: string;
}
