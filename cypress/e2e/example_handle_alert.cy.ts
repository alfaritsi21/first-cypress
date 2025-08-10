describe('Handle Alert', () => {
    it('will handle JS Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('button', 'Click for JS Alert').click()
        cy.on('window:alert', (text) => {
            expect(text).to.contains('I am a JS Alert')
        })

        cy.contains('button', 'Click for JS Confirm').click()
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('I am a JS Confirm')
            // return true
            return false
        })

        cy.window().then((window) => {
            cy.stub(window, 'prompt').returns('Hello World')
        })
        cy.wait(1000)
         cy.contains('button', 'Click for JS Prompt').click()
    });
})