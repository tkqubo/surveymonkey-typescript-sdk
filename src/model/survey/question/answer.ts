'use strict';

import {Id} from '../../api-response';

export type ChoiceAnswer = TextChoiceAnswer | ImageChoiceAnswer;

export interface QuizOptions {
  score: number;
}

export interface TextRow {
  id: Id;
  text: string;
  position: number;
  visible: boolean;
  quiz_options?: QuizOptions;
}

export interface TextChoice extends TextRow {
  is_na: boolean;
  description: string;
}

export interface TextChoiceOther {
  id: Id;
  text: string;
  position: number;
  visible: boolean;
  is_answer_choice: boolean;
  apply_all_rows: boolean;
  error_text: string;
  num_chars: number;
  num_lines: number;
}

export interface TextChoiceAnswer {
  choices: TextRow[];
  other?: TextChoiceOther;
}

export interface ImageUrl {
  s3_key: string;
  url: string;
}

export interface ImageChoice {
  id: Id;
  image: ImageUrl;
  text: string;
  position: number;
  visible: boolean;
  quiz_options: QuizOptions;
}

export interface ImageChoiceAnswer {
  choices: ImageChoice[];
}

export interface ChoiceMatrixAnswer {
  rows: TextRow[];
  choices: TextChoice[];
  other?: TextChoiceOther;
}

export interface RatingChoice extends TextChoice {
  weight: number;
}

export interface RatingChoiceOther extends TextChoiceOther {
  position: number;
  visible: boolean;
  is_answer_choice: boolean;
  apply_all_rows: boolean;
  error_text: string;
}

export interface RatingMatrixAnswer {
  rows: TextRow[];
  choices: RatingChoice[];
  other?: RatingChoiceOther;
}

export interface RankingMatrixAnswer {
  rows: TextRow[];
  choices: RatingChoice[];
}

export interface MenuMatrixCol {
  text: string;
  choices: TextRow[];
}

export interface MenuMatrixAnswer {
  rows: TextRow[];
  cols: MenuMatrixCol[];
  other?: TextChoiceOther;
}

export interface MultiOpenEndedAnswer {
  rows: TextRow[];
}

export interface DemographicAnswerRow {
  id: Id;
  position: number;
  visible: boolean;
  required: boolean;
  type: string;
  text?: string;
}

export interface DemographicAnswer {
  rows: DemographicAnswerRow[];
}

export interface DateTimeAnswer {
  rows: TextRow[];
}
