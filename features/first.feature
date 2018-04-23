@first
Feature: first feature
  As a user
  I can open app
  So all functionality of app should work fine

  @first-one
  Scenario: first scenario
    When I am logged in to the application with default state
    Then Element 'logo' should be displayed
    Then Element 'steps' should be displayed
    Then Element 'go button' should be displayed

  @first-one
  Scenario: second scenario
    Given I am on the 'login page'
    Then Element 'logo' should be displayed
    Then Element 'login button' should be displayed
    When I login to the application
    Then Element 'logo' should be displayed
    Then Element 'steps' should be displayed

