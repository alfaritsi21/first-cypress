/// <reference types="cypress" />


import 'cypress-file-upload'

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://automationexercise.com/login')
    cy.get('input[data-qa="login-email"]').type(email)
    cy.get('input[data-qa="login-password"]').type(password)
    cy.get('button[data-qa="login-button"]').click()
})