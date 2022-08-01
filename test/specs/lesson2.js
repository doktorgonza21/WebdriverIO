// Lesson 2 test without strictEqual

describe('My first test', () => {
   it(`Check the browser tab title`, async () => {
     await browser.url('https://webdriver.io/');
     await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
   });
});
