describe("Halaman Contoh", () => {
    it('buka halaman Google', () => {
        cy.visit("https://google.com")
        cy.title().should("include", "Google")
    });
})