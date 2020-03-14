# SurveyMonkey TypeScript SDK

## Implemented endpoints

### [Surveys, Pages, and Questions](https://developer.surveymonkey.com/api/v3/#surveys-pages-and-questions)

Coverage: `6/40 (15%)`

- [`/surveys`](https://developer.surveymonkey.com/api/v3/#surveys)
  - [ ] `HEAD /surveys`
  - [ ] `OPTIONS /surveys`
  - [x] `GET /surveys`
  - [ ] `POST /surveys`
- [`/surveys/{id}`](https://developer.surveymonkey.com/api/v3/#surveys-id)
  - [ ] `HEAD /surveys/{id}`
  - [ ] `OPTIONS /surveys/{id}`
  - [x] `GET /surveys/{id}`
  - [ ] `PATCH /surveys/{id}`
  - [ ] `PUT /surveys/{id}`
  - [ ] `DELETE /surveys/{id}`
- [`/surveys/{id}/details`](https://developer.surveymonkey.com/api/v3/#surveys-id-details)  
  - [x] `GET /surveys/{id}/details`
- [`/survey_categories`](https://developer.surveymonkey.com/api/v3/#survey_categories)
  - [ ] `HEAD /survey_categories`
  - [ ] `OPTIONS /survey_categories`
  - [x] `GET /survey_categories`
- [`/survey_templates`](https://developer.surveymonkey.com/api/v3/#survey_templates)
  - [ ] `HEAD /survey_templates`
  - [ ] `OPTIONS /survey_templates`
  - [x] `GET /survey_templates`
- [`/survey_languages`](https://developer.surveymonkey.com/api/v3/#survey_languages)
  - [ ] `HEAD /survey_languages`
  - [ ] `OPTIONS /survey_languages`
  - [x] `GET /survey_languages`
- [`/surveys/{id}/pages`](https://developer.surveymonkey.com/api/v3/#surveys-id-pages)
  - [ ] `HEAD /surveys/{id}/pages`
  - [ ] `OPTIONS /surveys/{id}/pages`
  - [ ] `GET /surveys/{id}/pages`
  - [ ] `POST /surveys/{id}/pages`
- [`/surveys/{id}/pages/{id}`](https://developer.surveymonkey.com/api/v3/#surveys-id-pages-id)
  - [ ] `HEAD /surveys/{id}/pages/{id}`
  - [ ] `OPTIONS /surveys/{id}/pages/{id}`
  - [ ] `GET /surveys/{id}/pages/{id}`
  - [ ] `PATCH /surveys/{id}/pages/{id}`
  - [ ] `PUT /surveys/{id}/pages/{id}`
  - [ ] `DELETE /surveys/{id}/pages/{id}`
- [`/surveys/{id}/pages/{id}/questions`](https://developer.surveymonkey.com/api/v3/#surveys-id-pages-id-questions)
  - [ ] `HEAD /surveys/{id}/pages/{id}/questions`
  - [ ] `OPTIONS /surveys/{id}/pages/{id}/questions`
  - [ ] `GET /surveys/{id}/pages/{id}/questions`
  - [ ] `POST /surveys/{id}/pages/{id}/questions`
- [`/surveys/{id}/pages/{id}/questions/{id}`](https://developer.surveymonkey.com/api/v3/#surveys-id-pages-id-questions-id)
  - [ ] `HEAD /surveys/{id}/pages/{id}/questions/{id}`
  - [ ] `OPTIONS /surveys/{id}/pages/{id}/questions/{id}`
  - [ ] `GET /surveys/{id}/pages/{id}/questions/{id}`
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
