describe('focus', () => {
    it('focus on a DOM element', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-focus').focus()
        cy.get('.action-focus').should('have.class', 'focus')
        .prev().should('have.attr', 'style', 'color: orange;')
    });
})