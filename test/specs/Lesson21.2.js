// 2. Test case 02

// Title: Sigh in to GitHub with invalid data

// Steps:
// 1. Open 'https://github.com/'
// 2. Click to the 'Sign in' link from website header
// 3. Fill the 'Username or email address' field with invalid data
// 4. Fill the 'Password' field
// 5. Click the 'Sign in' button
// 6. Check the validation error message

// Expected result:
// The validation error message 'Incorrect username or password.' is displayed

describe('Lesson 21.2 test', () => {
  it('Sign in test', async () => {
    //Step 1
    await browser.url('https://github.com/');
    await browser.maximizeWindow();
    //Step 2
    const headerSignInButtonLocator = await $(`//*[contains(@href, '/login')]`);
    await headerSignInButtonLocator.click();
    //Step 3
    const logInFieldLocator = await $(`#login_field`);
    await logInFieldLocator.setValue('user21test99@test.it');
    //Step 4
    const passwordFieldLocator = await $(`#password`);
    await passwordFieldLocator.setValue('12345678');
    //Step 5
    const signInButtonLocator = await $(`[value='Sign in']`);
    await signInButtonLocator.click();
    //Step 6
    const validationErrorMessage = await $(`//div[contains(@class, 'px-2')]`);
    await expect(validationErrorMessage).toHaveText('Incorrect username or password.');
  });
});
