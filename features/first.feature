@first
Feature: first feature
  As a user
  I can open app
  So all functionality of app should work fine

  @first-one
  Scenario: first scenario
    When I am logged in to the application with default state
    Then Element 'logo' should be visible
    Then Element 'steps' should be visible
    Then Element 'go button' should be visible
