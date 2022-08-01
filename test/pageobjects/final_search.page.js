class SearchPage {
    
    get typeScriptLinkLocator () {
        return $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]')
    }

    async typeScriptLinkClick () {
        await this.typeScriptLinkLocator.click()
    }

    get igniteramLinkLocator () {
        return $('[href="/igniteram/appium-webdriverio-typescript"]')
    }

    async igniteramLinkClick () {
        await this.igniteramLinkLocator.click()
    }

    async browserUrlContainText (text) {
        await expect(browser).toHaveUrlContaining(text)
    }
    

  }
  
  module.exports = new SearchPage();
  