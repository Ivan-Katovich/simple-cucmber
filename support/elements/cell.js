
class Cell {
    constructor(container) {
        this.container = container;
        this.data = {
            'item name': element(by.css('.cell_item')),
            price: element(by.css('.item_price')),
            logo: element(by.css('.provider_logo'))
        }
    }
    getElementText(name) {
        return this.container.element(this.data[name]).getText();
    }
}
module.exports = Cell;