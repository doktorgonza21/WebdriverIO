// Lesson 11 test

describe('Lesson 11 test', () => {
   it(`Check the home page elements for availability and focus`, async () => {
     await browser.url('https://webdriver.io/');
     await browser.maximizeWindow();

     //Checks the header 'Blog' link for availability
     const headerBlogLink = await $(`[href='/blog'][class='navbar__item navbar__link']`);
     let headerBlogLinkIsEnabled = await headerBlogLink.isEnabled();
     console.log('Blog link is Enabled?: ' + headerBlogLinkIsEnabled);                        //Outputs 'true'

     //Checks the 'Search' button for focus
     const searchButton = await $(`[class='DocSearch DocSearch-Button']`);
     console.log('Search is focused?: ' + (await searchButton.isFocused()));                  //Outputs 'false'
     await searchButton.click();

     //Checks the 'Search' input field for focus
     const searchInputField = await $(`#docsearch-input`);
     console.log('Search is focused after click?: ' + (await searchInputField.isFocused()));  //Outputs 'true'
     await browser.keys('Escape');                                                            //Close the 'Search' input
   });                              

    it(`Check the scroll to footer 'GitHub' link`, async () => {
     const footerGithubLink = await $('[href="https://github.com/webdriverio/webdriverio"][class="footer__link-item"]');
     await footerGithubLink.scrollIntoView();
   });
});
