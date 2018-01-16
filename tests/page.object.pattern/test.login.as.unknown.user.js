
const { expect } = require('chai');
const { test } = require('../../browser');
const loginPage  = require('./pages/Login');

describe('When trying to login as an unknown user', () => {

    var LoginPage;

    it('it shows the title Login', test(async (browser, opts) => {

        LoginPage = new loginPage(browser, opts);

        await LoginPage.visit();
        await LoginPage.awaitH1();

        const innerText = await LoginPage.getH1();
        expect(innerText).to.be.equal('Login');
    }));

    it('it shows the email validation message', test(async (browser, opts) => {

        await LoginPage.submitTheForm();

        await LoginPage.awaitH1();
        
        const visible = await LoginPage.getEmailValidationMessageIsShown();
        expect(visible).to.be.equal(true);
    }));

    it('it shows the password validation message', test(async (browser, opts) => {

        const visible = await LoginPage.getPasswordValidationMessageIsShown();
        expect(visible).to.be.equal(true);

    }));

    it('it removes the email validation message for a valid email', test(async (browser, opts) => {

        await LoginPage.fillInEmailAddress("unknown@test.com");
        await LoginPage.submitTheForm();
        await LoginPage.awaitH1();
        
        const visible = await LoginPage.getEmailValidationMessageIsShown();
        expect(visible).to.be.equal(false);

    }));

     it('it shows the unknown user validation message', test(async (browser, opts) => {

         await LoginPage.fillInPassword("123");
         await LoginPage.submitTheForm();
         await LoginPage.awaitH1();
        
         //await LoginPage.takeScreenshot();
         const visible = await LoginPage.getUnknownUserValidationMessageIsShown();
         expect(visible).to.be.equal(true);

     }));
    
    
});