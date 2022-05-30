import { adminSignIn } from "../fixtures/selectors.js";

describe("Given that i am on the School Admin page", function(){
// BeforeEach("ODFEL Admin SignIn Test", function(){
    
// })

it("I should not be able to login with an invalid password", function(){
    cy.visit("/")
    cy.get(adminSignIn.adminPageTitle).should('be.visible')
    cy.get(adminSignIn.emailField).type(adminSignIn.emailText)
    cy.get(adminSignIn.passwordField).type(adminSignIn.invalidPasswordText)
    cy.get(adminSignIn.signInBtn).click()
    cy.get(adminSignIn.errorMessage)
    cy.wait(5000)
    // cy.get(adminSignIn.errorMessage).should('be visible')
})

it("I should be able to login with a valid password", function(){
    cy.visit("/")
    cy.get(adminSignIn.adminPageTitle).should('be.visible')
    cy.get(adminSignIn.emailField).type(adminSignIn.emailText)
     cy.get(adminSignIn.passwordField).type(adminSignIn.passwordlText)
     cy.get(adminSignIn.signInBtn).click()
})

})