class HelpPage {
  get stackOverflowSectionTitleLocator() {
    return $('//h2[contains(text(), "Stack")]');
  }

  async stackOverflowTitleIsDisplayed() {
    console.log(`h2 Text 'Stack Overflow' is displayed?: ` + (await this.stackOverflowSectionTitleLocator.isDisplayed()));
  }
}

module.exports = new HelpPage();
