import CBeebiesPageObject from "../pageobjects/CBeebiesPageObject"
import threebbcPage from '../pageobjects/threebbcPageObjects';
import bitesizePageObject from "../pageObjects/bitesizePageObject"
const CBeebiesPage = new bitesizePageObject();
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
    it('go to CBeebiesPage', () => {
    
        // homePageObject.loadHomePage();
        // homePageObject.moreDropdown();
        bitesizePageObject.listOfMainNavMenu();
        threePage.MoreLink.click();
        threePage.hiddenlist;
        // browser.pause(2000);
        threePage.moveToElement(threePage.MoreLink);
        // browser.pause(2000);
        threePage.moveToElement(threePage.childLinkDiv);
        // browser.pause(2000);
        CBeebiesPageObject.CBeebiesPageOpen();
        // browser.pause(2000);
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
        // CBeebiesPageObject.CBeebiesPageOpen();
    // CBeebiesPageObject.buttonsOnCbeebiesPage();
    //     // cy.get(".promo__contents").should('have.length', 12).each(($el, index, $listOfElements) => {
    //     //     cy.log($listOfElements.length);
    //     //     cy.log($el.text());
    //     //     if (index == 0) {
    //     //         $el.click();
    //     //     }
    // })
    //     // cy.get(".content-item-description__heading").should('have.css', 'margin-bottom', '8px')
    browser.url('https://www.bbc.co.uk/cbeebies/games/jojo-and-gran-gran-parcel-surprise-game')
        CBeebiesPageObject.itemHeading();
    //     // cy.get(".brandcard__inner").should('be.visible').and('have.css', 'line-height', '10px');
    //     // cy.get(".brandcard").should('have.css', 'background-color', 'rgb(157, 85, 234)');
    //     // cy.get(".brandcard").trigger('mouseover').click();
    //     // cy.get(".button__inner").should('have.length', 4).each(($el, index, $listOfElements) => {
    //     //     cy.log($listOfElements.length);
    //     //     cy.log($el.text());
    //     // })
        CBeebiesPageObject.buttonslink();
        CBeebiesPageObject.specificButton();
    //     // cy.get("span.button__inner").eq(0).should('contains.text', 'Add to My Shows').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.3) 0px 4px 3px -2px')
    //     //     .and('have.css', 'background-color', 'rgb(49, 121, 181)');
    //     // cy.get("span.button__inner").eq(0).should('contains.text', 'Add to My Shows').trigger('mouseover').should('have.css', 'background-color', 'rgb(49, 121, 181)');
    //     // cy.get("span.button__inner").eq(1).should('contain.text', 'Choose an episode').should('have.css', 'background-color', 'rgb(226, 0, 122)');
    //     // cy.get("span.button__inner").eq(1).should('contain.text', 'Choose an episode').trigger('mouseover').should('have.css', 'background-color', 'rgb(226, 0, 122)');
    })

})