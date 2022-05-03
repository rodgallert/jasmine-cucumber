Feature: Clients
    Scenario: List of clients
        Given I have {10} clients in the database
        When I access the home page
        Then List {10} clients