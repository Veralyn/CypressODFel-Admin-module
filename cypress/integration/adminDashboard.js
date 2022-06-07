import { adminSignIn,adminDashboard, userAccess } from "../fixtures/selectors.js";
 
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
    
})

it("I should be able to click on all applicants icon and search for applicants", function(){
    cy.get(adminDashboard.allApplicants).click()
    cy.get(adminDashboard.searchApplicants).type(adminDashboard.searchText)
    cy.get(adminDashboard.backHome).click()
})

// it("I should be able to click and download list of all Applicants", function(){
//     cy.get(adminDashboard.downloadIcon).click()
//     cy.get(adminDashboard.backHome).click()
// })

it("I should be able to click on all Payments icon and search for all Payments", function(){
    cy.get(adminDashboard.allPayments).click()
    cy.get(adminDashboard.searchPayment).type(adminDashboard.paymentText)
    cy.get(adminDashboard.backHome).click()
})

it("I should be able to click on all completed Applicantions and search for all Applcations", function(){
    cy.get(adminDashboard.completedApplicantions).click()
    cy.get(adminDashboard.searchApplications).type(adminDashboard.applicationText)
    cy.get(adminDashboard.backHome).click()

})

it("I should be able to click on all admissions icon", function(){
    cy.get(adminDashboard.noOfAdmission).click()
    cy.get(adminDashboard.backHome).click()
})
 
it("I should be able to access pages under User Acess Module", function(){
cy.get(userAccess.userAccessText).click()
// cy.get(userAccess.userAccessSearch).type(userAccess.userSearchText)
})

it ("I should be able to click on Roles page", function(){
    cy.get(userAccess.roles).click()
    cy.get(userAccess.addnewRoles).click({force: true})
    cy.get(userAccess.typenewRole).type(userAccess.roleText, {force: true})
    cy.get(userAccess.roleDescription).type(userAccess.descriptionText, {force: true})
})

