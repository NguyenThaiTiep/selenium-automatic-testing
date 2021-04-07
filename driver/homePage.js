const Driver = require(".");
const locator = require("../utils/locator");

const searchInputSelectorId = locator.searchInputSelectorId;
const searchButtonSelectorName = locator.searchButtonSelectorName;

let searchInput, searchButton;
module.exports.findInputAndButton = async function () {
  searchInput = await this.findById(searchInputSelectorId);
  searchButton = await this.findByName(searchButtonSelectorName);

  const result = await this.driver.wait(async function () {
    const searchButtonText = await searchButton.getAttribute("value");
    const searchInputEnableFlag = await searchInput.isEnabled();

    return {
      inputEnabled: searchInputEnableFlag,
      buttonText: searchButtonText,
    };
  }, 5000);
  return result;
};
