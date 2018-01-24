const { expect } = require('chai');
const { test } = require('../../browser');

describe('When looking at the performance', () => {

    it('it renders the weather forecast within 1500ms', test(async (browser, opts) => {

        const page = await browser.newPage();

        await page.goto(`${opts.appUrl}/fetchdata`);
        await page.waitForSelector('table#result');

        const performanceTiming = await page.evaluate(() => 
            JSON.stringify(window.performance));
        console.log(performanceTiming);           

        //lets get how long the page took to server
        const timeElasped = await page.evaluate(
            () => window.performance.now()
        );
        expect(timeElasped).to.be.at.most(1500);


    }));
});


