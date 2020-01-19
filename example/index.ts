'use strict';

import {SurveyApi} from "../src/api/survey-api";
import {SurveymonkeyConfig, URL_BASE} from "../src/api/core";

require('dotenv').config();

const TOKEN_ENV_VAR_NAME = 'SURVEYMONKEY_TOKEN';

const token = process.env[TOKEN_ENV_VAR_NAME];
if (!token) {
  throw Error(`Environmental variable ${TOKEN_ENV_VAR_NAME} is not set`);
}

const config: SurveymonkeyConfig = {token, urlBase: URL_BASE };

const api: SurveyApi = new SurveyApi(config);

async function main(): Promise<void> {
  const {data} = await api.getSurveyList();
  if (data?.length) {
    const {id} = data[0];
    const survey = await api.getSurveyDetails(id);
    console.log(survey);
  }
}

main();
