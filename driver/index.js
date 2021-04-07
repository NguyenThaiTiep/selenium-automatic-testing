const { Builder, By, until } = require("selenium-webdriver");

const chrome = require("selenium-webdriver/chrome");
let o = new chrome.Options();
// o.addArguments('start-fullscreen');
o.addArguments("disable-infobars");
// o.addArguments('headless'); // running test on visual chrome browser
o.setUserPreferences({ credential_enable_service: false });

class Page {
  constructor(url) {
    this.driver = new Builder()
      .setChromeOptions(o)
      .forBrowser("chrome")
      .build();
    this.visit(url);
  }

  // visit a webpage
  async visit(theUrl) {
    return await this.driver.get(theUrl);
  }

  // quit current session
  async quit() {
    return await this.driver.quit();
  }

  // wait and find a specific element with it's id
  async findById(id) {
    await this.driver.wait(
      until.elementLocated(By.id(id)),
      15000,
      "Looking for element"
    );
    return await this.driver.findElement(By.id(id));
  }

  // wait and find a specific element with it's name
  async findByName(name) {
    await this.driver.wait(
      until.elementLocated(By.name(name)),
      15000,
      "Looking for element"
    );
    return await this.driver.findElement(By.name(name));
  }

  // fill input web elements
  async write(el, txt) {
    return await el.sendKeys(txt);
  }
}

module.exports = Page;
