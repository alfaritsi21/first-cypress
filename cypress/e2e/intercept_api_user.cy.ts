describe('Intercept API User', () => {
    it('should display user data form mock API', () => {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', {
            statusCode: 200,
            body: [
                {id: 1, name: 'Arqi QA'},
                {id: 2, name: 'Arqi Dev'}
            ]
        }).as('getUsers')

        cy.visit('https://jsonplaceholder.typicode.com')

        cy.wait('@getUsers').its('response.statusCode').should('eq', 200)

        cy.contains('Arqi QA').should('be.visible')
        cy.contains('Arqi Dev').should('be.visible')
    });
})