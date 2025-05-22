import methods from "../pages/Methods"
import loginPageLocators from "../fixtures/loginLocators"
import createManuelUploadItemLocators from "../fixtures/createManuelUploadItemLocators"
import productPoolLocators from "../fixtures/productPoolLocators";
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
    it("02.Başarılı bir şekilde sayfanın açıldıktan sonra kolonların ülke/hizmet filtresine göre düzgün geldiği görülür.", () => {
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
        methods.checkTextIsVisible('Firma Adı',true)
        methods.checkTextIsVisible('Atanan',true)
        methods.checkTextIsVisible('Oluşturan Kişi',true)
        methods.checkTextIsVisible('Oluşturulma Tarihi',true)
        methods.checkTextIsVisible('Eşya Tanımı',true)
        methods.checkTextIsVisible('Eşya Ticari Tanım',true)
        methods.checkTextIsVisible('Eşya Grup Kodu',true)
        methods.checkTextIsVisible('Tedarikçi Kodu',true)
        methods.checkTextIsVisible('Tedarikçi Adı',true)
        methods.checkTextIsVisible('Eşya Tarifesi - TR',true)
        methods.checkTextIsVisible('GTİP Tespiti Durumu - TR',true)
        
    })
    it("03.Genel Bilgiler filtresinin başarılı bir şekilde açılıp kapandığı görülür.", () => {
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
        methods.clickButton(productPoolLocators.collapsButtonProductPool)
        methods.shouldHaveNotItem(productPoolLocators.genelBilgilerMetin)

    })
    it("04.Ülke/Hizmet filtre seçimlerinin başarılı bir şekilde çalıştığı görülür.", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'test123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            methods.clickButton(createManuelUploadItemLocators.manuelUploadItemButtonServicesModal)
            methods.wait(700)
            methods.unselectCheckbox(productPoolLocators.chGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.chDualUseCheckbox)
            methods.unselectCheckbox(productPoolLocators.chYaptırımlarıCheckbox)
            methods.unselectCheckbox(productPoolLocators.deGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.deDualUseCheckbox)
            methods.unselectCheckbox(productPoolLocators.deSKDMCheckbox)
            methods.unselectCheckbox(productPoolLocators.euGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.euSKDMCheckbox)
            methods.unselectCheckbox(productPoolLocators.ukGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.trGümrükMevzuatıCheckbox)
            methods.wait(1000)
            methods.clickElementTrigger(createManuelUploadItemLocators.createButtonServicesModal)
            function generateProductName(length) {
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    let randomWord = '';
                    for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    randomWord += characters.charAt(randomIndex);
                    }
                    return randomWord;
                    }
                    const productName = generateProductName(6);
            methods.fillInput(createManuelUploadItemLocators.productIdTextBoxCMD, productName)
            function generateProductDescription(length) {
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    let randomWord = '';
                    for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    randomWord += characters.charAt(randomIndex);
                    }
                    return randomWord;
                    }
                    const productDescription = generateProductDescription(6);
            methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxTRCMD, productDescription)
            methods.realClickElement(createManuelUploadItemLocators.productDescriptionTextBoxDECMD)
            methods.clickButton(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
            methods.clickButton(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
            methods.wait(600)
            methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
            methods.wait(600)
            methods.clickButton(productPoolLocators.productPoolButtonInTrackingMonitorDropdown)
            methods.checkTextIsVisible(productName,true)
            methods.wait(500)
            methods.selectCheckbox(productPoolLocators.PPTrGümrükMevzuatıCheckbox)
            methods.checkTextIsNotPresent(productName,true)
            
        })
        it("05.Eşyaların atanmış olduğu kişiler filtresinin başarılı bir şekilde çalıştığı görülür.", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'test123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            methods.clickButton(createManuelUploadItemLocators.manuelUploadItemButtonServicesModal)
            methods.wait(700)
            methods.unselectCheckbox(productPoolLocators.chGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.chDualUseCheckbox)
            methods.unselectCheckbox(productPoolLocators.chYaptırımlarıCheckbox)
            methods.unselectCheckbox(productPoolLocators.deGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.deDualUseCheckbox)
            methods.unselectCheckbox(productPoolLocators.deSKDMCheckbox)
            methods.unselectCheckbox(productPoolLocators.euGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.euSKDMCheckbox)
            methods.unselectCheckbox(productPoolLocators.ukGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.trGümrükMevzuatıCheckbox)
            methods.wait(1000)
            methods.clickElementTrigger(createManuelUploadItemLocators.createButtonServicesModal)
            function generateProductName(length) {
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    let randomWord = '';
                    for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    randomWord += characters.charAt(randomIndex);
                    }
                    return randomWord;
                    }
                    const productName = generateProductName(6);
            methods.fillInput(createManuelUploadItemLocators.productIdTextBoxCMD, productName)
            function generateProductDescription(length) {
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    let randomWord = '';
                    for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    randomWord += characters.charAt(randomIndex);
                    }
                    return randomWord;
                    }
                    const productDescription = generateProductDescription(6);
            methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxTRCMD, productDescription)
            methods.realClickElement(createManuelUploadItemLocators.productDescriptionTextBoxDECMD)
            methods.clickButton(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
            methods.clickButton(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
            methods.wait(600)
            methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
            methods.wait(600)
            methods.clickButton(productPoolLocators.productPoolButtonInTrackingMonitorDropdown)
            methods.checkTextIsVisible(productName,true)
            methods.wait(500)
            methods.selectCheckbox(productPoolLocators.PPTrGümrükMevzuatıCheckbox)
            methods.checkTextIsNotPresent(productName,true)
            
        })
        it("06.Atanmamış Eşyalar Filtresinin başarılı bir şekilde çalıştığı ve atanmamış eşyaların geldiği görülür.", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'test123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            methods.clickButton(createManuelUploadItemLocators.manuelUploadItemButtonServicesModal)
            methods.wait(700)
            methods.unselectCheckbox(productPoolLocators.chGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.chDualUseCheckbox)
            methods.unselectCheckbox(productPoolLocators.chYaptırımlarıCheckbox)
            methods.unselectCheckbox(productPoolLocators.deGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.deDualUseCheckbox)
            methods.unselectCheckbox(productPoolLocators.deSKDMCheckbox)
            methods.unselectCheckbox(productPoolLocators.euGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.euSKDMCheckbox)
            methods.unselectCheckbox(productPoolLocators.ukGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.trGümrükMevzuatıCheckbox)
            methods.wait(1000)
            methods.clickElementTrigger(createManuelUploadItemLocators.createButtonServicesModal)
            function generateProductName(length) {
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    let randomWord = '';
                    for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    randomWord += characters.charAt(randomIndex);
                    }
                    return randomWord;
                    }
                    const productName = generateProductName(6);
            methods.fillInput(createManuelUploadItemLocators.productIdTextBoxCMD, productName)
            function generateProductDescription(length) {
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    let randomWord = '';
                    for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    randomWord += characters.charAt(randomIndex);
                    }
                    return randomWord;
                    }
                    const productDescription = generateProductDescription(6);
            methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxTRCMD, productDescription)
            methods.realClickElement(createManuelUploadItemLocators.productDescriptionTextBoxDECMD)
            methods.clickButton(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
            methods.clickButton(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
            methods.wait(600)
            methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
            methods.wait(600)
            methods.clickButton(productPoolLocators.productPoolButtonInTrackingMonitorDropdown)
            methods.checkTextIsVisible(productName,true)
            methods.wait(500)
            methods.selectCheckbox(productPoolLocators.PPTrGümrükMevzuatıCheckbox)
            methods.checkTextIsNotPresent(productName,true)
            
        })
        it("07.Atanmamış Eşyalar Filtresine tekrar tıklanınca atanan eşyaların başarılı bir şekilde geldiği görülür.", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'test123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            methods.clickButton(createManuelUploadItemLocators.manuelUploadItemButtonServicesModal)
            methods.wait(700)
            methods.unselectCheckbox(productPoolLocators.chGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.chDualUseCheckbox)
            methods.unselectCheckbox(productPoolLocators.chYaptırımlarıCheckbox)
            methods.unselectCheckbox(productPoolLocators.deGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.deDualUseCheckbox)
            methods.unselectCheckbox(productPoolLocators.deSKDMCheckbox)
            methods.unselectCheckbox(productPoolLocators.euGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.euSKDMCheckbox)
            methods.unselectCheckbox(productPoolLocators.ukGTİPCheckbox)
            methods.unselectCheckbox(productPoolLocators.trGümrükMevzuatıCheckbox)
            methods.wait(1000)
            methods.clickElementTrigger(createManuelUploadItemLocators.createButtonServicesModal)
            function generateProductName(length) {
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    let randomWord = '';
                    for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    randomWord += characters.charAt(randomIndex);
                    }
                    return randomWord;
                    }
                    const productName = generateProductName(6);
            methods.fillInput(createManuelUploadItemLocators.productIdTextBoxCMD, productName)
            function generateProductDescription(length) {
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    let randomWord = '';
                    for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    randomWord += characters.charAt(randomIndex);
                    }
                    return randomWord;
                    }
                    const productDescription = generateProductDescription(6);
            methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxTRCMD, productDescription)
            methods.realClickElement(createManuelUploadItemLocators.productDescriptionTextBoxDECMD)
            methods.clickButton(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
            methods.clickButton(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
            methods.wait(600)
            methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
            methods.wait(600)
            methods.clickButton(productPoolLocators.productPoolButtonInTrackingMonitorDropdown)
            methods.checkTextIsVisible(productName,true)
            methods.wait(500)
            methods.selectCheckbox(productPoolLocators.PPTrGümrükMevzuatıCheckbox)
            methods.checkTextIsNotPresent(productName,true)
            
        })
        it.only("21.İş Listem Kısayol butonuna tıklandığında başarılır bir şekilde iş listem ekranına geçiş yapıldığı görülür.", () => {
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
            methods.wait(600)
            methods.clickButton(productPoolLocators.assignedProductsButtonInProductPoolPage)
            methods.checkTextIsVisible('Tamamlanmış Eşyalar', true)
               
        })
        

})