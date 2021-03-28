import threebbcPage from '../pageobjects/threebbcPageObjects';
const threePage = new threebbcPage();

import { expect,assert } from 'chai';
import 'chai/register-should';
describe('check elements in  threePage', () => {
    beforeEach(function () {
        browser.url('/');
    })

    it('go to threePage', () => {
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
        expect(browser.getTitle()).to.equal('BBC - Home');
        threePage.parent();
        threePage.childElements;
        threePage.getTextForLi;
        threePage.specifyChildElement(10);
        threePage.getspecificChildElementText(11);
        threePage.headingofpage;
        threePage.MoreLink.click();
        threePage.hiddenlist;
        threePage.moveToElement(threePage.MoreLink);
        threePage.moveToElement(threePage.childLinkDiv);
        threePage.moveToElement(threePage.ThreePage);
        expect((threePage.ThreePage).getTagName()).to.equal('a');
        threePage.clickElement(threePage.ThreePage);
        threePage.clickElement(threePage.menuButton);
        expect(browser.getUrl()).includes('/bbcthree');
        expect(browser.getUrl()).to.include('/bbcthree');
        threePage.documentaries;
        expect(browser.getUrl()).includes('/bbcthree/category/docs')
        threePage.title;
        expect(browser.getTitle()).to.equal('BBC Three | Docs, Comedies, Videos & Articles');
        browser.back();
        browser.pause(3000);
    });
    it('get all trhe headings in threePage', () => {
        threePage.threePageHeadings;
    });
    it('get particular headings by condition in threePage', () => {
        threePage.prticularHeadings;
    });
    it('get particular headings by index in threePage', () => {
        threePage.prticularHeadingsbyIndex;
    });
    it('get particular headings by map method  in threePage', () => {
        threePage.listofheadingtextselector;
        threePage.bbcthreePageListTextbyMap;
    });
});

