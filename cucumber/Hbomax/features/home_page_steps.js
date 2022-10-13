const { Given, When, Then } = require('@cucumber/cucumber');
const { pageClass } = require('./base_steps');
    
Given("I launch the MAX app", () =>{
    window.open("https://www.hbomax.com/")
    })
    When ('I navigate to DotCom Home page', async() => {

    });
    Then ("I should land on Home page with Sign-in and Signup CTA", () =>{
        
    });