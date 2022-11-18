/// <reference types="cypress" />

context('HBOmax test', () => {
    beforeEach(() => {
      cy.visit('https://play.hbomax.com/signUp')
    })
    // https://on.cypress.io/interacting-with-elements
    it('Login', () => {
      // https://on.cypress.io/type
      //cy.viewport('iphone-6')
      cy.get('[data-testid="PrivacyConsentAccept"] > .css-175oi2r').click()
    cy.wait(200)
    cy.get('[data-testid="SignInButton"] > .css-1rynq56').click()
    cy.wait(2000)
      //cy.get('[data-testid=“PaywallScreenFooterInlineStyleTextNestedText”]').click()
      
      cy.get('[data-testid="EmailTextInput"]')
        .type('hbomaxtestlat188@hbo.com')
      cy.get('[data-testid="PasswordTextInput"]')
        .type('enterprise1234')
        cy.wait(2000)
        cy.get('.r-1oszu61 > :nth-child(3) > .r-1loqt21').click()
        cy.wait(2000)
        cy.get('[data-testid="SignInButton"] > .css-175oi2r').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > [data-testid="AvatarContentPressableContainer"] > [aria-hidden="true"]').click()
        cy.get('[data-testid=“ProfileDropDownButton”] > .css-1rynq56')
        .should('have.text', 'Rodrigo')
    })
})