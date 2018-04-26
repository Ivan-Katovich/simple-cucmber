@first-feature
Feature: first feature
  As a user
  I can open app
  So all functionality of app should work fine

  @first-scenario @visibility @wip
  Scenario: first scenario
    Given I am on the 'login page'
    Then Element 'logo' should be displayed
    Then Element 'user name' should be displayed
    Then Element 'password' should be displayed
    Then Element 'login button' should be displayed


  @second-scenario @visibility
  Scenario: second scenario
    Given I am on the 'login page'
    Then Element 'logo' should be displayed
    Then Element 'login button' should be displayed
    When I login to the application
    Then Element 'logo' should be displayed
    Then Element 'steps' should be displayed


  @third-scenario @text-checking
  Scenario: third scenario
    Given I am on the 'login page'
    When I login to the application
    Then '1'st item in 'list' should contain 'adress' row with text 'Tolstogo 10'
    Then 'VW center' item in 'list' should contain 'phone' row with text '+375 29 100 00 00'
    Then 'BMV X5' item in 'table' should contain 'provider' cell with text 'Atlant M'
    Then '2'nd item in 'table' should contain 'price' cell with text '10000$'

