const randomGenerator = require("../pageobjects/final_randomGenerator.page.js")

class EnterpriseServerPage {
    
    get nameFieldLocator () {
        return $('#contact_request_name')
    }

    async fillNameField () {
        await this.nameFieldLocator.addValue(randomGenerator.usernameGenerator())
    }

    get companyFieldLocator () {
        return $('#contact_request_organization_name')
    }

    async fillCompanyField () {
        await this.companyFieldLocator.addValue(randomGenerator.usernameGenerator())
    }

    get workEmailFieldLocator () {
        return $('#contact_request_email')
    }

    async fillWorkEmailField () {
        await this.workEmailFieldLocator.addValue(randomGenerator.emailGenerator())
    }

    get phoneFieldLocator () {
        return $('#contact_request_phone')
    }

    async fillPhoneField () {
        await this.phoneFieldLocator.addValue(randomGenerator.phoneGenerator())
    }

    get azureRadioButtonLocator () {
        return $('#contact_request_instance_type_azure')
    }

    async azureRadioButtonClick () {
        await this.azureRadioButtonLocator.click()
    }

    get questionYesRadioButtonLocator () {
        return $('#questions_yes')
    }

    async questionYesRadioButtonClick () {
        await this.questionYesRadioButtonLocator.click()
    }

    get checkBoxLocator () {
        return $('#contact_request_agreed_to_terms')
    }

    async checkBoxClick () {
        await this.checkBoxLocator.click()
    }

  }
  
  module.exports = new EnterpriseServerPage();
  



