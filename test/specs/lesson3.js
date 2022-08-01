// Lesson 3 test, using strictEqual

 const assert = require('assert');

describe('Lesson 3 test', () => {
   it(`Check the browser tab title`, async () => {
     await browser.url('https://webdriver.io/');
     const title = await browser.getTitle();
     await assert.strictEqual(title, 'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
   });
});
