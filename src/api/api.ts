'use strict';

import {ApiBase, SurveymonkeyConfig} from './core';
import {ResponseApi, SurveyApi} from './impl';

export class SurveymonkeyApi extends ApiBase {
  readonly survey: SurveyApi;
  readonly response: ResponseApi;

  constructor(protected config: SurveymonkeyConfig) {
    super(config);
    this.survey = new SurveyApi(config);
    this.response = new ResponseApi(config);
  }
}
