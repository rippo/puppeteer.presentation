const { expect } = require('chai');
const { test } = require('../browser');

describe('When fetching the weather data', () => {

    it('it shows the next five days', test(async (browser, opts) => {

        const page = await browser.newPage();
        await page.goto(`${opts.appUrl}/fetchdata`);

        //My rule of thumb for any UI testing framework is:-
        //Every time you ask for a new resource, button click, 
        //  page goto form post then ALWAYS do a waitForXXX.
        //Even if documentation says you shouldn't need to!
        //Sorts out 99% of you issues 
        await page.waitForSelector('table#result');

        //Count now of TRS in table, crude but works!
        const trLength = await page.evaluate(() => {
            return document.getElementById('result')
                .getElementsByTagName("tbody")[0]
                .getElementsByTagName("tr").length;
        });

        expect(trLength).to.be.equal(5);

    }));
});