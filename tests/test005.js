const { expect } = require('chai');
const { test } = require('../browser');

describe('When looking at the metrics', () => {

    it('it renders quickly', test(async (browser, opts) => {

        const page = await browser.newPage();

        //await page.goto('http://localhost:5000');
        //await page.waitForSelector('h1');

        await page.goto(`${opts.appUrl}/fetchdata`);
        await page.waitForSelector('table#result');
        

        //const metrics = await page.metrics();
        //console.log(metrics);
        
        
        //const performanceTiming = await page.evaluate(() => 
        //    JSON.stringify(window.performance));
        //console.log(performanceTiming);        

        const timeElasped = await page.evaluate(() => window.performance.now());
        //console.log(timeElasped);
        expect(timeElasped).to.be.at.most(1500);

    }))
})