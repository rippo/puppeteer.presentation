// Type definitions for Login.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare interface LoginPageObject {
		
	/**
	 * 
	 * @param browser 
	 * @param options 
	 */
	new (browser : any, options : any);
		
	/**
	 * 
	 */
	visit(): void;
		
	/**
	 * 
	 */
	awaitH1(): void;
		
	/**
	 * 
	 */
	getH1Content(): void;
		
	/**
	 * 
	 */
	submitTheForm(): void;
		
	/**
	 * 
	 */
	takeScreenshot(): void;
		
	/**
	 * 
	 * @return  
	 */
	isEmailValidationMessageShown(): boolean;
		
	/**
	 * 
	 * @return  
	 */
	isPasswordValidationMessageShown(): boolean;
		
	/**
	 * 
	 * @return  
	 */
	isUnknownUserValidationMessageShown(): boolean;
		
	/**
	 * 
	 * @param email 
	 */
	fillInEmailAddress(email : string): void;
		
	/**
	 * 
	 * @param password 
	 */
	fillInPassword(password : any): void;
		
	/**
	 * 
	 * @param email 
	 * @param password 
	 */
	fullLogin(email : any, password : any): void;
}
