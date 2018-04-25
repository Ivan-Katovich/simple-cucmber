const Page = require('./page');
const Cell = require('./elements/cell');
const Row = require('./elements/row');
class BasePage extends Page{
    constructor() {
        super();
        this.url = 'http://localhost:4200/base';
        this.data = {
            logo: by.id('logo'),
            steps: by.css('.steps-container'),
            'go button': by.id('goFoodsBtn'),
            table: {
                name: by.css('.cell_item'),
                cells: by.css('.table_cell')
            },
            list: {
                name: by.css('.provider'),
                row: by.css('.list_row')
            },
        }
    }
    getItem(elemType, nameOrNumber) {
        let itemType = elemType === 'table' ? 'cell' : 'row';
        let item;
        if (parseInt(nameOrNumber)) {
            item = element.all(this.data[elemType][itemType]).get(nameOrNumber);
        } else {
            item = element.all(this.data[elemType][itemType]).filter((el) => {
                return el.element(this.data[elemType].name).getText()
                    .then((text) => text === nameOrNumber);
            }).first();
        }

        return elemType === 'table' ? new Cell(item) : new Row(item);
    }
}
module.exports = BasePage;