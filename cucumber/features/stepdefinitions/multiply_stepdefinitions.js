const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
    Given ("I have two numbers 2 and 6", ()=>{
       let x= 6;
       let y=2;
    })
    When ("I multiply 2 with 6", () =>{
        var result = 12*6;
    })
    Then ("The product should 12", () =>{
        if (result === 12){
            return "Passed"
        }
        return "Failed";
    })