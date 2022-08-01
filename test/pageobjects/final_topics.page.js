class TopicsPage {
    
    get titleTextLocator () {
        return $('[class="h1"]')
    }

    async checkTitleText (text) {
        await expect(this.titleTextLocator).toHaveText(text)
      }
    

  }
  
  module.exports = new TopicsPage();
  