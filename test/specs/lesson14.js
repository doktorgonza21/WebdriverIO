// Lesson 14 test - Module 2 home task

describe('Lesson 14 test', () => {
  it(`Check the 'OnWiki' link availability`, async () => {
    //Step 1 Opens the 'https://webdriver.io/docs/api' URL
    await browser.url('https://webdriver.io/docs/api');
    await browser.maximizeWindow();
    //Step 2 Opens new browser tab using element 'href' attribute
    const jsonWireProtocolLinkLocator = await $(`//*[text()='JSONWire protocol']`);
    let jsonWireProtocolLink = await jsonWireProtocolLinkLocator.getAttribute('href');      //Return link from href
    await browser.newWindow(jsonWireProtocolLink);
    //Step 3 Checks the element is displayed
    const onWikiLinkLocator = await $(`p a[href='https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol']`);
    let onWikiLinkIsDisplayed = await onWikiLinkLocator.isDisplayed();
    console.log(`The 'on the wiki' link is displayed?: ` + onWikiLinkIsDisplayed);          //Outputs 'true'
    await browser.pause(5000)
  });  

  it(`Check the 'API' page elements`, async () => {
    //Step 4 Switches back to opened tab
    await browser.switchWindow('https://webdriver.io/docs/api');
    //Step 5 Waits for check the title text
    const titleTextLocator = await $(`header h1`);
    await browser.waitUntil(
      async () => {
        return (await titleTextLocator.getText()) === 'Introduction';
      },
      { timeout: 5000, timeoutMsg: 'Header Introduction is not displayed!' }
    );
    //Step 6 Takes element screenshot
    await titleTextLocator.saveScreenshot('lesson14screen.png');
    //Step 7 Prints availability of element to console
    const footerTwitterLinkLocator = await $(`li a[href='https://twitter.com/webdriverio']`);
    console.log(`The twitter link is displayed?: ` + (await footerTwitterLinkLocator.isDisplayed()));                             //Outputs 'true'
    //Step 8 Prints the visibility of element to console
    console.log('The twitter link is displayed in viewport?: ' + (await footerTwitterLinkLocator.isDisplayedInViewport()));       //Outputs 'false'
    //Step 9 Scrolls to element
    await footerTwitterLinkLocator.scrollIntoView();
    //Step 10 Prints availability of element to console 
    console.log(`The twitter link is displayed?: ` + (await footerTwitterLinkLocator.isDisplayed()));                             //Outputs 'true'
    //Step 11 Prints the visibility of element to console
    console.log('The twitter link is displayed in viewport?: ' + (await footerTwitterLinkLocator.isDisplayedInViewport()));       //Outputs 'true'
    //Step 12 Checks the header 'Blog' link focus before clicking
    const headerBlogLinkLocator = await $(`[href='/blog'][class='navbar__item navbar__link']`);
    console.log('Blog link is focused before click?: ' + (await headerBlogLinkLocator.isFocused()));                              //Outputs 'false'
    //Step 13 Clicks the header 'Blog' link
    await headerBlogLinkLocator.click();
    //Step 14 Checks the header 'Blog' link focus after clicking
    const headerBlogLinkLocator2 = await $(`[class="navbar__item navbar__link navbar__link--active"]`)
    console.log('Blog link is focused after click?: ' + (await headerBlogLinkLocator2.isFocused()));                              //Outputs 'false'
  });
});
