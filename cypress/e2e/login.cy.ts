describe('Login using custom commands', () => {
    it('will login to the account', () => {
        cy.login('test2408@test2408.com', 'sharkbite89')
        cy.url().should('include', 'https://automationexercise.com/')
    });
})