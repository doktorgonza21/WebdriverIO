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

describe('Lesson 28 final Test-case 10', () => {
  it(`Print the list of open position`, async () => {
    // Opens the home page and maximizes the window
    await homePage.open('');
    await browser.maximizeWindow();
    // Scrolls to the footer 'Careers' link
    await homePage.footerCareersLinkScroll();
    // Clicks the footer 'Careers' link
    await homePage.footerCareersLinkClick();
    // Clicks the 'Open position'link
    await careersPage.openPositionLinkClick();
    // Print the positions to console
    await careersPage.listPositionGetText();
  });
});
