describe('Check box radio button', () => {
    it('will test check box', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-checkboxes [type="checkbox"]').check('checkbox1').should('be.checked')
        cy.get('.action-checkboxes [type="checkbox"]').check('checkbox3').uncheck('checkbox3').should('not.be.checked')

        cy.get('.action-multiple-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox2'])
        cy.get('.action-multiple-checkboxes [type="checkbox"]').should('be.checked')
    });

    it('will select dropdown', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-select').should('have.value', '--Select a fruit--')
        cy.get('.action-select').select('fr-apples')
        cy.get('.action-select').should('have.value', 'fr-apples')
        cy.get('.action-select').select('fr-oranges').should('have.value', 'fr-oranges')
    });
}) 