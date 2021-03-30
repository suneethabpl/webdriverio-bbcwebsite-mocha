import headerObject from '../pageobjects/headerPageObject'
// import headerObject from '@pageObjects/headerObject'
describe('header', () => {
    beforeEach(function () {
       browser.url("/")
    })

    it('header element ', () => {
        headerObject.headerInAllPages();
    })
})