class DocsPage {
  get docsLink() {
    return $(`//*[contains(text(), "Docs")][contains(@href, "/docs/gettingstarted")]`);
  }

  async docsClick() {
    await this.docsLink.click();
  }
}

module.exports = new DocsPage();
