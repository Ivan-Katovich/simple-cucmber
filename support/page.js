
class Page {
    constructor() {}
    getUrl() {return browser.getCurrentUrl()}
    goToPage(){return browser.get(this.url)}
    isElementVisible(name) {
        return element(this.data[name]).isDisplayed();
    }
}
module.exports = BasePage;