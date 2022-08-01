class PricingPage {
    
    get joinForFreeButtonLocator () {
        return $('[test_selector="plan-input-free"]')
    }

    async joinForFreeButtonClick () {
        await this.joinForFreeButtonLocator.click()
    }
    

  }
  
  module.exports = new PricingPage();
  