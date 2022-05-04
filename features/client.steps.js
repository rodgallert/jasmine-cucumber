const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const path = require('path');
const { ServiceBuilder, Options } = require('selenium-webdriver/chrome');
const { Builder, By, Key, until } = require('selenium-webdriver');

const geckoDriverPath = "D:/repos/jasmine-cucumber/driver/chromedriver.exe"
const serviceBuilder = new ServiceBuilder(geckoDriverPath);
// Sets path for Chrome executable, unnecessary if standard Chrome installation is used (c: directory)
const options = new Options;
options.setChromeBinaryPath('D:/Program Files/Google/Chrome/Application/chrome.exe')

const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .setChromeService(serviceBuilder)
    .build();

Given('I have {string} clients in the database', function (qty) {
    console.log("Data inserted into DB");
});

When('I access the home page', async function () {
    await driver.get('http://localhost:3001');
    await driver.sleep(1000);
});

Then('List {string} clients', async function (qty) {
    assert(await driver.findElement(By.Name('tr')).length.toBeEqual(10));
    driver.quit();
});