# Questions and answers

A question and answer forum that allows users to post questions and receive answers from other users. A list of questions and answers are available for users to see.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/sleahy115/Questions.git` this repository
* `cd questions`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Planning

### Route map
* Route-Index->
* app/models/questions.js->
* app/routes/index.js->
* app/templates/index.hbs->
* app/components/question-tile.js->
* app/templates/components/question-tile.hbs->
* app/components/question-details.js->
* app/templates/components/question-details.hbs->
* app/components/new-question.js->
* app/templates/components/new-question.hbs->
* app/components/update-question.js->
* app/templates/components/update-question.hbs->
* app/templates/components/delete-question.hbs

* Route-Answers->
* model-questions->
* app/models/answers.js->
* app/routes/index.js->
* app/templates/index.hbs->
* app/components/question-details.js->
* app/templates/components/question-details.hbs->
* app/components/new-answer.js->
* app/templates/components/new-answer.hbs->
* app/components/answer-details.js->
* app/templates/components/answer-details.hbs->
* app/components/update-answer.js->
* app/templates/components/update-answer.hbs->
* app/templates/components/delete-answer.hbs


### Specs

|     Spec     |     Input     |     Output     |
| ------------ | ------------- | -------------- |
|User enters question in form |Author: Bob smith, Question "Why is the sky blue"| List of questions displays on homepage|
|user clicks on question for more information|Question "Why is the sky blue"| user is taken to new page with question, author, date, and notes about question|
|user deletes question|question is deleted from database and from list on main page| question ""|
|user updates question|author: Bob Smith|Author" Tom Jones|
|option for other users to answer questions on question page|question: "Why is the sky blue?"| Answer: "Because its better than green"|
|users can delete answers|Answer: "Because its better than green"|Answer: ""|




## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

Copyright (c) 201 Sarah Leahy All Rights Reserved.
