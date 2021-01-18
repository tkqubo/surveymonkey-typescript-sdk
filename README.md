# SurveyMonkey TypeScript SDK

## Usage

```ts
import {SurveymonkeyConfig, SurveymonkeyApi} from 'surveymonkey-typescript-sdk';

const token: string = 'YOUR_SURVEYMONKEY_TOKEN';
const config: SurveymonkeyConfig = {token};

const api = new SurveymonkeyApi(config);

async function main(): Promise<void> {
  const {data} = await api.survey.getSurveyList();
  for (const survey of data) {
    console.log(survey);
  }
  process.exit(0);
}

main();
```

## Endpoints coverage

- Overall coverage: `26/56 (46%)`

### [Surveys, Pages, and Questions](https://developer.surveymonkey.com/api/v3/#surveys-pages-and-questions)

Coverage: `22/40 (55%)`

- [`/surveys`](https://developer.surveymonkey.com/api/v3/#surveys)
  - [x] `HEAD /surveys`
  - [ ] `OPTIONS /surveys` -- API not available
  - [x] `GET /surveys`
  - [ ] `POST /surveys`
- [`/surveys/{id}`](https://developer.surveymonkey.com/api/v3/#surveys-id)
  - [x] `HEAD /surveys/{id}`
  - [x] `OPTIONS /surveys/{id}`
  - [x] `GET /surveys/{id}`
  - [ ] `PATCH /surveys/{id}`
  - [ ] `PUT /surveys/{id}`
  - [ ] `DELETE /surveys/{id}`
- [`/surveys/{id}/details`](https://developer.surveymonkey.com/api/v3/#surveys-id-details)  
  - [x] `GET /surveys/{id}/details`
- [`/survey_categories`](https://developer.surveymonkey.com/api/v3/#survey_categories)
  - [x] `HEAD /survey_categories`
  - [ ] `OPTIONS /survey_categories` -- API not available
  - [x] `GET /survey_categories`
- [`/survey_templates`](https://developer.surveymonkey.com/api/v3/#survey_templates)
  - [x] `HEAD /survey_templates`
  - [ ] `OPTIONS /survey_templates` -- API not available
  - [x] `GET /survey_templates`
- [`/survey_languages`](https://developer.surveymonkey.com/api/v3/#survey_languages)
  - [x] `HEAD /survey_languages`
  - [ ] `OPTIONS /survey_languages` -- API not available
  - [x] `GET /survey_languages`
- [`/surveys/{id}/pages`](https://developer.surveymonkey.com/api/v3/#surveys-id-pages)
  - [x] `HEAD /surveys/{id}/pages`
  - [ ] `OPTIONS /surveys/{id}/pages` -- API not available
  - [x] `GET /surveys/{id}/pages`
  - [ ] `POST /surveys/{id}/pages`
- [`/surveys/{id}/pages/{id}`](https://developer.surveymonkey.com/api/v3/#surveys-id-pages-id)
  - [x] `HEAD /surveys/{id}/pages/{id}`
  - [x] `OPTIONS /surveys/{id}/pages/{id}`
  - [x] `GET /surveys/{id}/pages/{id}`
  - [ ] `PATCH /surveys/{id}/pages/{id}`
  - [ ] `PUT /surveys/{id}/pages/{id}`
  - [ ] `DELETE /surveys/{id}/pages/{id}`
- [`/surveys/{id}/pages/{id}/questions`](https://developer.surveymonkey.com/api/v3/#surveys-id-pages-id-questions)
  - [x] `HEAD /surveys/{id}/pages/{id}/questions`
  - [ ] `OPTIONS /surveys/{id}/pages/{id}/questions` -- API not available
  - [x] `GET /surveys/{id}/pages/{id}/questions`
  - [ ] `POST /surveys/{id}/pages/{id}/questions`
- [`/surveys/{id}/pages/{id}/questions/{id}`](https://developer.surveymonkey.com/api/v3/#surveys-id-pages-id-questions-id)
  - [x] `HEAD /surveys/{id}/pages/{id}/questions/{id}`
  - [x] `OPTIONS /surveys/{id}/pages/{id}/questions/{id}`
  - [x] `GET /surveys/{id}/pages/{id}/questions/{id}`
  - [ ] `PATCH /surveys/{id}/pages/{id}/questions/{id}`
  - [ ] `PUT /surveys/{id}/pages/{id}/questions/{id}`
  - [ ] `DELETE /surveys/{id}/pages/{id}/questions/{id}`

### [Survey Responses](https://developer.surveymonkey.com/api/v3/#survey-responses)

Coverage: `4/16 (25%)`

- [`/surveys/{id}/responses`](https://developer.surveymonkey.com/api/v3/#surveys-id-responses)
  - [x] `GET /surveys/{id}/responses`
- [`/collectors/{id}/responses`](https://developer.surveymonkey.com/api/v3/#collectors-id-responses)
  - [ ] `HEAD /collectors/{id}/responses`
  - [ ] `OPTIONS /collectors/{id}/responses`
  - [ ] `GET /collectors/{id}/responses`
  - [ ] `POST /collectors/{id}/responses`
  - [ ] `DELETE /collectors/{id}/responses`
- [`/surveys/{id}/responses/bulk`](https://developer.surveymonkey.com/api/v3/#surveys-id-responses-bulk)
  - [x] `GET /surveys/{id}/responses/bulk`
- [`/collectors/{id}/responses/bulk`](https://developer.surveymonkey.com/api/v3/#collectors-id-responses-bulk)  
  - [ ] `GET /collectors/{id}/responses/bulk`
- [`/surveys/{id}/responses/{id}`](https://developer.surveymonkey.com/api/v3/#surveys-id-responses-id)  
  - [ ] `HEAD /surveys/{id}/responses/{id}`
  - [ ] `OPTIONS /surveys/{id}/responses/{id}`
  - [x] `GET /surveys/{id}/responses/{id}`
  - [ ] `PATCH /surveys/{id}/responses/{id}`
  - [ ] `PUT /surveys/{id}/responses/{id}`
  - [ ] `DELETE /surveys/{id}/responses/{id}`
- [`/surveys/{id}/responses/{id}/details`](https://developer.surveymonkey.com/api/v3/#surveys-id-responses-id-details)
  - [x] `GET /surveys/{id}/responses/{id}/details`
- [`/collectors/{id}/responses/{id}/details`](https://developer.surveymonkey.com/api/v3/#collectors-id-responses-id-details)  
  - [ ] `GET /collectors/{id}/responses/{id}/details`
