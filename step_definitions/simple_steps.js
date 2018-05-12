let cucumber = require('cucumber');
let expect = require('chai').expect;
const elements = {
    logo: element(by.id('logo')),
    steps: element(by.css('.steps-container')),
    'go button': element(by.id('goFoodsBtn'))
};
cucumber.defineSupportCode(function({ Then }) {
    Then(/^Element '(.+)' should be visible$/, async function(elementName) {
        let state = await elements[elementName].isDisplayed();
        expect(state).to.equal(true);
    });
});