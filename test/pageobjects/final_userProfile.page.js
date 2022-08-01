class UserProfilePage {
    
  get userProfileDropDownMenuLocator() {
    return $('[class="avatar avatar-small circle"]');
  }

  async userProfileDropDownMenuClick() {
    await this.userProfileDropDownMenuLocator.click();
  }

  get goToProfileMenuLinkLocator() {
    return $('[data-ga-click="Header, go to profile, text:your profile"]');
  }

  async goToProfileMenuLinkClick() {
    await this.goToProfileMenuLinkLocator.click();
  }

  async checkUserUrl(text) {
    await expect(browser).toHaveUrl(`https://github.com/${text}`);
  }

  get usernameTextLocator() {
    return $('[class="p-nickname vcard-username d-block"]');
  }

  async checkUsernameText(name) {
    await expect(this.usernameTextLocator).toHaveText(name);
  }
}

module.exports = new UserProfilePage();
