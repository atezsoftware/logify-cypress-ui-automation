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
        methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
        methods.fillInput(loginPageLocators.loginPassword,'test123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.checkTextIsVisible('Müşavir Test',true)

    })

    it("02.Yanlış password ile sisteme giriş yapmak", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'musavir.bir@testmusavir.com')
        methods.fillInput(loginPageLocators.loginPassword,'L')
        methods.clickButton(loginPageLocators.loginButton)
        methods.checkTextIsVisible('Geçersiz e-posta veya şifre.',true)

    })

    it("03.Null kullanıcı adı ve şifre ile giriş yapmak", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginButton)
        methods.checkTextIsVisible('Geçersiz e-posta veya şifre.',true)

    })

    it("04.Yanlış username ile giriş yapmak", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'test@outlook.com')
        methods.fillInput(loginPageLocators.loginPassword,'123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.checkTextIsVisible('Geçersiz e-posta veya şifre.',true)

    })

    it('05."Parolanızı mı unuttunuz?" textinin başarılı şekilde çalışması', () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.forgotPassword)
        methods.checkTextIsVisible('E-posta adresinizi girin ve yeni bir şifre oluşturmaya ilişkin talimatları size göndereceğiz.',true)

    })

    it('06.Şifre kurtarma linkinin boş gönderilmesi', () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.forgotPassword)
        methods.clickButton(loginPageLocators.sendRecoveryLink)
        methods.checkTextIsVisible('E-posta boş olamaz.',true)

    })

    it('07.Şifre kurtarma linkinin gönderilmesi', () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.forgotPassword)
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
        methods.clickButton(loginPageLocators.sendRecoveryLink)
        methods.wait(500)
        methods.checkTextIsVisible('Daha fazla talimatla kısa sürede bir e-posta almalısınız.',true)
    })

    })