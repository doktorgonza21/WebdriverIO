class SignInPage {

  get loginFieldLocator() {
    return $("#login_field");
  }

  async fillLogin(login) {
    await this.loginFieldLocator.addValue(login);
  }

  get passwordFieldLocator() {
    return $("#password");
  }

  async fillPassword(pass) {
    await this.passwordFieldLocator.addValue(pass);
  }

  get signInButtonLocator() {
    return $('[class="btn btn-primary btn-block js-sign-in-button"]');
  }

  async signInButtonClick() {
    await this.signInButtonLocator.click();
  }

  get signInErrorMessageLocator () {
    return $('#js-flash-container')
  }

  async checkSignInErrorMessage(name) {
    await expect(this.signInErrorMessageLocator).toHaveText(name);
  }
}

module.exports = new SignInPage();
