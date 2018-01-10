const {expect } = require('chai').use(require('chai-string')); 
const {test } = require('../browser'); 


describe('When testing the weather forecast API endpoint', () =>  {

    var innerText; 
    var today = new Date();

    it('it returns an array length of 5', test(async (browser, opts) =>  {

        var page = await browser.newPage(); 

        await page.goto(`${opts.appUrl}/api/SampleData/WeatherForecasts`);

        var content = await page.content(); 

        innerText = await page.evaluate(() =>  {
            return JSON.parse(document.querySelector("body").innerText); 
        }); 

        expect(innerText.length).to.equal(5); 
        
    })); 

    it('it has the correct date for tomorrow at index position 0', (done) =>  {
        expect(innerText[0].dateFormatted).to
            .equal(`${today.formatted(1)}`); 
        done();
    }); 

    it('it has the correct date for tomorrow + 1 days at index position 1', (done) =>  {
        expect(innerText[1].dateFormatted).to
            .equal(`${today.formatted(2)}`); 
        done(); 
    }); 

    it('it has the correct date for tomorrow + 2 days at index position 2', (done) =>  {
        expect(innerText[2].dateFormatted).to
            .equal(`${today.formatted(3)}`); 
        done(); 
    }); 
    
    //etc...


    Date.prototype.formatted = function(daysToAdd) {
        var nextDay = today.addDays(daysToAdd);
        return `${nextDay.dd()}/${nextDay.mm()}/${nextDay.yyyy()}`;
    };
    
    Date.prototype.addDays = function(days) {
        var dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + days);
        return dat;
    };   
    
    Date.prototype.dd = function() {
        var dat = new Date(this.valueOf());
        return dat.getDate();
    };
    
    Date.prototype.mm = function() {
        var dat = new Date(this.valueOf());
        var mm = dat.getMonth()+1; //January is 0!
        if (mm < 10) mm = "0" + mm;
        return mm;
    };    
    
    Date.prototype.yyyy = function() {
        var dat = new Date(this.valueOf());
        return dat.getFullYear();    
    }    
   
    
});




