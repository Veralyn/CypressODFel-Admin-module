import { adminSignIn,adminDashboard } from "../fixtures/selectors.js";
 
describe("Given that i'm on the School Admin Dashboard page", function(){

})

it("I should be able to login to navigate through different pages on the Admin Page", function(){
    cy.visit("/")
    cy.get(adminSignIn.adminPageTitle).should('be.visible')
    cy.get(adminSignIn.emailField).type(adminSignIn.emailText)
    cy.get(adminSignIn.passwordField).type(adminSignIn.passwordlText)
    cy.get(adminSignIn.signInBtn).click()
    // cy.get(adminDashboard.pageTitle).should('be visible')
    // cy.get(adminDashboard.allApplicantsText).click()
    cy.get(adminDashboard.allApplicants).click()

})