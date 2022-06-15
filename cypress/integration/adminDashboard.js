/// <reference types="cypress" />
import { adminSignIn, adminDashboard, userAccess } from "../fixtures/selectors.js";

describe("Given that i'm on the School Admin Dashboard page", function () {
  before(() => {
    cy.visit("/portal/adminsignin")
    cy.get(adminSignIn.emailField).type(adminSignIn.emailText)
    cy.get(adminSignIn.passwordField).type(adminSignIn.passwordlText)
    cy.get(adminSignIn.signInBtn).click()
    cy.get(".MuiCircularProgress-svg").should("be.visible")
  })


  it("Should be able to View and Search Applicants", () => {
    // cy.get(".MuiCircularProgress-svg").should("be.visible")
    cy.contains("Fetching Data")
    cy.get("a[href='/portal/admin/InProgress']").should(x => {
      expect(x).to.be.visible
    })
    cy.get("a[href='/portal/admin/InProgress'] > h2").should("contain.text", "All Applications")
    cy.get("a[href='/portal/admin/InProgress'] > div > h3").should("be.visible")
    cy.get("a[href='/portal/admin/InProgress'] > div > h3 > svg").should("be.visible")
    cy.get("div > a[href='/portal/admin/InProgress']").click()
    cy.get(adminDashboard.searchApplicants).type(adminDashboard.searchText)
    cy.get(adminDashboard.backHome).click()
  })

  it("Should be able View and Search Applicants Payment History", () => {
    // cy.get(".MuiCircularProgress-svg").should("be.visible")
    cy.contains("Fetching Data")
    cy.get("a[href='/portal/admin/InProgress']").should(x => {
      expect(x).to.be.visible
    })
    cy.get("a[href='/portal/admin/PaymentHistory'] > h2").should("contain.text", "No. of Payments")
    cy.get("a[href='/portal/admin/PaymentHistory'] > div > h3").should("be.visible")
    cy.get("a[href='/portal/admin/PaymentHistory'] > div > h3 > svg").should("be.visible")
    cy.get("div > a[href='/portal/admin/PaymentHistory']").click()
    cy.get(adminDashboard.searchPayment).type(adminDashboard.paymentText)
    cy.get(adminDashboard.backHome).click()
  })

  it("Should be able View All Completed Applications", () => {
    // cy.get(".MuiCircularProgress-svg").should("be.visible")
    cy.contains("Fetching Data")
    cy.get("a[href='/portal/admin/InProgress']").should(x => {
      expect(x).to.be.visible
    })
    cy.get("a[href='/portal/admin/ApproveApplications'] > h2").should("contain.text", "Completed Applications")
    cy.get("a[href='/portal/admin/ApproveApplications'] > div > h3").should("be.visible")
    cy.get("a[href='/portal/admin/ApproveApplications'] > div > h3 > svg").should("be.visible")
    cy.get("div > a[href='/portal/admin/ApproveApplications']").click()
    cy.get(adminDashboard.backHome).click()
  })

  it("Should be able view Number of Admissions", () => {
    // cy.get(".MuiCircularProgress-svg").should("be.visible")
    cy.contains("Fetching Data")
    cy.get("a[href='/portal/admin/InProgress']").should(x => {
      expect(x).to.be.visible
    })
    cy.get("a[href='/portal/admin/Students'] > h2").should("contain.text", "No. of Admissions")
    cy.get("a[href='/portal/admin/Students'] > div > h3").should("be.visible")
    cy.get("a[href='/portal/admin/Students'] > div > h3 > svg").should("be.visible")
    cy.get("div > a[href='/portal/admin/Students']").click()
    cy.get(adminDashboard.backHome).click()
  })


  
  it("Should be able click on User Access Dropdown", () => {
    cy.get(userAccess.userAccessText).click()
    
  })

//   it ("Should be able to click on Roles Page", () =>{
//     cy.get(userAccess.roles).click()
//     cy.get(userAccess.userAccessSearch).type(userAccess.userSearchText)
//     cy.get("tbody>tr").should("be.visible")
//     cy.get(userAccess.editRole).click()

//   })




  
      







  
})