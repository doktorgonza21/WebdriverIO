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

describe('Lesson 28 final Test-case 03', () => {
  it(`Test the 'Sign In' form with valid data`, async () => {
    // Opens the home page and maximizes the window
    await homePage.open('');
    await browser.maximizeWindow();
    // Clicks the 'Sign In' header link
    await homePage.headerSignInLinkClick();
    // Fills the 'Login' field
    await signInPage.fillLogin('luxesoft.testing@gmail.com');
    // Fills the 'Password' field
    await signInPage.fillPassword('Luxe2022Soft!');
    // Clicks the 'Sign In' button
    await signInPage.signInButtonClick();
    // Clicks the 'User profile' drop-down menu
    await userProfilePage.userProfileDropDownMenuClick();
    // Clicks the 'User profile' link from drop-down menu
    await userProfilePage.goToProfileMenuLinkClick();
    // Checks browser URL for user name
    await userProfilePage.checkUserUrl('LuxeSoftTesting');
    // Checks the username under the 'avatar'
    await userProfilePage.checkUsernameText('LuxeSoftTesting');
  });
});
