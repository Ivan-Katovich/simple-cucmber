const Page = require('./page');
class LoginPage extends Page{
    constructor() {
        super();
        this.url = 'http://localhost:4200/login';
        this.data = {
            logo: element(by.id('logo')),
            'user name': element(by.id('username')),
            password: element(by.id('password')),
            'login button': element(by.id('login'))
        }
    }
    async login(name,pass){
        await this.data['user name'].sendKeys(name);
        await this.data.password.sendKeys(pass);
        await this.data['login button'].click();
    }
}
module.exports = LoginPage;