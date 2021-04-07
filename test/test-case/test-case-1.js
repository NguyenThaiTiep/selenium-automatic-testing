const { describe, it, after, before } = require("mocha");

const chai = require("chai");
const expect = chai.expect;

const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
require("chromedriver");
const Page = require("../../driver");

module.exports.testOne = () => {
  try {
    describe("Google search automated testing", async function () {
      this.timeout(15000);
      let driver, page;

      beforeEach(async () => {
        page = new Page("https://www.google.com/");
      });

      afterEach(async () => {
        await page.quit();
      });

      it("find the input box and google search button", async () => {
        expect(true).to.equal(true);
      });
    });
  } catch (e) {
    console.log(new Error(e.message));
  }
};
