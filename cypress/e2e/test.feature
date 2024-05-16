Feature: Cucumber Cypress Test

Scenario: Incorrect Password login

    Given I open the website

    When I enter my username "standard_user" and password "secret_sauce1"

    And I click the login button

    Then I should be able to see error message for incorrect password

Scenario: Cart Validation

    Given I open the website

    When I enter my username "standard_user" and password "secret_sauce"

    And I click the login button

    Then I should be able to login

    And I change the filter to price low to high dropdown

    Then I add the required product to cart

    Then I should verify the cart details like price  and description  on cart page

Scenario: Product Checkout

    Given I open the website

    When I enter my username "standard_user" and password "secret_sauce"

    And I click the login button

    Then I should be able to login

    And I change the filter to price low to high dropdown

    Then I add the required product to cart

    Then I should verify the cart details like price  and description  on cart page

    And I checkout product

    Then I fill all the information

    And I click continue 

    Then I finish the checkout