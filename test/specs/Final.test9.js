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

describe('Lesson 28 final Test-case 09', () => {
  it(`Check the 'Enterprise cloud' form`, async () => {
    // Opens the home page and maximizes the window
    await homePage.open('');
    await browser.maximizeWindow();
    // Scrolls to 'Build like the best with GitHub Enterprise' element
    await homePage.buildsLikeTheBestElementScroll();
    // Clicks the 'Start a free trial' button
    await homePage.startFreeTrialButtonClick();
    // Clicks the 'Enterprise Cloud' plan element
    await trialPlanPage.enterpriseCloudElementClick();
    // Fills the 'Username' field
    await joinForFreePage.fillUsernameField();
    await browser.pause(1000);
    // Fills the 'Email' field
    await joinForFreePage.fillEmailField();
    await browser.pause(1000);
    // Fills the 'Password' field
    await joinForFreePage.fillPasswordField();
    await browser.pause(1000);
    // Clicks the check-box
    await joinForFreePage.checkBoxClick();
    await browser.pause(1000);
});

it(`Check the 'Enterprise server' form`, async () => {
    // Clicks the browser page back
    await browser.back();
    // Clicks the 'Enterprise Server' plan element
    await trialPlanPage.enterpriseServerElementClick();
    // Fills the 'Name' field
    await enterpriseServerPage.fillNameField();
    await browser.pause(1000);
    // Fills the 'Company' field
    await enterpriseServerPage.fillCompanyField();
    await browser.pause(1000);
    // Fills the 'Work Email' field
    await enterpriseServerPage.fillWorkEmailField();
    await browser.pause(1000);
    // Fills the 'Phone' field
    await enterpriseServerPage.fillPhoneField();
    await browser.pause(1000);
    // Clicks the 'Deploy GitHub on Microsoft Azure' radio button
    await enterpriseServerPage.azureRadioButtonClick();
    await browser.pause(1000);
    // Switch the radio to 'Yes'
    await enterpriseServerPage.questionYesRadioButtonClick();
    await browser.pause(1000);
    // Click the check-box
    await enterpriseServerPage.checkBoxClick();
  });
});
