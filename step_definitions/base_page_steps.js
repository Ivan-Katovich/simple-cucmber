// import { defineSupportCode } from 'cucumber';
// import { browser } from 'protractor';
let cucumber = require('cucumber');
let BasePage = require('../support/base_page');
let basePage = new BasePage();
let expect = require('chai').expect;
cucumber.defineSupportCode(function({ Then }) {
    Then(/^Element '(.+)' should be displayed$/, async function(elementName) {
        let state = await basePage.isElementVisible(elementName);
        expect(state).to.equal(true);
    });
});