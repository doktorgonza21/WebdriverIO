// Lesson 9 test - Module 1 home task

describe('Lesson 9 Home task test', () => {
  it(`Check the 'API' page elements attributes`, async () => {
    // Step 1: Goes to 'https:webdriver.io/' URL
    await browser.url('https:webdriver.io/');
    await browser.maximizeWindow();

    // Step 2: Clicks the header 'Api' link
    const headerApiLink = await $(`[href='/docs/api'][class='navbar__item navbar__link']`);
    await headerApiLink.click();

    // Step 3: Prints current URL to console
    console.log('The current URL is:', await browser.getUrl());       //Outputs 'https://webdriver.io/docs/api'

    // Step 4: Prints title text to console 
    const titleText = await $(`//h1`);
    console.log('The h1 text is: ' + (await titleText.getText()));    //Outputs 'Introduction'

    // Step 5: Gets and outputs the 'JSONWire protocol' link href attribute
    const jsonWireLink = await $(`//*[text()='JSONWire protocol']`);
    let jsonWireHrefValue = await jsonWireLink.getAttribute('href');
    console.log('The href attribute is: ' + jsonWireHrefValue);       //Outputs href value
  });

  
  it(`Check the 'Search' field for adding value`, async () => {
    // Step 6: Adds the 'Test is ' value to the 'Search' field, then adds the 'DONE!' value
    const searchButton = await $(`[class='DocSearch DocSearch-Button']`);
    await searchButton.click();
    const searchInputField = await $(`#docsearch-input`);
    await searchInputField.setValue('Test is ');                      //Add the 'Test is ' value
    await searchInputField.addValue('DONE!');                         //Add the 'DONE!' value
    await browser.pause(5000);
  });
});
