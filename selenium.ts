let webdriver = require('selenium-webdriver');

/*require("geckodriver");
let firefox = new webdriver.Builder().forBrowser("firefox").build();
firefox.get('https://www.hbomax.com/');
*/
require("chromedriver");
let chrome = new webdriver.Builder().forBrowser("chrome").build();
chrome.get('https://www.hbomax.com/');

/*
require("chromedriver");
let chrome = new webdriver.Builder().forBrowser("chrome").build();
chrome.get('https://www.hbomax.com/');
chrome.findElement(webdriver.By.xpath("//a[@id='promo-banner-btn']")).click();


require("geckodriver");
//let firefox = new webdriver.Builder().forBrowser("firefox").build();
from selenium import webdriver
//# Code 2
let browser = webdriver.Firefox(executable_path="/Users/tthiagar/Downloads/geckodriver") 
browser.get("https://app.finxter.com/")
//firefox.get('https://www.hbomax.com/');
//firefox.quit();
*/


