import methods from "../pages/Methods"
import loginPageLocators from "../fixtures/loginLocators"
import createManuelUploadItemLocators from "../fixtures/createManuelUploadItemLocators"
import productPoolLocators from "../fixtures/productPoolLocators";
import assignedProductsLocators from 
import "cypress-real-events";
import 'cypress-xpath';
import  random  from 'lodash';
import Name from "faker/lib/name";
const faker = require("faker");

    Cypress.on('Product Pool', (err, runnable) => {
    return false
    })
    describe("Product Pool", () => {
    it("01.Başarılı bir şekilde sayfanın açıldığı ve kolonların geldiği görülür.", () => {
    methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
    methods.clickButton(loginPageLocators.loginUsername)
    methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
    methods.fillInput(loginPageLocators.loginPassword,'test123')
    methods.clickButton(loginPageLocators.loginButton)
    methods.clickButton(loginPageLocators.globalButton)
    methods.clickButton(loginPageLocators.turkishLanguageButton)
    methods.clickButton(productPoolLocators.trackingMonitorButtonOnTab)
    methods.clickButton(productPoolLocators.productPoolButtonInTrackingMonitorDropdown)
    methods.checkTextIsVisible('Eşya Atama Havuzu',true)
    methods.checkTextIsVisible('Tür',true)
    methods.checkTextIsVisible('Eşya Kodu',true)
        
    })

})