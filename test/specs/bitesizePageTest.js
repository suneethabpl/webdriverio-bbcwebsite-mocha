import bitesizePageObject from "../pageObjects/bitesizePageObject"
import threebbcPage from '../pageobjects/threebbcPageObjects';
const bitesize = new bitesizePageObject();
const threePage = new threebbcPage();
describe('Dropdown Element', () => {
    beforeEach(function () {
        browser.url("/");
    // CBeebiesPageObject.LoadCBeebiesPage();
    // /weather
    // cy.visit("https://www.bbc.co.uk/");
    //we launch the site in beforeEach()hook because it needs to reat on every single method.
    //it's provided by mocha framework. it open before every test/it block. 
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