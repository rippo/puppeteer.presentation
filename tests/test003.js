const { expect } = require('chai');
const { test } = require('../browser');

describe('When fetching the weather data', () => {

    it('it shows the next five days', test(async (browser, opts) => {

        const page = await browser.newPage();
        await page.goto(`${opts.appUrl}/fetchdata`);

        await page.waitForSelector('table#result');

        const trLength = await page.evaluate(() => {
            return document.getElementById('result')
                .getElementsByTagName("tbody")[0]
                .getElementsByTagName("tr").length;
        });

        expect(trLength).to.be.equal(5);

    }));
});