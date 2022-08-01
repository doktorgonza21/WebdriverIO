const randomGenerator = require("../pageobjects/final_randomGenerator.page.js");

class SignUpPage {
  get emailFieldLocator() {
    return $(`#email`);
  }

  async fillEmail() {
    await this.emailFieldLocator.waitForDisplayed();
    await this.emailFieldLocator.addValue(randomGenerator.emailGenerator());
  }

  get emailContinueButtonLocator() {
    return $(`[data-optimizely-event="click.signup_continue.email"]`);
  }

  async emailContinueButtonClick() {
    await this.emailContinueButtonLocator.click();
  }

  get passwordFieldLocator() {
    return $(`#password`);
  }

  async fillPassword() {
    await this.passwordFieldLocator.waitForDisplayed();
    await this.passwordFieldLocator.addValue(
      randomGenerator.passwordGenerator()
    );
  }

  get eyeLocator() {
    return $(`.octicon.octicon-eye`);
  }

  async eyeClick() {
    await this.eyeLocator.click();
  }

  get passwordContinueButtonLocator() {
    return $(`[data-optimizely-event="click.signup_continue.password"]`);
  }

  async passwordContinueButtonClick() {
    await this.passwordContinueButtonLocator.click();
  }

  get usernameFieldLocator() {
    return $(`#login`);
  }

  async fillUsername() {
    await this.usernameFieldLocator.waitForDisplayed();
    await this.usernameFieldLocator.addValue(
      randomGenerator.usernameGenerator()
    );
  }

  get usernameContinueButtonLocator() {
    return $(`[data-optimizely-event="click.signup_continue.username"]`);
  }

  async usernameContinueButtonClick() {
    await this.usernameContinueButtonLocator.click();
  }

  get prodUpdatesFieldLocator() {
    return $(`#opt_in`);
  }

  async fillProdUpdates() {
    await this.prodUpdatesFieldLocator.waitForDisplayed();
    await this.prodUpdatesFieldLocator.addValue('n');
  }

  get prodUpdatesContinueButtonLocator() {
    return $(`[data-optimizely-event="click.signup_continue.opt-in"]`);
  }

  async prodUpdatesContinueButtonClick() {
    await this.prodUpdatesContinueButtonLocator.click();
  }

  get verifyTextLocator() {
    return $(`[class="text-mono text-bold signup-text-prompt mt-4"]`);
  }

  async verifyTextValidation() {
    await expect(this.verifyTextLocator).toHaveText('Verify your account');
  }
}

module.exports = new SignUpPage();
