// Lesson 7 test

describe('Lesson 7 test', () => {
  it(`Check the 'Search' field to show the valid data`, async () => {
    await browser.url('https:webdriver.io/');
    await browser.maximizeWindow();
    const searchButton = await $(`[class='DocSearch-Button-Placeholder']`);     
    await searchButton.click();
    const searchInputField = await $(`#docsearch-input`);
    let searchFieldAttribute = await searchInputField.getAttribute('placeholder');  
    await console.log('Placeholder is: ' + searchFieldAttribute);                   //Outputs 'Search docs'
    await searchInputField.setValue('test2test0998');
    searchFieldAttribute = await searchInputField.getAttribute('value');            
    await console.log('Value is: ' + searchFieldAttribute);                         //Outputs 'test2test0998'
  });
});
