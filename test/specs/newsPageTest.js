import newsPageObject from "../pageObjects/newsPageObject"
const newsPage = new newsPageObject();
// import { expect, assert} from 'chai';
// const assert = require('assert');
describe('Dropdown Element', () => {
    beforeEach(function () {
        browser.url('/');
    })

    it('go to Taster page check header by using promises.', () => {
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
        expect(browser.getUrl()).to.equal('https://www.bbc.co.uk/');
        newsPageObject.MainNavMenu();
        newsPageObject.newsPage().click();
        expect(browser.getUrl()).to.equal('https://www.bbc.co.uk/news');
        browser.pause(3000);
        browser.back();
        browser.forward();
        assert.equal(browser.getTitle(), 'Home - BBC News');//chaijs
        newsPage.localSearchHeading;
        newsPage.localSearch.scrollIntoView();
        newsPage.localSearch.isDisplayedInViewport();
        newsPage.enterLocalPostcode("rm6");
        assert.equal('rm6', newsPage.localSearch.getValue());
        browser.pause(3000)
        newsPage.clickonSearch;
        newsPage.changeLocationlink;
        newsPage.enterLocalPostcode("rm");
        assert.equal('rm', newsPage.localSearch.getValue());
        newsPage.changeAnotherLocation;
        browser.pause(3000)
        newsPage.goToAnotherLocation;
        browser.pause(3000)
    })

})
