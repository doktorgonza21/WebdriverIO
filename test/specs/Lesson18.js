// Lesson 18 test

describe('Lesson 18 test', () => {
    it.only('Test1', async () => {
       await browser.url('https://webdriver.io/');
       await browser.pause(1000);
       await browser.maximizeWindow();
       await browser.pause(1000);
    });

    it.skip('Test2', async () => {
         await browser.url('https://google.com.ua/');
         await browser.pause(1000);
         await browser.maximizeWindow();
         await browser.pause(1000);
     });
});