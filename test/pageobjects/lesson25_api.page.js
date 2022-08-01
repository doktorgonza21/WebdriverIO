class ApiPage {
  get contributeLinkLocator() {
    return $(`//*[contains(text(), "Contribute")][contains(@href, "#contribute")]`);
  }

  async contributeLinkClick() {
    await this.contributeLinkLocator.click();
  }
}

module.exports = new ApiPage();
