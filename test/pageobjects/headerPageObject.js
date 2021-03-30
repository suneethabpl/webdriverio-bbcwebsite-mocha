class headerObject {
    // static loadHomeP(){
    //     // cy.visit(Cypress.env('url'));
    //     // cy.url().should('include','bbc');
    // }
    static headerInAllPages(){
     $("//header[@id='header-content']").isExisting();
        // .should('be.visible')
    }
}
export default headerObject;