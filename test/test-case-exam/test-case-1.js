const { describe, it, after, before } = require("mocha");

const chai = require("chai");
const expect = chai.expect;

const chaiAsPromised = require("chai-as-promised");
const Page = require("../../driver");

chai.use(chaiAsPromised);
require("chromedriver");

module.exports.testOne = () => {
  try {
    describe("Google search automated testing", async function () {
      this.timeout(50000);
      let driver, page;

      beforeEach(async () => {
        page = new Page("https://hoclieu.sachmem.vn");
      });

      afterEach(async () => {
        await page.quit();
      });

      it("find the input box and google search button", async () => {
        const result = await page.findInputAndButton("lst-ib", "commit");

        expect(result.buttonText).to.equal("Đăng Nhập");
        return;
      });
      it("Login Sach mem", async () => {
        const result = await page.login("nguyenthaitiep@gmail.com", "Then@123");
        expect(result).to.equal(true);
        return;
      });
    });
  } catch (e) {
    console.log(new Error(e.message));
  }
};
