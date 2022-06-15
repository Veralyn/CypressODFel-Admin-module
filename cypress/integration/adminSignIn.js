/// <reference types="cypress" />

import { adminSignIn } from "../fixtures/selectors.js";

describe("Given that i am on the School Admin Dasboard page", function () {
  // BeforeEach("ODFEL Admin SignIn Test", function(){

  // })
  beforeEach(() => {
    cy.visit("/portal/adminsignin")
  })

  it("I should see login page", function () {

    cy.contains("Admin Login")
    cy.get(adminSignIn.emailField).should("be.visible")
    cy.get(adminSignIn.passwordField).should("be.visible")
    cy.contains("Forgot your password?")
    cy.contains("Sign In")
  })



  it("I should be able to click on forgot password button", function () {
    cy.get('a[href*="ForgotPassword"]').click()
    cy.url().should("eq", cy.config().baseUrl + "/portal/ForgotPassword")
  })

  it("I should not be able to login with an invalid password", function () {
    cy.get(adminSignIn.emailField).type(adminSignIn.emailText)
    cy.get(adminSignIn.passwordField).type(adminSignIn.invalidPasswordText)
    cy.get(adminSignIn.signInBtn).click()
    cy.get(adminSignIn.errorMessage).should((x) => {
      expect(x).to.contain("Email or Password is incorrect")
    })

    // cy.wait(4000)
    // cy.get(adminSignIn.errorMessage).should('be visible')
  })

  it("I should be able to login with a valid password", function () {

    cy.get(adminSignIn.emailField).type(adminSignIn.emailText)
    cy.get(adminSignIn.passwordField).type(adminSignIn.passwordlText)
    cy.get(adminSignIn.signInBtn).click()
  })

})