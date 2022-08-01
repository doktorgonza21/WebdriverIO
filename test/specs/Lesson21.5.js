// 5. Test case 05

// Title: Check the 'Security' link from header 'Product' drop-down menu

// Steps:
// 1. Open 'https://github.com/'
// 2. Hover the 'Product' drop-down menu
// 3. Click the 'Security' link
// 4. Check the URL

// Expected result:
// The 'https://github.com/features/security' page is opened and shown the relevant content

describe('Lesson 21.5 test', () => {
  it('Security drop-down menu link test', async () => {
    //Step 1
    await browser.url('https://github.com/');
    await browser.maximizeWindow();
    //Step 2
    const productDropDownMenuLocator = await $(`//summary[contains(text(), 'Product')]`);
    await productDropDownMenuLocator.moveTo();
    //Step 3
    const securityLinkLocator = await $(`//*[contains(@href, '/features/security')][contains(@class, 'lh')]`);
    await securityLinkLocator.click();
    //Step 4
    await expect(browser).toHaveUrl('https://github.com/features/security');
    
  });
});
