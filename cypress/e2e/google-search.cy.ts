describe('Google Search', () => {
    it('can open Google and check the title', () => {
        cy.visit('https://google.com')
        cy.title().should('include', 'Google')
    });
})