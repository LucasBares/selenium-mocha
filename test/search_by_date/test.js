const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");
const webdriver = require("selenium-webdriver");
const chromedriver = require("chromedriver");

describe("Automation challenge", () => {
  var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

  it("should go to google and search for test automation", async () => {
    await driver.get("https://www.google.com");

    await driver
      .findElement(By.name("q"))
      .sendKeys("test automation", Key.ENTER);
  });

  after(async () => driver.quit());
});
