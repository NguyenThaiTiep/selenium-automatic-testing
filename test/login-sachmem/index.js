const { describe, it, after, before } = require("mocha");

const chai = require("chai");
const expect = chai.expect;

const chaiAsPromised = require("chai-as-promised");
const LoginSachmemTesting = require("./define");

const { url, testCase } = require("./data");

chai.use(chaiAsPromised);
require("chromedriver");

module.exports.loginSachmem = () => {
  try {
    describe("Login Sach mem", async function () {
      this.timeout(50000);
      let driver, page;

      beforeEach(async () => {
        page = new LoginSachmemTesting(url);
      });

      afterEach(async () => {
        await page.quit();
      });

      it("Login Sach mem", async () => {
        const result = await page.login(
          testCase.loginFail.input.username,
          testCase.loginFail.input.password
        );
        expect(result).to.equal(true);
        return;
      });
    });
  } catch (e) {
    console.log(new Error(e.message));
  }
};
