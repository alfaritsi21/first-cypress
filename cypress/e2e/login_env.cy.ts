describe('login with env', () => {
    it('can login using env data', () => {
        cy.visit(Cypress.env('baseUrl') + '/login')
        cy.get('input[data-qa="login-email"').type(Cypress.env('username'))
        cy.get('input[data-qa="login-password"]').type(Cypress.env('password'))
        cy.get('button[data-qa="login-button"]').click()
        cy.url().should('contain', 'https://automationexercise.com/')
    });
})