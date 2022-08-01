// Lesson 4 test

describe('Lesson 4 test', () => {
  it(`Check the 'Search' field to put the data and add the data`, async () => {
    await browser.url('https://webdriver.io/');
    await browser.maximizeWindow();
    const searchButton = await $(`[class='DocSearch-Button-Placeholder']`);
    await searchButton.click();
    const searchInputField = await $('#docsearch-input');
    await searchInputField.addValue('test2');               //Put the 'test2' value
    await searchInputField.addValue('test0998');            //Add the 'test0998' value to previous
  });
});
