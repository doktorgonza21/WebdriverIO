// Lesson 10 test

describe('Lesson 10 test', () => {
   it(`Check the home page elements for clickable and visible`, async () => {
     await browser.url('https://webdriver.io/');
     await browser.maximizeWindow();

     const headerBlogLink = await $(`[href='/blog'][class='navbar__item navbar__link']`);

     //Checks the 'Blog' link for clickable    
     let clickableBlogLink = await headerBlogLink.isClickable();
     console.log('IS Clickable?: ' + clickableBlogLink);                                 //Outputs 'true'

      //Checks the 'Blog' link for displayed    
     let displayedBlogLink = await headerBlogLink.isDisplayed();
     console.log('IS Displayed?: ' + displayedBlogLink);                                 //Outputs 'true'

     //Checks the 'Blog' link for displayed in viewport    
     let displayedBlogLinkInViewport = await $(`[href='/blog'][class='navbar__item navbar__link']`).isDisplayedInViewport();
     console.log('IS blog displayed in viewport?: ' + displayedBlogLinkInViewport);      //Outputs 'true'

     //Checks the footer 'GitHub' link fro displayed in viewport   
     let footerGithubLinkInViewport = await $(`[href="https://github.com/webdriverio/webdriverio"][class="footer__link-item"]`).isDisplayedInViewport();
     console.log('IS github displayed in viewport?: ' + footerGithubLinkInViewport);     //Outputs 'false'
   });
});
