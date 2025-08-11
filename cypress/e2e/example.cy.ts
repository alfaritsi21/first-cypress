describe("Latihan Pertama", () => {
    it('Cek halaman berhasil kebuka', () => {
        cy.visit('https://example.cypress.io')
        cy.title().should('include', 'Cypress')
    });

    it('Cek klik link ke halaman lain', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('Commands').click()
        cy.contains('Actions').click()
        cy.url().should('include', '/commands/actions')
    });

    it('Cek input form dan tombol', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-email').type('ar@example.com')
        cy.get('.action-email').should('have.value', 'ar@example.com')
    });

    // it('Cek submit button', () => {
    //     cy.visit('https://example.cypress.io/commands/actions')
    //     cy.get('#couponCode1').type('HALFOFF')
    //     cy.get('.btn-primary').eq(0).click()
    //     cy.contains('Your form has been submitted!').should('be.visible')
    // });
})