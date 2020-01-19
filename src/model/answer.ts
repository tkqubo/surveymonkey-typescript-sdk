'use strict';

export type ChoiceAnswer = TextChoiceAnswer | ImageChoiceAnswer;

export interface QuizOptions {
  score: number;
}

export interface TextChoice {
  id: string;
  text: string;
  position: number;
  visible: boolean;
  quiz_options?: QuizOptions;
}

export interface TextChoiceOther {
  text: string;
  num_chars: number;
  num_lines: number;
}

export interface TextChoiceAnswer {
  choices: TextChoice[];
  other?: TextChoiceOther[];
}

export interface ImageUrl {
  url: string;
}

export interface ImageChoice {
  image: ImageUrl;
  text?: string;
  position?: number;
}

export interface ImageChoiceAnswer {
  choices: ImageChoice[];
}

export interface ChoiceMatrixAnswer {
  rows: TextChoice[];
  choices: TextChoice[];
  other?: TextChoiceOther[];
}

export interface RankingMatrixAnswer {
  rows: TextChoice[];
}

export interface MenuMatrixCol {
  text: string;
  choices: TextChoice[];
}

export interface MenuMatrixAnswer {
  rows: TextChoice[];
  cols: MenuMatrixCol[];
  other?: TextChoiceOther[];
}

export interface MultiOpenEndedAnswer {
  rows: TextChoice[];
}

export interface DemographicAnswerRow {
  visible: boolean;
  required: boolean;
  type: string;
  text?: string;
}

export interface DemographicAnswer {
  rows: DemographicAnswerRow[];
}

export interface DateTimeAnswer {
  rows: TextChoice[];
}
