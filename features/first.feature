@first
Feature: first feature
  As a user
  I can open app
  So all functionality of app should work fine

  @second-one
  Scenario: second scenario
    Given I am on the 'login page'
    Then Element 'logo' should be displayed
    And Element 'login button' should be displayed
    When I login to the application
    Then Element 'logo' should be displayed
    And Element 'steps' should be displayed

