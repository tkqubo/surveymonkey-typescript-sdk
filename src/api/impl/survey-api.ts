'use strict';

import {
  ApiResponse,
  Id,
  Paging,
  Question,
  QuestionListItem,
  Survey,
  SurveyCategory,
  SurveyDetail,
  SurveyLanguage,
  SurveyListItem,
  SurveyPage,
  SurveyPageListItem,
  SurveyTemplate
} from '../../model';
import {ApiBase, HttpMethod, PaginatedResponse} from '../core';

export type GetSurveyListResponse = PaginatedResponse<SurveyListItem>;

export type GetSurveyCategoryListResponse = PaginatedResponse<SurveyCategory>;

export type GetSurveyTemplateListResponse = PaginatedResponse<SurveyTemplate>;

export type GetSurveyLanguageListResponse = PaginatedResponse<SurveyLanguage>;

export type GetSurveyPageListResponse = PaginatedResponse<SurveyPageListItem>;

export type GetSurveyQuestionListResponse = PaginatedResponse<QuestionListItem>;

export class SurveyApi extends ApiBase {
  protected pathBase = 'surveys';

  // TODO: query parameter
  /**
   * Returns a list of surveys owned or shared with the authenticated user.
   * Public App users need access to the View Surveys scope
   */
  getSurveyList(): Promise<ApiResponse<GetSurveyListResponse>> {
    return this.doGet();
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

  /**
   * Returns a page’s details. Public App users need access to the View Surveys scope
   * @param id
   */
  getSurveyPages(id: Id): Promise<ApiResponse<GetSurveyPageListResponse>> {
    return this.doGet([id, 'pages']);
  }

  /**
   * Returns a page’s details. Public App users need access to the View Surveys scope
   * @param id
   * @param pageId
   */
  getSurveyPage(id: Id, pageId: Id): Promise<ApiResponse<SurveyPage>> {
    return this.doGet([id, 'pages', pageId]);
  }

  /**
   * Returns a list of questions on a survey page. Public App users need access to the View Surveys scope
   * @param id
   * @param pageId
   * @param paging
   */
  getPageQuestions(id: Id, pageId: Id, paging?: Paging): Promise<ApiResponse<GetSurveyQuestionListResponse>> {
    return this.doGet([id, 'pages', pageId, 'questions'], paging);
  }

  /**
   * Returns a question. Requires View Surveys scope
   * @param id
   * @param pageId
   * @param questionId
   */
  getPageQuestion(id: Id, pageId: Id, questionId: Id): Promise<ApiResponse<Question>> {
    return this.doGet([id, 'pages', pageId, 'questions', questionId]);
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

  /** Checks if resource is available */
  headSurveyList() {
    return this.doHead();
  }

  /** Checks if resource is available */
  headSurvey(id: Id): Promise<boolean> {
    return this.doHead([id]);
  }

  /** Checks if resource is available */
  headSurveyCategoryList(): Promise<boolean> {
    return this.doHeadWithoutPathBase(['survey_categories']);
  }

  /** Checks if resource is available */
  headSurveyTemplateList(): Promise<boolean> {
    return this.doHeadWithoutPathBase(['survey_templates']);
  }

  /** Checks if resource is available */
  headSurveyLanguageList(): Promise<boolean> {
    return this.doHeadWithoutPathBase(['survey_languages']);
  }

  /** Checks if resource is available */
  headSurveyPageList(id: Id): Promise<boolean> {
    return this.doHead([id, 'pages']);
  }

  /** Checks if resource is available */
  headSurveyPage(id: Id, pageId: Id): Promise<boolean> {
    return this.doHead([id, 'pages', pageId]);
  }

  /** Checks if resource is available */
  headPageQuestionList(id: Id, pageId: Id): Promise<boolean> {
    return this.doHead([id, 'pages', pageId, 'questions']);
  }

  /** Checks if resource is available */
  headPageQuestion(id: Id, pageId: Id, questionId: Id): Promise<boolean> {
    return this.doHead([id, 'pages', pageId, 'questions', questionId]);
  }

  /** Returns available methods and options */
  optionsSurvey(id: Id): Promise<HttpMethod[]> {
    return this.doOptions([id]);
  }

  /** Returns available methods and options */
  optionsSurveyPage(id: Id, pageId: Id): Promise<any> {
    return this.doOptions([id, 'pages', pageId]);
  }

  /** Returns available methods and options */
  optionsPageQuestion(id: Id, pageId: Id, questionId: Id): Promise<any> {
    return this.doOptions([id, 'pages', pageId, 'questions', questionId]);
  }
}
