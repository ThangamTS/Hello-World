Feature: DotCom HBOMAX Page
    As a user I should be able to perform all the functionalities on ShowLanding Page

    Background:
        Given I launch HBO MAX app

    Scenario Outline: <SCENARIO_DESCRIPTION>: Validating show detail page via Show Cards
        When I access the application as "<USER_TYPE>" user
        Then I validate the CTA on the page as "<USER_TYPE>" user
          | Home   |
          | Browse |
          | Search |
          | Sports |
        @EMEA @PH
        Examples:
            | SCENARIO_DESCRIPTION                    | USER_TYPE      |
            | Anonymous user                          | anonymous      |
            | Authenticated user with no subscription | non-entitled   |