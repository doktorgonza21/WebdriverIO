// Lesson 12 test

describe('Lesson 12 test', () => {
  it(`Get the 'GitHub' footer link screenshot`, async () => {
    await browser.url('https://webdriver.io/');
    await browser.maximizeWindow();
    const footerGithubLink = await $(`[href="https://github.com/webdriverio/webdriverio"][class="footer__link-item"]`);
    //Scrolls to 'GitHub' footer link
    await footerGithubLink.scrollIntoView();
    //Gets the screenshot
    await footerGithubLink.saveScreenshot('githubFooterLinkScreenshot.png');
  });

    it(`Check the browser tab switch`, async () => {
    //Opens the new 'Google.com.ua' window    
    await browser.newWindow('https://www.google.com.ua/');
    //Switches to 'webdriver.io' window
    await browser.switchWindow('https://webdriver.io/');
    //Switches back to 'Google.com.ua'
    await browser.switchWindow('Google');
  });
});
