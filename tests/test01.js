const { expect } = require('chai');
const { test } = require('../browser');

describe('When viewing the home page', () => {

    let page;

    it('it shows Hello from Rippo!', test(async (browser, opts) => {

        page = await browser.newPage();
        //notice we are using ES6 Template Strings
        await page.goto(`${opts.appUrl}`);

        await page.waitForSelector('H1');

        //NOTE: The actual HTML page is sandboxed. 
        //  To get access to the page DOM we use
        //  evaluate.
        const innerText = await page.evaluate(() => {
            return document.querySelector("H1").innerText;
        });

        expect(innerText).to.be.equal('Hello from Rippo!');

    }));

    it('it shows Hello from Rippo! (2)', test(async (browser, opts) => {

        //or we can use ElementHandles if we have a 
        //  complicated selector to find!
        var elementInnerText = await page.$('h1');
        var prop = await elementInnerText.getProperty("innerText");
        var value = await(prop).jsonValue();
        
        expect(value).to.be.equal('Hello from Rippo!');

    }));
 
});