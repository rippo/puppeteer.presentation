'use strict'; 

const puppeteer = require('puppeteer'); 

async function run() {

    //NOTE Generating a pdf is currently only supported in Chrome headless.

    const browser = await puppeteer.launch( {
        headless: true
    }); 

    const page = await browser.newPage(); 
    await page.goto('http://localhost:5000');

    await page.emulateMedia('screen');
    await page.pdf( {path:'./grabs/home.pdf'}); 
    await browser.close(); 
}; 

run(); 