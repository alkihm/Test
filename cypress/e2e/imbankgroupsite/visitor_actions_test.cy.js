describe('I&M QA Technical Test', () => {
    beforeEach(() => {
        cy.viewport(1440, 900);
        cy.visit('https://www.imbankgroup.com/ke/')
        Cypress.on("uncaught:exception", (err, Runnable) => {
            return false;
        });

    });
    //start of Nav test 
    it('Should navigate through headers', () => {
        cy.get('#menu-item-12094').click()
        cy.get("li[id='menu-item-16535'] a").click({ force: true })
        cy.get("li[id='menu-item-16536'] a").click({ force: true })
        cy.get("li[id='menu-item-16538'] a").click({ force: true })

        //Cards
        cy.get("li[id='menu-item-16539'] a").click({ force: true })
        cy.get("li[id='menu-item-16540'] a").click({ force: true })
        cy.get("li[id='menu-item-16541'] a").click({ force: true })

        cy.get('[href="https://www.imbankgroup.com/ke/business/"]').click()
        cy.get('#menu-item-12093 > [href="https://www.imbankgroup.com/ke/diaspora/"]').click()
        cy.get('#menu-item-12100 > :nth-child(1)').click()
        cy.get('#menu-item-12092').click()
        cy.get('[href="https://www.imbankgroup.com/ke/business/"]').click()
        
    })
    //Credit card Test 
    it('Should navigate Credit Card Menu', () => {
        cy.contains("Cards").click({ force: true })
        cy.get(':nth-child(1) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click()
        cy.get(':nth-child(6) > .feature-30-body-col > .card > .text-gray-5 > .card-body > .card-type-22-title > .mx-height-content-holder').click()
    })

    //Terms and conditions Test
    it('Should Locate and expand the Terms and Conditions', () => {
        cy.get('#menu-item-153 > a').click()
        cy.get('.feature-46-header > .drop-down-cont > .dropdown > .dropdown-select-cont').click()
    })
    //Customer details form Test
    it('Should autofill form', () => {
        cy.get('#menu-item-17326 > a').click()
        cy.get('#input_17_2').type("John Kimani")
        cy.get('#input_17_3').type("John@gmail.com")
        cy.get('#input_17_4').type("254720453786")
        cy.get('#input_17_5').select('Kisumu')
        cy.get('#choice_17_6_0').click()
        cy.get('#input_17_9_1').click()
        //cy.get('#gform_submit_button_17').click()
    })

})