class footerObject {
    // static loadHomePage(){
    //     // cy.visit(Cypress.env('url'));
    //     // cy.url().should('include','bbc');
    // }
    static footerOfAllPages(){
          $('//div[@class="ssrcss-3esohe-GlobalFooter ejnx8uh0"]').isVisible().click();
        //   .should('be.visible').contains('Home').click();
    }
}
export default footerObject;