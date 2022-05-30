 import { adminSignIn} from "../fixtures/selectors.js";

 describe("Given that i am on the Admin SignIn page", function(){


it ("I should be able to click on forgot password button", function(){
    cy.visit("/")
    cy.get(adminSignIn.adminPageTitle).should('be.visible')
    cy.get(adminSignIn.emailField).type(adminSignIn.emailText)
    cy.get(adminSignIn.passwordField).type(adminSignIn.invalidPasswordText)
    cy.get(adminSignIn.signInBtn).click()
    // cy.wait(5000)
    cy.get(adminSignIn.errorMessage) 
    cy.get(adminSignIn.forgotYourPasswordBtn).click({force: true})
})
 })