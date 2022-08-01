// Lesson 8 test

describe('Lesson 8 test', () => {
   it(`Check the 'search' button coordinates`, async () => {
     await browser.url('https:webdriver.io/'); 
     await browser.maximizeWindow();
     const searchButton = await $(`[class='DocSearch-Button-Placeholder']`);
     let elementLocation = await searchButton.getLocation();
     await console.log('The search element coordinates is: ', elementLocation);      //Outputs 'x' and 'y' element coordinates
     let xElementLocation = await searchButton.getLocation('x');
     await console.log('The search element X position is: ' + xElementLocation);     //Output only 'x' element coordinates
   });

    it(`Check the 'Blog' link text`, async () => {
      await browser.url('https:webdriver.io/');
      await browser.maximizeWindow();
      const blogHeaderLink = await $(`[href='/blog'][class='navbar__item navbar__link']`);
      await console.log('Text for element: ' + (await blogHeaderLink.getText()));    //Outputs 'Blog'       
    });
});
  

