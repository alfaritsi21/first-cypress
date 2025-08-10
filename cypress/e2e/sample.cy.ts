describe("My Firts TS Test", () => {
  it('should visit example page', () => {
    cy.visit("https://example.cypress.io")
    cy.contains("Kitchen Sink")
  });
})