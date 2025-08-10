describe('Upload file', () => {
    it('Upload file to form', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test-file.txt')
        cy.get('#file-submit').click()

        cy.get('h3').should('contain', 'File Uploaded!')
    });
})