class ExplorePage {
    
    get headerTopicsLinkLocator () {
        return $('[data-ga-click="Explore, go to topics, location:explore nav"]')
    }

    async headerTopicsLinkClick () {
        await this.headerTopicsLinkLocator.click()
    }
    

  }
  
  module.exports = new ExplorePage();
  