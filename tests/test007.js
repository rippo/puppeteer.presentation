const { expect } = require('chai').use(require('chai-string')); 
const { test } = require('../browser'); 
const MyDate = require('../utils'); 


describe('When testing the weather forecast API endpoint', () =>  {

    var innerText; 
    var utils = new MyDate(new Date());


    it('it returns an array length of 5', test(async (browser, opts) =>  {

        var page = await browser.newPage(); 

        await page.goto(`${opts.appUrl}/api/SampleData/WeatherForecasts`);

        var content = await page.content(); 

        //seems to be way to get a json object back!
        //  most likely other ways to parse the returned content 
        innerText = await page.evaluate(() =>  {
            return JSON.parse(document.querySelector("body").innerText); 
        }); 

        expect(innerText.length).to.equal(5); 
    })); 

    //As we are not using the browser module, we need to tell mocha we are done
    it('it has the correct date for tomorrow at index position 0', (done) =>  {

        //ES6 Template Strings 
        //console.log(`${utils.formatted(1)}`);

        expect(innerText[0].dateFormatted).to
            .equal(`${utils.formatted(1)}`); 
        done();
    }); 

    it('it has the correct date for tomorrow + 1 days at index position 1', (done) =>  {
        expect(innerText[1].dateFormatted).to
            .equal(`${utils.formatted(2)}`); 
        done(); 
    }); 

    it('it has the correct date for tomorrow + 2 days at index position 2', (done) =>  {
        expect(innerText[2].dateFormatted).to
            .equal(`${utils.formatted(3)}`); 
        done(); 
    }); 
    
    //etc...
    
});




