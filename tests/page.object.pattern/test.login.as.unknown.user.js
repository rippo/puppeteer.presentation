const { expect } = require('chai');
const { test } = require('../../browser');
//This is the page object file
const loginPage  = require('./pages/Login');

describe('When trying to login as an unknown user', () => {

    let LoginPage;

    it('it shows the title Login', test(async (browser, opts) => {

        //set up the login page object
        LoginPage = new loginPage(browser, opts);

        await LoginPage.visit();
        await LoginPage.awaitH1();

        const innerText = await LoginPage.getH1Content();
        expect(innerText).to.be.equal(LoginPage.pageH1Text);
    }));

    it('it shows the email validation message', test(async (browser, opts) => {

        //in effect submit a blank form
        await LoginPage.submitTheForm();

        await LoginPage.awaitH1();
        
        const visible = await LoginPage.isEmailValidationMessageShown();
        expect(visible).to.be.equal(true);
    }));

    it('it shows the password validation message', test(async (browser, opts) => {

        const visible = await LoginPage.isPasswordValidationMessageShown();
        expect(visible).to.be.equal(true);

    }));

    it('it removes the email validation message for a valid email', test(async (browser, opts) => {

        await LoginPage.fillInEmailAddress("unknown@test.com");
        await LoginPage.submitTheForm();
        await LoginPage.awaitH1();
        
        const visible = await LoginPage.isEmailValidationMessageShown();
        expect(visible).to.be.equal(false);

    }));

     it('it shows the unknown user validation message', test(async (browser, opts) => {

         await LoginPage.fillInPassword("123");
         await LoginPage.submitTheForm();
         await LoginPage.awaitH1();
        
         //await LoginPage.takeScreenshot();
         const visible = await LoginPage.isUnknownUserValidationMessageShown();
         expect(visible).to.be.equal(true);

     }));
    
    
});