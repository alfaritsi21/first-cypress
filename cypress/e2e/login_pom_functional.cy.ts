import { visitLoginPage, fillUsername, fillPassword, submitLogin } from "../pages/login_page";

describe('Login with POM', () => {
    it('login to the page', () => {
        visitLoginPage()
        fillUsername(Cypress.env('username'))
        fillPassword(Cypress.env('password'))
        submitLogin()
    });
})