const {expect } = require('chai').use(require('chai-string')); 
const {test } = require('../browser'); 

describe('When grabbing some JSON', () =>  {

    var innerText; 

    it('it has a length of 5', test(async (browser, opts) =>  {

        var page = await browser.newPage(); 

        await page.goto(`${opts.appUrl}/api/SampleData/WeatherForecasts`);

        var content = await page.content(); 

        innerText = await page.evaluate(() =>  {
            return JSON.parse(document.querySelector("body").innerText); 
        }); 

        expect(innerText.length).to.equal(5); 
        
    })); 

    it('it has 2018 as the year for index position 0', (done) =>  {
        expect(innerText[0].dateFormatted).endsWith("2018"); 
        done(); 
    }); 


}); 

