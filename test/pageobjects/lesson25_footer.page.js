class FooterPage {
  get footerHelpLinkLocator() {
    return $('[href="/community/support"][class="footer__link-item"]');
  }

  async helpLinkScroll() {
    await this.footerHelpLinkLocator.scrollIntoView();
  }

  async helpLinkClick() {
    await this.footerHelpLinkLocator.click();
  }
}

module.exports = new FooterPage();
