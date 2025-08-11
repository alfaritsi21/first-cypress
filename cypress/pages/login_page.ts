export const visitLoginPage = () => {
    cy.visit(Cypress.env('baseUrl') + '/login')
}

export const fillUsername = (username: string) => {
    cy.get('input[data-qa="login-email"]').type(username)
}

export const fillPassword = (password: string) => {
    cy.get('input[data-qa="login-password"]').type(password)
}

export const submitLogin = () => {
    cy.get('button[data-qa="login-button"]').click()
}