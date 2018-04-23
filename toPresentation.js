
//base_page_steps.js
let defSupCode = require('cucumber').defineSupportCode;
let basePage = new require('../support/base_page')();
let expect = require('chai').expect;
defSupCode(function({ Then }) {
    Then(/^Element '(.+)' should be displayed$/, async function(elementName) {
        let state = await basePage.isElementVisible(elementName);
        expect(state).to.equal(true);
    });});
//base_page.js
class BasePage {
    constructor() {
        this.data = {
            logo: element(by.id('logo')),
            steps: element(by.css('.steps-container')),
            'go button': element(by.id('goFoodsBtn'))}
    }
    isElementVisible(name) {return this.data[name].isDisplayed()}
}
module.exports = BasePage;



//page
class Page {
    constructor() {}
    getUrl() {return browser.getCurrentUrl()}
    goToPage(){return browser.get(this.url)}
    isElementVisible(name) {return this.data[name].isDisplayed()}
}
module.exports = BasePage;
//base_page
const Page = require('./page');
class BasePage extends Page{
    constructor() {
        super();
        this.url = 'http://localhost:4200/base';
        this.data = {
            logo: element(by.id('logo')),
            steps: element(by.css('.steps-container')),
            'go button': element(by.id('goFoodsBtn'))
        }
    }
}
module.exports = BasePage;
//login_page
const Page = require('./page');
class LoginPage extends Page{
    constructor() {
        super();
        this.url = 'http://localhost:4200/login';
        this.data = {
            logo: element(by.id('logo')),
            'user name': element(by.id('username')),
            password: element(by.id('password')),
            'login button': element(by.id('login'))
        }
    }
    async login(name,pass){
        await element(this.data['user name']).sendKeys(name);
        await element(this.data.password).sendKeys(pass);
        await element(this.data['login button']).click();
    }
}
module.exports = LoginPage;