class Row {
    constructor(container) {
        this.container = container;
        this.data = {
            'expand arrow': by.css('.expand_arrow'),
            provider: by.css('.provider'),
            address: by.css('.address'),
            phone: by.css('.phone')
        }
    }

    async expand() {
        let cls = await this.container.getAttribute('class');
        if (cls.includes('collapsed')) {
            await this.container.element(this.data['expand arrow']).click();
        }
    }
    async getElementText(name) {
        await this.expand();
        return this.container.element(this.data[name]).getText();
    }
}
module.exports = Row;