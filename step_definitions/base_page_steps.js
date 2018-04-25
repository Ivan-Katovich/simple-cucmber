
let cucumber = require('cucumber');
let BasePage = require('../support/base_page');
let basePage = new BasePage();
let expect = require('chai').expect;
cucumber.defineSupportCode(function({ Then }) {
    Then(/^Element '(.+)' should be displayed$/, async function(elementName) {
        let state = await basePage.isElementVisible(elementName);
        expect(state).to.equal(true);
    });
    Then(/^'(.+)'(?:st|th|nd|rd|) item in '(table|list)' should contain '(.+)' (?:cell|row) with text '(.+)'$/, async function(itemNameOrNumber, elemType, itemPoint, expectedText) {
        itemNameOrNumber = parseInt(itemNameOrNumber) ? itemNameOrNumber -1 : itemNameOrNumber;
        let actualText = await basePage.getItem(elemType, itemNameOrNumber).getElementText(itemPoint);
        expect(actualText).to.equal(expectedText);
    });
});