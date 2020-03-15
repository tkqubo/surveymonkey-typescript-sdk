'use strict';

import {
  Id,
  PageListItem,
  QuestionListItem,
  Survey,
  SurveyCategory,
  SurveyDetail,
  SurveyLanguage,
  SurveyListItem,
  SurveyTemplate
} from '../model';
import {ApiBase, PaginatedResponse} from './core';

export type GetSurveyListResponse = PaginatedResponse<SurveyListItem>;

export type GetSurveyCategoryListResponse = PaginatedResponse<SurveyCategory>;

export type GetSurveyTemplateListResponse = PaginatedResponse<SurveyTemplate>;

export type GetSurveyLanguageListResponse = PaginatedResponse<SurveyLanguage>;

export type GetPageListResponse = PaginatedResponse<PageListItem>;

export type GetQuestionListResponse = PaginatedResponse<QuestionListItem>;

export class SurveyApi extends ApiBase {
  protected pathBase = 'surveys';

  // TODO: query parameter
  /**
   * Returns a list of surveys owned or shared with the authenticated user.
   * Public App users need access to the View Surveys scope
   */
  getSurveyList(): Promise<GetSurveyListResponse> {
    return this.doRequest();
  }

  /**
   * Returns a survey's details.
   * To get an expanded version showing all pages and questions use /surveys/{survey_id}/details. Requires View Surveys scope
   * @param id
   */
  getSurvey(id: Id): Promise<Survey> {
    return this.doRequest(id);
  }

  /**
   * Returns an expanded survey resource with a pages element containing a list of all page objects,
   * each containing a list of questions objects. Public App users need access to the View Surveys scope
   * @param id
   */
  getSurveyDetails(id: Id): Promise<SurveyDetail> {
    return this.doRequest(id, 'details');
  }

  // TODO: query parameter
  /**
   * Returns a list of survey categories that can be used to filter survey templates.
   * Public App users need access to the View Library Assets scope
   */
  getSurveyCategoryList(): Promise<GetSurveyCategoryListResponse> {
    return this.doRequestWithoutPathBase('survey_categories');
  }

  // TODO: query parameter
  /**
   * Returns a list of survey templates. Survey template ids can be used as an argument to POST a new survey.
   * Public App users need access to the View Library Assets scope
   */
  getSurveyTemplateList(): Promise<GetSurveyCategoryListResponse> {
    return this.doRequestWithoutPathBase('survey_templates');
  }

  // TODO: query parameter
  /** Returns a list of survey languages that can be used to generate translations for multilingual surveys */
  getSurveyLanguageList(): Promise<GetSurveyCategoryListResponse> {
    return this.doRequestWithoutPathBase('survey_languages');
  }
}
