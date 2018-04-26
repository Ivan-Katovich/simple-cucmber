@first
Feature: first feature
  As a user
  I can open app
  So all functionality of app should work fine

  @third-one
  Scenario: third scenario
    Given I am on the 'login page'
    When I login to the application
    Then '1'st item in 'list' should contain 'adress' row with text 'Tolstogo 10'
    Then 'VW center' item in 'list' should contain 'phone' row with text '+375 29 100 00 00'
    Then 'BMV X5' item in 'table' should contain 'provider' cell with text 'Atlant M'
    Then '2'nd item in 'table' should contain 'price' cell with text '10000$'

