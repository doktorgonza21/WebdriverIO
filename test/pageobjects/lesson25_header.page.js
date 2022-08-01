class HeaderPage {
  get apiLinkLocator() {
    return $(`//div/a[contains(text(), "API")][contains(@href, "/docs/api")]`);
  }

  async apiLinkClick() {
    await this.apiLinkLocator.click();
  }

  get versionLinkLocator() {
    return $(`//*[contains(text(), "v7")][contains(@href, "/versions")]`);
  }

  async versionLinkClick() {
    await this.versionLinkLocator.click();
  }
}

module.exports = new HeaderPage();
