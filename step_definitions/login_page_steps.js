let cucumber = require('cucumber');
let pageFactory = require('../support/page_factory');
let expect = require('chai').expect;
cucumber.defineSupportCode(function({ Then, When }) {
    When(/^I login to the application$/, async function() {
        await pageFactory.getPage('login page').login();
        let actualUrl = await pageFactory.getPage('base page').getUrl();
        let expectedUrl = pageFactory.currentPage.url;
        expect(actualUrl).to.include(expectedUrl);
    });
});