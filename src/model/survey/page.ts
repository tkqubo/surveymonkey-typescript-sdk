'use strict';

import {Id} from '../core';
import {Question} from './question';

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
