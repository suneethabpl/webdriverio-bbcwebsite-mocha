import bitesizePageObject from "../pageObjects/bitesizePageObject"
import threebbcPage from '../pageobjects/threebbcPageObjects';
const bitesize = new bitesizePageObject();
const threePage = new threebbcPage();
describe('Dropdown Element', () => {
    beforeEach(function () {
        browser.url("/");
    })
    it('get the language dropdown elemets in Bitesize page', () => {
        bitesizePageObject.listOfMainNavMenu();
        threePage.MoreLink.click();
        threePage.hiddenlist;
        threePage.moveToElement(threePage.MoreLink);
        threePage.moveToElement(threePage.childLinkDiv);
        threePage.moveToElement(bitesizePageObject.BitesizePageOpen());
        expect((bitesizePageObject.BitesizePageOpen()).getTagName()).to.equal('a');
        threePage.clickElement(bitesizePageObject.BitesizePageOpen());
        bitesizePageObject.childLanguageDropdown();
        bitesizePageObject.changeLanguageDropdown();
        browser.pause(3000);
        bitesizePageObject.englishDivDropdown();
        browser.pause(3000);
        bitesizePageObject.selectEngLanguageDropdown();
    })
})