const SearchGoogleTesting = require("./define");

const { describe, it, after, before } = require("mocha");

const chai = require("chai");
const expect = chai.expect;

const chaiAsPromised = require("chai-as-promised");
const { url, testCase } = require("./data");

chai.use(chaiAsPromised);
require("chromedriver");

module.exports.searchGoogleTest = () => {
  try {
    describe("Google search automated testing", async function () {
      this.timeout(50000);
      let driver, page;
      beforeEach(async () => {
        page = new SearchGoogleTesting(url);
      });

      afterEach(async () => {
        await page.quit();
      });
      it("Test number result search google", async () => {
        let result = await page.search(testCase.findText.input);
        expect(result.length >= testCase.findText.expected).to.equal(
          testCase.findText.expected
        );
        return;
      });
      it("Test result findy People", async () => {
        let result = await page.search(testCase.findPeople.input);
        expect(result.length >= testCase.findPeople.expected).to.equal(
          testCase.findPeople.expected
        );
        return;
      });
      it("Test result findy Random Key", async () => {
        let result = await page.search(testCase.findRandom.input);
        expect(result.length >= testCase.findRandom.expected).to.equal(
          testCase.findRandom.expected
        );
        return;
        return;
      });
    });
  } catch (e) {
    console.log(new Error(e.message));
  }
};
