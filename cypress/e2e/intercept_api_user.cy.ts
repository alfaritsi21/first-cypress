describe('Intercept API User', () => {
    it('should display user data form mock API', () => {
        cy.log('Test Start');
        
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', {
            statusCode: 200,
            body: [
                {id: 1, name: 'Arqi QA'},
                {id: 2, name: 'Arqi Dev'}
            ]
        }).as('getUsers')
        cy.log('Intercept set up for users API');

        // cy.visit('https://jsonplaceholder.typicode.com');
        // cy.visit('https://jsonplaceholder.typicode.com/users');
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users');
    

        cy.wait('@getUsers').then((intercepttest) => {
            cy.log('Response:', intercepttest.response);
            expect(intercepttest.response?.statusCode).to.equal(200)
            expect(intercepttest.response?.body).to.have.length(2)
            expect(intercepttest.response?.body[0].name).to.equal('Arqi QA')
        })
    });
})
