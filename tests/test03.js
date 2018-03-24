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
        //Will sort out 99% of you issues!
        //  Caveat - FALL THROUGH!
        await page.waitForSelector('table#result');

        //Count of TDS in table, crude but works!
        const data = await page.$$eval('table#result tbody tr td', 
            td => td.map(td => {
                return td.innerHTML;
            })
        );

        //5 rows 4 columns = 20
        expect(data.length).to.be.equal(20);

    }));
});