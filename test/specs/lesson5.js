// Lesson 5 test

describe('Lesson 5 test', () => {
   it(`Check the 'Search' field to refresh field and put the data`, async () => {
     await browser.url('https:webdriver.io/');
     await browser.maximizeWindow();
     const searchButton = await $(`[class='DocSearch-Button-Placeholder']`);
     await searchButton.click();
     const searchInputField = await $('#docsearch-input');
     await searchInputField.setValue('test26786');              //Clear field and put the 'test26786' value
   });

   it(`Check the 'Sync API Deprecation' link`, async () => {
     await browser.url('https:webdriver.io/');
     await browser.maximizeWindow();
     const blogHeaderLink = await $(`[href='/blog'][class='navbar__item navbar__link']`);
     await blogHeaderLink.click();
     const deprecationSidebarLink = await $(`[href='/blog/2021/07/28/sync-api-deprecation'][class='sidebarItemLink_miNk']`);
     await deprecationSidebarLink.click();
   });
 });
