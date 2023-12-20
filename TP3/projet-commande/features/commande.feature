Feature: Validation du système de passage de commande
  As a client, I want to be able to validate my order

  Scenario Outline: Order validation
    Given the client has selected <product>
    When the client validates his order
    Then the order should be validated successfully

    Examples: 
      | product  |
      | product1 |
      | product2 |
      | product3 |
