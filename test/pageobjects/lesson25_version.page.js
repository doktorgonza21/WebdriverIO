class VersionPage {
  

  get docFiveLocator() {
    return $(`[href="https://v5.webdriver.io"]`);
  }

  async docFiveClick() {
    await this.docFiveLocator.click();
  }
}

module.exports = new VersionPage();
