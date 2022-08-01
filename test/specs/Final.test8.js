const pricingPage = require('../pageobjects/final_pricing.page.js');
const signInPage = require('../pageobjects/final_signIn.page.js');
const randomGenerator = require('../pageobjects/final_randomGenerator.page.js');
const homePage = require('../pageobjects/final_home.page.js');
const userProfilePage = require('../pageobjects/final_userProfile.page.js');
const joinForFreePage = require('..//pageobjects/final_joinForFree.page.js');
const explorePage = require('../pageobjects/final_explore.page.js');
const topicsPage = require('../pageobjects/final_topics.page.js');
const searchPage = require('../pageobjects/final_search.page.js');
const trialPlanPage = require('../pageobjects/final_trialPlan.page.js');
const enterpriseServerPage = require('../pageobjects/final_enterpriseServer.page.js');
const careersPage = require('../pageobjects/final_careers.page.js');
const signUpPage = require('../pageobjects/final_signUp.page.js');

describe('Lesson 28 final Test-case 08', () => {
  it(`Check the 'Search'`, async () => {
    // Opens the home page and maximizes the window
    await homePage.open('');
    await browser.maximizeWindow();
    // Clicks the 'Search' field
    await homePage.searchFieldClick();
    // Fills the 'Search' field
    await homePage.fillSearchField('webdriverio');
    // Presses 'Enter' button 
    await browser.keys('Enter');
    // Clicks the 'TypeScript' link
    await searchPage.typeScriptLinkClick();
    // Clicks the 'igniteram/appium-webdriverio-typescript' link
    await searchPage.igniteramLinkClick();
    // Check the URL text
    await searchPage.browserUrlContainText('webdriverio');
  });
});
