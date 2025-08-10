describe('Login user with fixture', () => {
    it('Should login with json data from fixture', () => {
        cy.fixture('user').then((user) => {
            cy.visit('https://automationexercise.com/login')
            cy.get('input[data-qa="login-email"]').type(user.username)
            cy.get('input[data-qa="login-password"]').type(user.password)
            cy.get('button[data-qa="login-button"]').click()
        })
    });
})

