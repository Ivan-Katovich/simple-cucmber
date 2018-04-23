const BasePage = require('./base_page');
const LoginPage = require('./login_page');
let pageFactory = {
    currentPage: null,
    pages: {
        'base page': BasePage,
        'login page': LoginPage
    },
    getPage(pageName) {
        this.currentPage = new this.pages[pageName]();
        return this.currentPage;
    }
};