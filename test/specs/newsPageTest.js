import newsPageObject from "../pageObjects/newsPageObject"
const newsPage = new newsPageObject();
// import { expect, assert} from 'chai';
// const assert = require('assert');
describe('Dropdown Element', () => {
    beforeEach(function () {
        browser.url('/');
        // newsPageObject.loadNewsPage();
        // cy.visit(cypress("url"));
        //we launch the site in beforeEach()hook because it needs to reat on every single method.
        //it's provided by mocha framework. it open before every test/it block. 
    })

    it('go to Taster page check header by using promises.', () => {

        expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
        //    const title = threePage.title;
        expect(browser.getUrl()).to.equal('https://www.bbc.co.uk/');
        newsPageObject.MainNavMenu();
        newsPageObject.newsPage().click();
        expect(browser.getUrl()).to.equal('https://www.bbc.co.uk/news');
        // expect(browser).toHaveUrl('https://www.bbc.co.uk/news');//webdriverIo expect
        browser.pause(3000);
        browser.back();
        browser.forward();
        //     // cy.wait(3000);
        assert.equal(browser.getTitle(), 'Home - BBC News');//chaijs
        newsPage.localSearchHeading;
        newsPage.localSearch.scrollIntoView();
        newsPage.localSearch.isDisplayedInViewport();
        newsPage.enterLocalPostcode("rm6");
        assert.equal('rm6', newsPage.localSearch.getValue());
        browser.pause(3000)
        newsPage.clickonSearch;

        newsPage.changeLocationlink;
        // $('.ls-c-search__submit').click();
        // newsPage.pressEnterFromKeyboard('{Enter}');
        // assert.equal('{Enter}', newsPage.localSearch.getValue());

        newsPage.enterLocalPostcode("rm");

        assert.equal('rm', newsPage.localSearch.getValue());
        newsPage.changeAnotherLocation;
        browser.pause(3000)
        // expect(newsPage.localSearch).toHaveValue('rm');//webdriverio expect
        newsPage.goToAnotherLocation;
        browser.pause(3000)


    })

})
    // it('reload teh page', () => {
    //   browser.reload();
    // })
// })