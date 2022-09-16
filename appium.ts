const wdio = require("webdriverio");
const assert = require("assert");
const options = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "deviceName": "emulator-5554",
    "newCommandTimeout": 360,
    "app": "/Users/tthiagar/Downloads/HBOMax-Android-DMX-RC-52.45.0.6.35245006.apk"
  }
};
async function launchApp () {
    const client = await wdio.remote(options);
    const button = await client.$('//android.widget.Button[@resource-id="UnauthenticatedProfileIcon"]')
    await button.click()
    const profile = await client.$('//android.widget.Button[@resource-id="PaywallScreenButton-0"]')
    const value = await profile.getText();
    assert.strictEqual(value, "CHOOSE A PLAN");
    await client.deleteSession();
  }
  launchApp();