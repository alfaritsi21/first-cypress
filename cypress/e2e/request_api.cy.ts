describe('Request API Example', () => {
    it('GET user list', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(10)
        })
    });
})