'use strict'; 

const options = require('../options');
const puppeteer = require('puppeteer'); 

async function run() {

    const browser = await puppeteer.launch( {
        headless: options.puppeteer.headless
    }); 

    const page = await browser.newPage(); 

    //DEFAULT Viewport size is 800 x 600
    //await page.setViewport({ width:480, height:800});
    //await page.setViewport({ width:1024, height:800});

    await page.goto('http://localhost:5000');

    await page.screenshot( {path:'./grabs/home.png'}); 

    //or take a screen shot of an element
    // ElementHandle represents an in-page DOM element. 
    // ElementHandles can be created with the page.$ method.
    //var element = await page.$('div.col-md-9');
    //await element.screenshot({
    //    path:'./grabs/rhs-content.png',
    //}); 


    await browser.close(); 

}; 

run(); 