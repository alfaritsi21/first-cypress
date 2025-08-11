describe('Testing Hooks', () => {
    before(() => {
        cy.log('this run before all tests')
    })

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })
    
    it('Add new todo', () => {
        cy.get('.new-todo').type('New add todo{enter}')
        cy.get('.todo-list li').should('contain', 'New add todo')
    });

    it('count the todo list', () => {
        cy.get('.todo-list li').should('have.length.greaterThan', 0)
    });

    it('check the todo', () => {
        cy.get('.toggle').eq(0).check()
    });

    it('destroy the todo', () => {
        // cy.get('.todo-list li').eq(0).realHover()
        // cy.get('.destroy.todo-button').eq(0).should('be.visible')
        cy.get('.destroy.todo-button').eq(0).click({ force: true })
    });

    it('See completed todo', () => {
        cy.get('.toggle').eq(0).check()
        cy.get('.filters li').contains('Completed').click()
        cy.get('.todo-button.clear-completed').click()
    });

    afterEach(() => {
        cy.log('this run after each test')
    })

    after(() => {
        cy.log('this run after all tests')
    })
})