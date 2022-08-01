class TrialPlanPage {
    
    get enterpriseCloudElementLocator () {
        return $('[class="rounded-3 px-2 pt-5 pb-2 pricing-recommended-plan"]')
    }

    async enterpriseCloudElementClick () {
        await this.enterpriseCloudElementLocator.click()
    }

    get enterpriseServerElementLocator () {
        return $('[class="rounded-3 px-2 pt-5 pb-2"]')
    }

    async enterpriseServerElementClick () {
        await this.enterpriseServerElementLocator.click()
    }
    

  }
  
  module.exports = new TrialPlanPage();
  