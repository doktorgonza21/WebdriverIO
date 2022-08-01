// 1. Test case 01

// Title: Sigh up for GitHub with invalid e-mail from home page body

// Steps:
// 1. Open 'https://github.com/'
// 2. Put invalid e-mail address to 'Email address' field on home page body (for example use: !#$%^& symbols, miss the @ symbol, miss the .domain)
// 3. Click the 'Sign up for GitHub' button
// 4. Check the validation error message

// Expected result:
/* 
    The 'https://github.com/signup?user_email=asdasd%40asdaasd&source=form-home-signup'
    page is opened and the validation error message 'Email is invalid or already taken'
    is displayed
*/

describe('Lesson 21.1 test', () => {
  it('Test1', async () => {
    //Step 1
    await browser.url('https://github.com/');
    await browser.maximizeWindow();
    //Step 2
    const inputEmailFieldLocator = await $(`#user_email`);
    await inputEmailFieldLocator.addValue('test2!#$%@gasd');
    //Step 3
    const signUpForGithubButtonLocator = await $(`//button[contains(text(), '  Sign up for GitHub')]`);
    await signUpForGithubButtonLocator.click();
    //Wait for message is displayed
    const validationMessageLocator = await $(`//*[contains(text(), 'Email is invalid or already taken')]`);
    await browser.waitUntil(
      async () => {
        return await validationMessageLocator.isDisplayed();                                    //Outputs 'true' if element is displayed
      },
      {
        timeout: 5000,
        timeoutMsg: 'The validation error message is not displayed!',                           //Outputs error if element isn't displayed
      }
    );
    //Step 4
    await expect(validationMessageLocator).toHaveText('Email is invalid or already taken');     //Outputs 'Email is invalid or already taken'
  });
});
