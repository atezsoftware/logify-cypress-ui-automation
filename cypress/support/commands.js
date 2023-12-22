import methods from "../pages/Methods";

Cypress.Commands.add('loginLogify',(username,password)=>{
    cy.session([username,password],()=>{
        methods.visit()
        methods.clickButton(loginPageLocators.loginText)
        methods.fillInput(loginPageLocators.username,username)
        methods.fillInput(loginPageLocators.password,password)
        methods.clickButton(loginPageLocators.loginButton)
    })
})