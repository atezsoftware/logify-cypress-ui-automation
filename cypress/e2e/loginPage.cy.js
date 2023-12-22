import methods from "../pages/Methods"
import loginPageLocators from "../fixtures/loginLocators"
import "cypress-real-events";
const faker = require("faker");

    Cypress.on('Login Page', (err, runnable) => {
    return false
    })
    describe("Login Page", () => {
    it("01.Başarılı bir şekilde login yapmak", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.checkTextIsVisible('Ali Dede',true)

    })

    it("02.Yanlış password ile sisteme giriş yapmak", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'L')
        methods.clickButton(loginPageLocators.loginButton)
        methods.checkTextIsVisible('Invalid username or password.',true)

    })

    it("03.Null kullanıcı adı ve şifre ile giriş yapmak", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginButton)
        methods.checkTextIsVisible('Invalid username or password.',true)

    })

    it("04.Yanlış username ile giriş yapmak", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'test@outlook.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.checkTextIsVisible('Invalid username or password.',true)

    })

    it('05."Parolanızı mı unuttunuz?" textinin başarılı şekilde çalışması', () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.forgotPassword)
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.clickButton(loginPageLocators.sendRecoveryLink)
        methods.checkTextIsVisible('You should receive an email shortly with further instructions.',true)

    })

    it('06.Şifre kurtarma linkinin boş gönderilmesi', () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.forgotPassword)
        methods.clickButton(loginPageLocators.sendRecoveryLink)
        methods.checkTextIsVisible('Please specify username.',true)

    })

    it('07.Şifre kurtarma linkinin boş gönderilmesi', () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.forgotPassword)
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.clickButton(loginPageLocators.sendRecoveryLink)
        methods.shouldHaveItem(loginPageLocators.loginUsername)
    })

    })