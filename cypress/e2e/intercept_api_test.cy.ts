describe('Intercept & API Testing', () => {
    it('Mock API Response', () => {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
            statusCode: 200,
            body: [
                {id: 1, title: 'Fake Title', body: 'Fake Content'}
            ],
        }).as('getPosts')

        cy.visit('https://jsonplaceholder.typicode.com')

        cy.wait('@getPosts')
        .its('response.statusCode')
        .should('eq', 200)
    });
})