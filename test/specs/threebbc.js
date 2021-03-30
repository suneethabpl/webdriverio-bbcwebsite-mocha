import threebbcPage from '../pageobjects/threebbcPageObjects';
// const threebbcPage = require("../pageobjects/threebbcPageObjects");
const threePage = new threebbcPage();

import { expect,assert } from 'chai';
import 'chai/register-should';
// const expect = require('chai').expect;
describe('check elements in  threePage', () => {
    beforeEach(function () {
        browser.url('/');
        // newsPageObject.loadNewsPage();
        // cy.visit(cypress("url"));
        //we launch the site in beforeEach()hook because it needs to reat on every single method.
        //it's provided by mocha framework. it open before every test/it block. 
    })

    it('go to threePage', () => {
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}`);
        //    const title = threePage.title;
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
        // threePage.MoreLink.moveTo();
        // threePage.childLinkDiv.moveTo();
        // threePage.ThreePage.moveTo();
        expect((threePage.ThreePage).getTagName()).to.equal('a');
        threePage.clickElement(threePage.ThreePage);
        // threePage.ThreePage.click();
        // threePage.menuButton.should('have.css', 'top', '14px')
        // threePage.moveToElement(threePage.menuButton);
        // threePage.menuButton.moveTo();
        threePage.clickElement(threePage.menuButton);
        //   threePage.menuButton.click();
        // expect(threePage.menuButton).toBeClickable();
        expect(browser.getUrl()).includes('/bbcthree');
        expect(browser.getUrl()).to.include('/bbcthree');
        threePage.documentaries;
        // expect(threePage.documentaries).toBeClickable();
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

