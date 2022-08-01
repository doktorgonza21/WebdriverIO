const docsPage = require("../pageobjects/lesson27.page.js");

describe("Lesson 27 test", () => {
  it(`Check the 'Docs' link`, async () => {
    await browser.url("https://webdriver.io/");
    await browser.maximizeWindow();
    //Clicks the header 'Docs' link
    await docsPage.docsClick();
  });
});
