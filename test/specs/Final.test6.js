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

describe('Lesson 28 final Test-case 06', () => {
  it(`Check the 'Join for free' form`, async () => {
    // Opens the home page and maximizes the window
    await homePage.open('');
    await browser.maximizeWindow();
    //Hovers the 'Pricing' drop-down menu
    await homePage.pricingDropDownMenuHover();
    //Clicks the 'Plans' link  from drop-down menu
    await homePage.pricingDropDownPlansLinkClick();
    //Clicks the 'Join for free' button
    await pricingPage.joinForFreeButtonClick();
    //Check the title text
    await joinForFreePage.joinForFreeTitleTextCheck();
    //Fills the 'Username' field
    await joinForFreePage.fillUsernameField();
    await browser.pause(1000);
    //Fills the 'Email' field
    await joinForFreePage.fillEmailField();
    await browser.pause(1000);
    //Fills the 'Password' field
    await joinForFreePage.fillPasswordField();
    await browser.pause(1000);
    //Click the check-box
    await joinForFreePage.checkBoxClick();
    await browser.pause(1000);
  });
});
