const { Key } = require("selenium-webdriver");
const Page = require("../../driver");
const { success, fail } = require("../../utils/locator");
const { testCase } = require("./data");

class SearchGoogleTesting extends Page {
  constructor(url) {
    super(url);
  }
  async search(text) {
    try {
      const searchInput = await this.findByName("q");
      const searchButton = await this.findByName("btnK");
      let a = await this.driver.wait(async () => {
        await this.write(searchInput, text + Key.ENTER);
        return true;
      }, 5000);

      let result = await this.driver.wait(async () => {
        const resultElements = await this.findAnyByClass("tF2Cxc");
        return resultElements;
      }, 15000);
      return result;
    } catch (e) {
      return fail;
    }
  }
}
module.exports = SearchGoogleTesting;
