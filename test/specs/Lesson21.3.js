// 3. Test case 03

// Title: Verify the 'Pricing' link from website footer

// Steps:
// 1. Open 'https://github.com/'
// 2. Scroll down to website footer
// 3. Click the 'Pricing' link
// 4. Check the URL

// Expected result:
// The 'https://github.com/pricing' page is opened

describe('Lesson 21.3 test', () => {
  it('Pricing footer link test', async () => {
    //Step 1
    await browser.url('https://github.com/');
    await browser.maximizeWindow();
    //Step 2
    const footerPricingLink = await $(`[href='/pricing'][class='Link--secondary']`);
    await footerPricingLink.scrollIntoView();
    //Step 3
    await footerPricingLink.click();
    //Step 4
    await expect(browser).toHaveUrl('https://github.com/pricing');
  });
});
