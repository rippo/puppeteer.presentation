const {expect } = require('chai'); 
const {test } = require('../browser'); 
const options = require('../options');
const path = require('path'); 
const looksSame = require('looks-same');

describe('When I take a screenshot of the weather page', () =>  {

    //Image we are going to download
    let image1 = path.join(__dirname, '../images/weather.png'); 

    //The image we are going to compare against
    let image2 = path.join(__dirname, '../images/ORG-weather-headless.png'); 

    //save home page as an image
    it('it returns a buffer', test(async (browser, opts) =>  {
        let page = await browser.newPage(); 
        await page.goto(`${opts.appUrl}/fetchdata`);
        
        //await page.addStyleTag({path: 'css/override.css'});

        await page.waitFor('#result'); 
        const screen = await page.screenshot( {path:'./images/weather.png'}); 
        expect(screen).to.not.equal(null);
    }));

    it('it should be same as the original image', (done) => {
        looksSame(image1, image2, (error, equal) => {
            //console.log(equal);
            expect(error).to.equal(null);
            expect(equal).to.equal(true);
            done();
        });

        looksSame.createDiff({
            reference: image1,
            current: image2,
            diff: path.join(__dirname, '../images/diff.png'),
            highlightColor: '#ff00ff', //color to highlight the differences
            strict: false,//strict comparsion
            tolerance: 2.5
        });  
    });    

}); 

