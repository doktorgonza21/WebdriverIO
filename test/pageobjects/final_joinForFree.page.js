const randomGenerator = require("../pageobjects/final_randomGenerator.page.js")

class JoinForFreePage {
    
    get titleTextLocator () {
        return $('[class="d-none d-md-block mt-0 mb-3 text-center h1 lh-condensed-ultra "]')
    }

    async joinForFreeTitleTextCheck () {
        await expect(this.titleTextLocator).toHaveText(`First, let's create your user account`)
    }

    get usernameFieldLocator () {
        return $('#user_login')
    }

    async fillUsernameField () {
        await this.usernameFieldLocator.addValue(randomGenerator.usernameGenerator())
    }

    get emailFieldLocator () {
        return $('#user_email')
    }

    async fillEmailField () {
        await this.emailFieldLocator.addValue(randomGenerator.emailGenerator())
    }

    get passwordFieldLocator () {
        return $('#user_password')
    }

    async fillPasswordField () {
        await this.passwordFieldLocator.addValue(randomGenerator.passwordGenerator())
    }

    get checkBoxLocator () {
        return $('#all_emails')
    }

    async checkBoxClick () {
        await this.checkBoxLocator.click()
    }

  }
  
  module.exports = new JoinForFreePage();
  



