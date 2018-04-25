
class Row {
    constructor(container) {
        this.container = container;
        this.data = {
            title: element(by.id('logo')),
            'user name': element(by.id('username')),
            password: element(by.id('password')),
            'login button': element(by.id('login'))
        }
    }
    async login(name,pass){
        await element(this.data['user name']).sendKeys(name);
        await element(this.data.password).sendKeys(pass);
        await element(this.data['login button']).click();
    }
}
module.exports = LoginPage;