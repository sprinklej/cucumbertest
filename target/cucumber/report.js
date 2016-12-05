$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('CucumberJava/cucumberJava.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 20,
      "value": "#@tag"
    },
    {
      "line": 21,
      "value": "#Feature: Title of your feature"
    },
    {
      "line": 22,
      "value": "#\tI want to use this template for my feature file"
    },
    {
      "line": 24,
      "value": "#@tag1"
    },
    {
      "line": 25,
      "value": "#Scenario: Title of your scenario"
    },
    {
      "line": 26,
      "value": "#Given I want to write a step with precondition"
    },
    {
      "line": 27,
      "value": "#\tAnd some other precondition"
    },
    {
      "line": 28,
      "value": "#When I complete action"
    },
    {
      "line": 29,
      "value": "#\tAnd some other action"
    },
    {
      "line": 30,
      "value": "#\tAnd yet another action"
    },
    {
      "line": 31,
      "value": "#Then I validate the outcomes"
    },
    {
      "line": 32,
      "value": "#\tAnd check more outcomes"
    },
    {
      "line": 34,
      "value": "#@tag2"
    },
    {
      "line": 35,
      "value": "#Scenario Outline: Title of your scenario outline"
    },
    {
      "line": 36,
      "value": "#Given I want to write a step with \u003cname\u003e"
    },
    {
      "line": 37,
      "value": "#When I check for the \u003cvalue\u003e in step"
    },
    {
      "line": 38,
      "value": "#Then I verify the \u003cstatus\u003e in step"
    },
    {
      "line": 40,
      "value": "#Examples:"
    },
    {
      "line": 41,
      "value": "#    | name  |value | status |"
    },
    {
      "line": 42,
      "value": "#    | name1 |  5   | success|"
    },
    {
      "line": 43,
      "value": "#    | name2 |  7   | Fail   |"
    }
  ],
  "line": 47,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature",
  "tags": [
    {
      "line": 46,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 50,
  "name": "Login functionality exists",
  "description": "",
  "id": "cucumberjava;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.openBrowser()"
});
formatter.result({
  "duration": 1610826450,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.goToFacebook()"
});
formatter.result({
  "duration": 4831602133,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginButton()"
});
formatter.result({
  "duration": 134180634,
  "status": "passed"
});
});