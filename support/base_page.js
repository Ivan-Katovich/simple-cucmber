const Page = require('./page');
class BasePage extends Page{
    constructor() {
        super();
        this.url = 'http://localhost:4200/base';
        this.data = {
            logo: by.id('logo'),
            steps: by.css('.steps-container'),
            'go button': by.id('goFoodsBtn'),
            table: {
                cells: by.css('.table_cell')
            },
            list: {
                row: by.css('.list_row')
            },
        }
    }
}
module.exports = BasePage;