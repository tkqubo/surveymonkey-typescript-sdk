'use strict';

/**
 * single_choice
 *   - vertical, vertical_two_col, vertical_three_col, horiz, menu
 * multiple_choice
 *   - vertical
 * matrix
 *   - ranking
 *   - rating
 *   - menu
 *   - single, multi
 * open_ended
 *   - multi, numerical
 *   - single
 *   - essay
 * demographic
 *   - international, us
 * datetime
 *   - both, date_only, time_only
 * presentation
 *   - descriptive_text, image
 */

import {
  ChoiceAnswer,
  DemographicAnswer,
  MenuMatrixAnswer,
  RankingMatrixAnswer,
  ChoiceMatrixAnswer,
  MultiOpenEndedAnswer, DateTimeAnswer
} from "./answer";

export interface HeadingImage {
  url: string;
}

export interface NormalHeading {
  heading: string;
  image?: HeadingImage;
}

export interface RansomAssignment {
  percent: number;
  position: number;
  variable_name: string;
  id: string;
}

export interface RandomAssignmentHeading {
  heading: '';
  description: string;
  image?: HeadingImage;
  random_assignment: RansomAssignment;
}

export type Heading = NormalHeading | RandomAssignmentHeading;

export interface QuizOptions {
  score: number;
}

export interface Choice {
  position: number;
  visible: boolean;
  text: string;
  quiz_options: QuizOptions;
  id: string;
  is_na?: boolean;
  weight?: number;
  description: string;
}

export interface Row {
  position: number;
  visible: boolean;
  text: string;
  id: string;
}

export interface Answers {
  choices: Choice[];
  rows: Row[];
}

export interface QuestionListItem {
  id: string;
  heading: string;
  position: number;
  href: string;
}

export enum QuestionSortingType {
  default = 'default',
  textasc = 'textasc',
  textdesc = 'textdesc',
  resp_count_asc = 'resp_count_asc',
  resp_count_desc = 'resp_count_desc',
  random = 'random',
  flip = 'flip'
}

export interface QuestionSorting {
  type: QuestionSortingType;
  ignore_last: boolean;
}

export enum QuestionRequiredType {
  all = 'all',
  at_least = 'at_least',
  at_most = 'at_most',
  exactly = 'exactly',
  range = 'range'
}

export interface QuestionRequired {
  text: string;
  type: QuestionRequiredType;
  amount: string;
}

export enum QuestionValidationType {
  any = 'any',
  integer = 'integer',
  decimal = 'decimal',
  date_us = 'date_us',
  date_intl = 'date_intl',
  regex = 'regex',
  email = 'email',
  text_length = 'text_length'
}

export interface QuestionValidation {
  type: QuestionValidationType;
  text: string;
  /** Date string, integer, or null depending on validation.type */
  min?: any;
  /** Date string, integer, or null depending on validation.type */
  max?: any;
  sum?: number;
  sum_text?: string;
}

// export interface Question {
//   headings: Heading[];
//   position: number;
//   visible: boolean;
//   family: string;
//   subtype: string;
//   sorting?: QuestionSorting;
//   required?: QuestionRequired;
//   validation?: QuestionValidation;
//   forced_ranking: boolean;
//   id: string;
//   href: string;
//   answers: Answers;
//   display_options?: DisplayOptions;
// }

export type Question = SingleChoiceQuestion | MultipleChoiceQuestion | MatrixQuestion | OpenEndedQuestion | DemographicQuestion |
  DateTimeQuestion | PresentationQuestion;

export interface QuestionBase {
  headings: Heading[];
  position: number;
  visible: boolean;
  sorting?: QuestionSorting;
  required?: QuestionRequired;
  validation?: QuestionValidation;
  forced_ranking: boolean;
  id: string;
  href: string;
}

export interface SingleChoiceDisplayOptions {
  display_type: 'image_choice';
}

export interface SingleChoiceQuestion extends QuestionBase {
  family: 'single_choice';
  subtype: 'vertical' | 'vertical_two_col' | 'vertical_three_col' | 'horiz' | 'menu';
  display_options?: SingleChoiceDisplayOptions;
  answers: ChoiceAnswer;
}

export type MatrixQuestion = RatingMatrixQuestion | RankingMatrixQuestion | MenuMatrixQuestion | ChoiceMatrixQuestion;

export interface RatingMatrixDisplayOptionsCustomOptions {
  color?: string;
  option_set: any[];
}

export interface RatingMatrixDisplayOptions {
  display_type: 'emoji';
  display_subtype: 'star' | 'smiley' | 'heart' | 'thumb';
  right_label_id?: string;
  right_label?: string;
  left_label_id?: string;
  left_label?: string;
  middle_label_id?: string;
  middle_label?: string;
  custom_options?: RatingMatrixDisplayOptionsCustomOptions;
}

export interface RatingMatrixQuestion extends QuestionBase {
  family: 'matrix';
  subtype: 'rating';
  display_options?: RatingMatrixDisplayOptions;
  answers: ChoiceMatrixAnswer;
}

export interface RankingMatrixQuestion extends QuestionBase {
  family: 'matrix';
  subtype: 'ranking';
  answers: RankingMatrixAnswer;
}

export interface MenuMatrixQuestion extends QuestionBase {
  family: 'matrix';
  subtype: 'menu';
  answers: MenuMatrixAnswer;
}

export interface ChoiceMatrixQuestion extends QuestionBase {
  family: 'matrix';
  subtype: 'single' | 'multi';
  answers: ChoiceMatrixAnswer;
}

export type OpenEndedQuestion = MultiOpenEndedQuestion | SingleOpenEndedQuestion | EssayOpenEndedQuestion;

export interface MultiOpenEndedDisplayOptions {
  display_type: 'slider';
}

export interface MultiOpenEndedQuestion extends QuestionBase {
  family: 'open_ended';
  subtype: 'multi' | 'numerical';
  display_options?: MultiOpenEndedDisplayOptions;
  answers: MultiOpenEndedAnswer;
}

export type SingleOpenEndedDisplayOptions = SliderSingleOpenEndedDisplayOptions | FileUploadSingleOpenEndedDisplayOptions;

export interface SliderSingleOpenEndedDisplayOptionsCustomOptions {
  starting_position?: number;
  step_size?: number;
}

export interface SliderSingleOpenEndedDisplayOptions {
  display_type: 'slider';
  right_label_id?: string;
  right_label?: string;
  left_label_id?: string;
  left_label?: string;
  middle_label_id?: string;
  middle_label?: string;
  custom_options?: SliderSingleOpenEndedDisplayOptionsCustomOptions[];
}

export interface FileUploadSingleOpenEndedDisplayOptions {
  display_type: 'file_upload';
}

export interface SingleOpenEndedQuestion extends QuestionBase {
  family: 'open_ended';
  subtype: 'single';
  display_options?: SingleOpenEndedDisplayOptions;
}

export interface EssayOpenEndedQuestion extends QuestionBase {
  family: 'open_ended';
  subtype: 'essay';
}

export interface DemographicQuestion extends QuestionBase {
  family: 'demographic';
  subtype: 'international' | 'us';
  answers: DemographicAnswer;
}

export interface DateTimeQuestion extends QuestionBase {
  family: 'datetime';
  subtype: 'both' | 'date_only' | 'time_only';
  answers: DateTimeAnswer;
}

export interface MultipleChoiceDisplayOptions {
  display_type: 'image_choice';
}

export interface MultipleChoiceQuestion extends QuestionBase {
  family: 'multiple_choice';
  subtype: 'vertical';
  display_options?: MultipleChoiceDisplayOptions;
  answers: ChoiceAnswer;
}

export interface PresentationQuestion extends QuestionBase {
  family: 'presentation';
  subtype: 'descriptive_text' | 'image';
}
