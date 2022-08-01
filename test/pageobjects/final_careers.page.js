class CareersPage {
    
    get openPositionLinkLocator () {
        return $('[href="#positions"]')
    }

    async openPositionLinkClick () {
        await this.openPositionLinkLocator.click()
    }

    get listPositionsLocator () {
        return $$('[class="text-left flex-auto py-4"]')
    }

    async listPositionGetText () {
        await this.listPositionsLocator.forEach(element => console.log(element.getText()));
    }

    
    
    

  }
  
  module.exports = new CareersPage();
  