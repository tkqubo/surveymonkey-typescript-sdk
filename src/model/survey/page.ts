'use strict';

import {Question} from './question';
import {Id} from '../api-response';

export interface SurveyPageListItem {
  id: Id;
  title: string;
  description: string;
  position: number;
  href: string;
}

export interface SurveyPage extends SurveyPageListItem {
  question_count: number;
}

export interface SurveyPageDetail extends SurveyPage {
  questions: Question[];
}
