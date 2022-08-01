const headerPage = require("../pageobjects/lesson25_header.page.js")
const footerPage = require("../pageobjects/lesson25_footer.page.js")
const apiPage = require("../pageobjects/lesson25_api.page.js");
const helpPage = require("../pageobjects/lesson25_help.page.js");
const versionPage = require("../pageobjects/lesson25_version.page.js");

describe('Lesson 27 test', () => {
  it(`Check the 'Contribute' link`, async () => {
    await browser.url("https://webdriver.io/");
    await browser.maximizeWindow();
    //Clicks to header 'API' link
    await headerPage.apiLinkClick();
    //Clicks to 'Contridute' right side link 
    await apiPage.contributeLinkClick();
  });  
    
  it(`Check the 'Stack Overflow' section title text`, async () => {
    //Scrolls to the website footer 'Help' link
    await footerPage.helpLinkScroll();
    //Clicks the website footer 'Help' link
    await footerPage.helpLinkClick();
    //Checks the title text is displayed
    await helpPage.stackOverflowTitleIsDisplayed();
  });

  it(`Check the v5 'documentation' link`, async () => {  
    //Clicks the header 'v7' link
    await headerPage.versionLinkClick();
    //Clicks the v5 'documentation' link
    await versionPage.docFiveClick();
    
  });
});
