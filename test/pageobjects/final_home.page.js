class HomePage {
  open(path) {
    return browser.url(`https://github.com/${path}`);
  }

  get headerSignUpLocator() {
    return $('//*[contains(text(), "Sign up")][contains(@href, "/signup?ref_cta=Sign+up&")]');
  }

  async headerSignUpClick() {
    await this.headerSignUpLocator.click();
  }

  get footerSignUpButtonLocator () {
    return $('[class="btn-mktg mr-2 mb-2 width-full width-sm-auto btn-signup-mktg"]')
  }

  async footerSignUpButtonScroll () {
    await this.footerSignUpButtonLocator.scrollIntoView({block:'center'})
  }

  async footerSignUpButtonClick () {
    await this.footerSignUpButtonLocator.click()
  }

  get headerSignInLinkLocator () {
    return $('[class="HeaderMenu-link flex-shrink-0 no-underline"]')
  }

  async headerSignInLinkClick () {
    await this.headerSignInLinkLocator.click()
  }

  get exploreDropDownMenuLocator () {
    return $('//summary[contains(text(), "Explore")]/..')
  }

  get exploreDropDownGithubLinkLocator () {
    return $('//*[contains(@href, "/explore") and contains(text(), "Explore GitHub")]')
  }

  async exploreDropDownGithubLinkClick () {
    await this.exploreDropDownGithubLinkLocator.click()
  }

  async exploreDropDownMenuHover () {
    await this.exploreDropDownMenuLocator.moveTo()
  }

  get productDropDownMenuLocator () {
    return $('//summary[contains(text(), "Product")]')
  }

  async productDropDownMenuHover () {
    await this.productDropDownMenuLocator.moveTo()
  }

  get pricingDropDownMenuLocator () {
    return $('//summary[contains(text(), "Pricing")]')
  }

  async pricingDropDownMenuHover () {
    await this.pricingDropDownMenuLocator.moveTo()
  }

  get pricingDropDownPlansLinkLocator () {
    return $('//*[contains(@href, "/pricing") and contains(text(), "Plans")]')
  }

  async pricingDropDownPlansLinkClick () {
    await this.pricingDropDownPlansLinkLocator.click()
  }

  get teamHeaderLinkLocator () {
    return $('[href="/team"][class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block"]')
  }

  async teamHeaderLinkHover () {
    await this.teamHeaderLinkLocator.moveTo()
  }

  get marketplaceHeaderLinkLocator () {
    return $('[href="/marketplace"]')
  }

  async marketplaceHeaderLinkHover () {
    await this.marketplaceHeaderLinkLocator.moveTo()
  }

  get searchFieldLocator () {
    return $('[aria-label="Search GitHub"]')
  }

  async searchFieldClick () {
    await this.searchFieldLocator.click()
  }

  async fillSearchField (text) {
    await this.searchFieldLocator.addValue(text)
  }

  get buildsLikeTheBestElementLocator () {
    return $('//*[contains(text(), "Build like")]')
  }

  async buildsLikeTheBestElementScroll () {
    await this.buildsLikeTheBestElementLocator.scrollIntoView({block:'center'})
  }

  get startFreeTrialButtonLocator () {
    return $('[data-test-selector="start-trial-button"]')
  }

  async startFreeTrialButtonClick () {
    await this.startFreeTrialButtonLocator.click()
  }

  get footerCareersLinkLocator () {
    return $('[href="/about/careers"]')
  }

  async footerCareersLinkScroll () {
    await this.footerCareersLinkLocator.scrollIntoView({block:'center'})
  }

  async footerCareersLinkClick () {
    await this.footerCareersLinkLocator.click()
  }







}

module.exports = new HomePage();
