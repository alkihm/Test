describe('I&M QA Technical Test', () => {
    beforeEach(() => {
        cy.viewport(1440, 900);
        cy.visit('https://www.imbankgroup.com/ke/')
        Cypress.on("uncaught:exception", (err, Runnable) => {
          return false;
        });
       
      });

    it('Should navigate through all headers', () => {
      cy.get('#menu-item-12094').click()
      cy.get('[href="https://www.imbankgroup.com/ke/business/"]').click()
      cy.get('#menu-item-12093 > [href="https://www.imbankgroup.com/ke/diaspora/"]').click()
      cy.get('#menu-item-12100 > :nth-child(1)').click()
      cy.get('#menu-item-12092').click()
      cy.get('[href="https://www.imbankgroup.com/ke/business/"]').click()
    
    })

    it.only('Should navigate Credit Card Menu', () => {
        cy.contains("Cards").click({force: true})
        cy.get(':nth-child(1) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click()
        cy.get(':nth-child(6) > .feature-30-body-col > .card > .text-gray-5 > .card-body > .card-type-22-title > .mx-height-content-holder').click()
      
      })
  })