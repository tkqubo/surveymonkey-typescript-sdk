'use strict';

import {SurveyApi, SurveymonkeyConfig} from '../src/api';
import {ResponseApi} from "../src/api/response-api";

require('dotenv').config();

const TOKEN_ENV_VAR_NAME = 'SURVEYMONKEY_TOKEN';

const token = process.env[TOKEN_ENV_VAR_NAME];
if (!token) {
  throw Error(`Environmental variable ${TOKEN_ENV_VAR_NAME} is not set`);
}

const config: SurveymonkeyConfig = {token};

const surveyApi: SurveyApi = new SurveyApi(config);
const responseApi = new ResponseApi(config);

const id = 275716745; // all-questions
// const id = 275717128; // all-questions2
// const id = 275717444; // all-questions3
// const id = 275730614; // all-questions4
async function main(): Promise<void> {
  const surveyIdAndResponseIds: [number, number][] = [
    [275730614, 11270379700],
    [275730614, 11270380506],
    [275716745, 11269912088],
    [275716745, 11269912382],
    [275716745, 11269912714],
    [275717128, 11269922375],
    [275717444, 11269927338],
  ];
  console.log('[');
  for (const [sid, rid] of surveyIdAndResponseIds) {
    const res = await responseApi.getResponseDetail(sid, rid);
    console.log(JSON.stringify(res, null, 2));
    console.log(',');
  }
  console.log(']');
  // const {data} = await surveyApi.getSurveyList();
  // if (data?.length) {

  //   for (const datum of data!) {
  //     console.log(JSON.stringify(datum, null, 2));
  //   }
  // }
}

main();
