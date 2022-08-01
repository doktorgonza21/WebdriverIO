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

describe('Lesson 28 final Test-case 04', () => {
  it(`Test the 'Sign In' form with invalid data`, async () => {
    // Opens the home page and maximizes the window
    await homePage.open('');
    await browser.maximizeWindow();
    // Clicks the 'Sign In' header link
    await homePage.headerSignInLinkClick();
    // Fills the 'Login' field
    await signInPage.fillLogin(randomGenerator.emailGenerator());
    // Fills the 'Password' field
    await signInPage.fillPassword(randomGenerator.passwordGenerator());
    // Clicks the 'Sign In' button
    await signInPage.signInButtonClick();
    // Checks the 'Validation error' message
    await signInPage.checkSignInErrorMessage('Incorrect username or password.');
  });
});
