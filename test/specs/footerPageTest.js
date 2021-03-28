import footerObject from '../pageobjects/footerPageObject'
describe('footer', () => {
    beforeEach(function () {
       browser.url("/")
    })

    it('footer element ', () => {
        footerObject.footerOfAllPages();
    })
})