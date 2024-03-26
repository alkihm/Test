describe('I&M QA Technical Test', () => {
    beforeEach(() => {
        cy.viewport(1440, 900);
        Cypress.on("uncaught:exception", (err, Runnable) => {
          return false;
        });
       
      });

    it('Should navigate through all headers', () => {
      cy.visit('https://www.imbankgroup.com/ke/')
      cy.get('#menu-item-12094').click()
      cy.get('[href="https://www.imbankgroup.com/ke/business/"]').click()
      cy.get('#menu-item-12093 > [href="https://www.imbankgroup.com/ke/diaspora/"]').click()
      cy.get('#menu-item-12100 > :nth-child(1)').click()
      cy.get('#menu-item-12092').click()
      cy.get('[href="https://www.imbankgroup.com/ke/business/"]').click()
    
    })
  })