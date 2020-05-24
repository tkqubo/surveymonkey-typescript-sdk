'use strict';

import {
  ApiResponse,
  Id,
  QuestionListItem,
  Survey,
  SurveyCategory,
  SurveyDetail,
  SurveyLanguage,
  SurveyListItem,
  SurveyPageListItem,
  SurveyTemplate
} from '../../model';
import {ApiBase, PaginatedResponse} from '../core';

export type GetSurveyListResponse = PaginatedResponse<SurveyListItem>;

export type GetSurveyCategoryListResponse = PaginatedResponse<SurveyCategory>;

export type GetSurveyTemplateListResponse = PaginatedResponse<SurveyTemplate>;

export type GetSurveyLanguageListResponse = PaginatedResponse<SurveyLanguage>;

export type GetSurveyPageListResponse = PaginatedResponse<SurveyPageListItem>;

export type GetSuveyQuestionListResponse = PaginatedResponse<QuestionListItem>;

export class SurveyApi extends ApiBase {
  protected pathBase = 'surveys';

  // TODO: query parameter
  /**
   * Returns a list of surveys owned or shared with the authenticated user.
   * Public App users need access to the View Surveys scope
   */
  getSurveyList(): Promise<ApiResponse<GetSurveyListResponse>> {
    return this.doGet([]);
  }

  /**
   * Returns a survey's details.
   * To get an expanded version showing all pages and questions use /surveys/{survey_id}/details. Requires View Surveys scope
   * @param id
   */
  getSurvey(id: Id): Promise<ApiResponse<Survey>> {
    return this.doGet([id]);
  }

  /**
   * Returns an expanded survey resource with a pages element containing a list of all page objects,
   * each containing a list of questions objects. Public App users need access to the View Surveys scope
   * @param id
   */
  getSurveyDetails(id: Id): Promise<ApiResponse<SurveyDetail>> {
    return this.doGet([id, 'details']);
  }

  // TODO: query parameter
  /**
   * Returns a list of survey categories that can be used to filter survey templates.
   * Public App users need access to the View Library Assets scope
   */
  getSurveyCategoryList(): Promise<ApiResponse<GetSurveyCategoryListResponse>> {
    return this.doGetWithoutPathBase(['survey_categories']);
  }

  // TODO: query parameter
  /**
   * Returns a list of survey templates. Survey template ids can be used as an argument to POST a new survey.
   * Public App users need access to the View Library Assets scope
   */
  getSurveyTemplateList(): Promise<ApiResponse<GetSurveyCategoryListResponse>> {
    return this.doGetWithoutPathBase(['survey_templates']);
  }

  // TODO: query parameter
  /** Returns a list of survey languages that can be used to generate translations for multilingual surveys */
  getSurveyLanguageList(): Promise<ApiResponse<GetSurveyCategoryListResponse>> {
    return this.doGetWithoutPathBase(['survey_languages']);
  }
}
