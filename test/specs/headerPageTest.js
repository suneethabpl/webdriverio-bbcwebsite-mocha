import headerObject from '../pageobjects/headerPageObject'
describe('header', () => {
    beforeEach(function () {
       browser.url("/")
    })

    it('header element ', () => {
        headerObject.headerInAllPages();
    })
})