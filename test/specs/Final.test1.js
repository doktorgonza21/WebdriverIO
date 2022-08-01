const pricingPage = require('../pageobjects/final_pricing.page.js')
const signInPage = require('../pageobjects/final_signIn.page.js')
const randomGenerator = require('../pageobjects/final_randomGenerator.page.js');
const homePage = require('../pageobjects/final_home.page.js');
const userProfilePage = require('../pageobjects/final_userProfile.page.js')
const joinForFreePage = require('..//pageobjects/final_joinForFree.page.js')
const explorePage = require('../pageobjects/final_explore.page.js')
const topicsPage = require('../pageobjects/final_topics.page.js')
const searchPage = require('../pageobjects/final_search.page.js')
const trialPlanPage = require('../pageobjects/final_trialPlan.page.js')
const enterpriseServerPage = require('../pageobjects/final_enterpriseServer.page.js')
const careersPage = require('../pageobjects/final_careers.page.js')
const signUpPage = require('../pageobjects/final_signUp.page.js')

describe('Lesson 28 final Test-case 01', () => {
  it(`Fill the registration form with valid data from clicking on website header 'Sign Up' link`, async () => {
    // Opens the home page and maximizes the window
    await homePage.open('');
    await browser.maximizeWindow();
    // Clicks the header 'Sign Up' button
    await homePage.headerSignUpClick();
    // Fills the 'Email' form
    await signUpPage.fillEmail();
    await browser.pause(1000)
    // Clicks the 'Continue' button
    await signUpPage.emailContinueButtonClick();
    // Fills the 'Password' form
    await signUpPage.fillPassword();
    await browser.pause(1000)
    // Clicks the 'Eye' icon to see the password
    await signUpPage.eyeClick();
    // Clicks the 'Continue' button
    await signUpPage.passwordContinueButtonClick();
    // Fills the 'Username' field
    await signUpPage.fillUsername();
    await browser.pause(1000)
    // Clicks the 'Continue' button
    await signUpPage.usernameContinueButtonClick();
    // Puts 'n' to 'Product updates' field
    await signUpPage.fillProdUpdates();
    await browser.pause(1000)
    // Clicks the 'Continue' button
    await signUpPage.prodUpdatesContinueButtonClick();
    // Checks the 'Verify your account' message
    await signUpPage.verifyTextValidation();
  });
});
