class LoginPageObject {

    constructor (browser, options) {

        this.browser = browser; 
        this.options = options; 

        this.emailLocator = 'input[id="Email"]';
        this.passwordLocator = 'input[id="Password"]';
        this.submitButtonLocator = 'form input[type="submit"]';

        this.emailRequiredValidationLocator = '[data-valmsg-for="Email"]';
        this.emailValidationMessage = "Email is required"; 
        this.unknownUserValidationMessage = "User could not be found";

        this.passwordRequiredValidationLocator = '[data-valmsg-for="Password"]';
        this.passwordValidationMessage = "Password is required"; 

        var htmlPage = "/login"; 
        this.pageUrl = options.appUrl + htmlPage; 
            
    };

    async visit() {
        //console.log(this.pageUrl); 
        this.page = await this.browser.newPage(); 
        await this.page.goto(this.pageUrl); 
    }; 

    async awaitH1() {
        await this.page.waitForSelector('H1');
    };

    async getH1Content() {
        return await this.page.evaluate(() => {
            return document.querySelector("H1").innerText;
        });
    };    

    async submitTheForm () {
        await this.page.click(this.submitButtonLocator);
    };    

    async takeScreenshot() {
        await this.page.screenshot( {path:'./images/login.png'});     
    };    

    async getEmailValidationMessageIsShown() {
        var msg = await this.page.evaluate((selector) => {
            return document.querySelector(selector).innerText;
        }, this.emailRequiredValidationLocator);

        return msg === this.emailValidationMessage;
    };    

    async getPasswordValidationMessageIsShown() {
        var msg = await this.page.evaluate((selector) => {
            return document.querySelector(selector).innerText;
        }, this.passwordRequiredValidationLocator);

        return msg === this.passwordValidationMessage;
    }; 

    async getUnknownUserValidationMessageIsShown() {
        var msg = await this.page.evaluate((selector) => {
            return document.querySelector(selector).innerText;
        }, this.emailRequiredValidationLocator);

        return msg === this.unknownUserValidationMessage;
    };     
    
    async fillInEmailAddress(email) {
        await this.page.type(this.emailLocator, email);
    };

    async fillInPassword(password) {
        await this.page.type(this.passwordLocator, password);
    };
    
    async fullLogin(email, password) {
        await this.visit();
        await this.awaitH1();
        await this.fillInEmailAddress(email);
        await this.fillInPassword(password);
        await this.submitTheForm();
    };
};

module.exports = LoginPageObject; 
