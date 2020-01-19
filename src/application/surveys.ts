'use strict';

import {PageListItem, SurveyCategory, SurveyLanguage, SurveyListItem, SurveyTemplate} from "../model/surveys";
import {PaginatedResponse} from "./core";
import {QuestionListItem} from "../model/question";

export type GetSurveyListResponse = PaginatedResponse<SurveyListItem>;

export type GetSurveyCategoryListResponse = PaginatedResponse<SurveyCategory>;

export type GetSurveyTemplateListResponse = PaginatedResponse<SurveyTemplate>;

export type GetSurveyLanguageListResponse = PaginatedResponse<SurveyLanguage>;

export type GetPageListResponse = PaginatedResponse<PageListItem>;

export type GetQuestionListResponse = PaginatedResponse<QuestionListItem>;
