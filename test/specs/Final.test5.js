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

describe('Lesson 28 final Test-case 05', () => {
  it(`Hover the header drop-down menus and check the visible`, async () => {
    // Opens the home page and maximizes the window
    await homePage.open('');
    await browser.maximizeWindow();
    //Hovers the 'Product' drop-down menu
    await homePage.productDropDownMenuHover();
    //Checks the 'Products' drop-down menu is displayed
    await homePage.productDropDownMenuLocator.isDisplayed();
    //Hovers the 'Explore' drop-down menu
    await homePage.exploreDropDownMenuHover();
    //Checks the 'Explore' drop-down menu is displayed
    await homePage.exploreDropDownMenuLocator.isDisplayed();
    //Hovers the 'Pricing' drop-down menu
    await homePage.pricingDropDownMenuHover();
    //Checks the 'Pricing' drop-down menu is displayed
    await homePage.pricingDropDownMenuLocator.isDisplayed();
  });
});
