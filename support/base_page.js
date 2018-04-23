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