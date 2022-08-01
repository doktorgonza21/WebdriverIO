// Lesson 13 test

describe('Lesson 13 test', () => {
  it(`Check the wait for 'Blog' link is displayed`, async () => {
    await browser.url('https://webdriver.io/');
    await browser.maximizeWindow();
    const headerBlogLink = await $(`[href='/blog'][class='navbar__item navbar__link']`);
    //Waits for element is displayed
    await browser.waitUntil(
      async () => {
        return headerBlogLink.isDisplayed();
      },
      { timeout: 5000, timeoutMsg: 'Blog is not displayed!' }       //Outputs error message if element is not available
    );
  });
    
  it(`Check the element html attributes`, async () => {
    await browser.url('https://webdriver.io/docs/api');
    //Checks all element attributes, including child
    let outerHTML = await $(`[role="region"]`).getHTML();
    console.log('outerHTML is: ' + outerHTML);                      //Outputs `<div role="region"><a href="#" class="skipToContent_ZgBM">Skip to main content</a></div>`
    //Checks only child element attributes
    let innerHTML = await $(`[role="region"]`).getHTML(false);
    console.log('innerHTML is: ' + innerHTML);                      //Outputs `<a href="#" class="skipToContent_ZgBM">Skip to main content</a>`
  });
});
