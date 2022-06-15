/// <reference types="cypress" />
import { adminSignIn } from "../fixtures/selectors.js";

describe("Given that i am on the Admin SignIn page", function () {
  beforeEach(() => {
    cy.visit("portal/adminsignin")
    cy.get('a[href*="ForgotPassword"]').click()
  })
  it("test if on forgot password page", () => {
    cy.get("img[alt='FedPolyLogo']").should("be.visible")
    cy.contains("Forgot your password?")
    cy.get("input[type='email']").should("be.visible")
    cy.contains("Sign In")
    cy.contains("Reset Password")

  })

  it("Test with wrong email format", () => {
    cy.get("input[type='email']").type("verag")
    cy.get("button").click()
    cy.get(".notification-container").should(x => {
      expect(x).to.contain("Email is invalid")
    })
  })


  it("Test with email that does not exist", () => {
    cy.get("input[type='email']").type("vonmichael@sidmach.com")
    cy.get("button").click()
    cy.contains("Loading")
    cy.get(".notification-container").should(x => {
      expect(x).to.contain("Email not recognized")
    })

  })


  it("Test with email that does not exist", () => {
    cy.get("input[type='email']").type("veralynmichael@gmail.com")
    cy.get("button").click()
    cy.contains("Loading")
    cy.get(".notification-success").should(x => {
      expect(x).to.contain("Success")
    })
  })
})