const { Key, WebElement, By } = require("selenium-webdriver");
const Page = require("../../driver");
const { success, fail } = require("../../utils/locator");
const { testCase } = require("./data");

class LoginSachmemTesting extends Page {
  constructor(url) {
    super(url);
    //https://accounts.sachmem.vn/users/sign_in
  }
  async login(username, password) {
    try {
      const userNameInput = await this.findById("user_email");
      const passwordInput = await this.findById("user_password");
      const loginButton = await this.findByName("commit");
      await this.write(userNameInput, username);
      await this.write(passwordInput, password || "");
      await loginButton.click();
      let result = await this.driver.wait(() => {
        return true;
      }, 25000);

      return result;
    } catch (e) {
      console.log(e);
      return fail;
    }
  }
}
module.exports = LoginSachmemTesting;
