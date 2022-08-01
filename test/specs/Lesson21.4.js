// 4. Test case 04

// Title: Check the 'Search' field

// Steps:
// 1. Open 'https://github.com/'
// 2. Click the 'Search' field
// 3. Check the 'Search' field focus
// 4. Add text 'webdriverio'
// 5. Press the 'Enter' button
// 6. Check the search result text

// Expected result:
// The search results page is opened and shown the relevant content

describe('Lesson 21.4 test', () => {
  it('Search field test', async () => {
    //Step 1
    await browser.url('https://github.com/');
    await browser.maximizeWindow();
    //Step 2
    const searchFieldLocator = await $(`[name='q'][data-test-selector='nav-search-input']`);
    await searchFieldLocator.click();
    //Step 3
    await searchFieldLocator.isFocused();                                                                                   
    //Step 4
    await searchFieldLocator.setValue('webdriverio');
    //Step 5
    await browser.keys('Enter');
    //Step 6
    const checkResultTextLocator = await $(`//*[contains(text(), 'Next-gen browser and mobile')]`);
    await expect(checkResultTextLocator).toHaveText('Next-gen browser and mobile automation test framework for Node.js');
    
  });
});
