import CBeebiesPageObject from "../pageobjects/CBeebiesPageObject"
import threebbcPage from '../pageobjects/threebbcPageObjects';
import bitesizePageObject from "../pageObjects/bitesizePageObject"
const CBeebiesPage = new bitesizePageObject();
const threePage = new threebbcPage();
describe('Dropdown Element', () => {
    beforeEach(function () {
        browser.url("/");
    })
    it('go to CBeebiesPage', () => {
        bitesizePageObject.listOfMainNavMenu();
        threePage.MoreLink.click();
        threePage.hiddenlist;
        threePage.moveToElement(threePage.MoreLink);
        threePage.moveToElement(threePage.childLinkDiv);
        CBeebiesPageObject.CBeebiesPageOpen();
        CBeebiesPageObject.buttonsOnCbeebiesPage();
        browser.pause(2000);
        expect(browser.getUrl()).to.equal('https://www.bbc.co.uk/cbeebies/games/jojo-and-gran-gran-parcel-surprise-game');
    })

    it('fetch text of all the anchor tags with async and sync actions', () => {
        CBeebiesPageObject.syncasyncactions();
    })

    it("for loop -break loop", () => {
        CBeebiesPageObject.forBreakLoop();
    });


    it('check css properties', () => {
    browser.url('https://www.bbc.co.uk/cbeebies/games/jojo-and-gran-gran-parcel-surprise-game')
        CBeebiesPageObject.itemHeading();
        CBeebiesPageObject.buttonslink();
        CBeebiesPageObject.specificButton();
    })

})