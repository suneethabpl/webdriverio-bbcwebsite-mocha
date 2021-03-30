import footerObject from '../pageobjects/footerPageObject'
// import footerObject from '@pageObjects/footerObject'
describe('footer', () => {
    beforeEach(function () {
        // footerObject.loadHomePage();
       browser.url("/")
    })

    it('footer element ', () => {
        footerObject.footerOfAllPages();
    })
})