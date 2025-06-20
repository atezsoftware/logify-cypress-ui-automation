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
    it("21.İş Listem Kısayol butonuna tıklandığında başarılır bir şekilde iş listem ekranına geçiş yapıldığı görülür.", () => {
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
    it("22.Eşyalar checkbox ile seçildiğinde sayısının doğru geldiği görülür.", () => {
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
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.shouldPageExistItem(productPoolLocators.banaAtaMetinLocator)
    })
    it("23.Eşyalar checkbox ile seçildiğinde Bana Ata butonu başarılı bir şekilde görülür ", () => {
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
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.shouldPageExistItem(productPoolLocators.banaAtaMetinLocator)
    })
    it("25.Bana Ata Butonu Tıklandığında başarılı bir şekilde modal açıldığı ve seçilen eşya adedinin doğru geldiği görülür", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.clickElementTrigger(productPoolLocators.banaAtaMetinLocator)
    methods.checkTextIsVisible('Seçilen Eşyaların Tüm Servisleri Dahil Edilsin mi?', true)
    })
    it("26.Bana Ata Butonu tıklandıktan sonra açılan modalda Tüm Servisleri Dahil Et checkboxı seçilip Ata butonuna tıklanınca başarılı bir şekilde “Uyarı!Seçtiğiniz kalemler test Müşavir’e atanacaktır kabul ediyor musunuz?” uyarısının geldiği görülür", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.clickElementTrigger(productPoolLocators.banaAtaMetinLocator)
    methods.clickButton(productPoolLocators.assigneButtonInModal)
    methods.checkTextIsVisible("Seçtiğiniz kalemler Müşavir Test'ya atanacaktır kabul ediyor musunuz?", true)
    })
    it("27.Bana Ata Butonu Tıklandığında açılan modalda Vazgeç butonu tıklandığı başarılı bir şekilde modalın kapandığı görülür", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.clickElementTrigger(productPoolLocators.banaAtaMetinLocator)
    methods.clickButton(productPoolLocators.assigneButtonInModal)
    methods.clickButton(productPoolLocators.cancelButtonInAssigneModal)
    methods.checkTextIsNotPresent("Seçtiğiniz kalemler Müşavir Test'ya atanacaktır kabul ediyor musunuz?", true)
    })    
    it("28.Eşyaların checkbox ile seçimi yapıldıktan başarılır bir şekilde “Uyarı! Başka bir müşavire atama yapmadan önce lütfen firmaya göre filtreleme yapınız.” uyarısı geldiği görülür", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.dashboardButton)
    methods.wait(300)
    methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
    methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
    methods.clickButton(createManuelUploadItemLocators.denemeMailAşSelected)
    methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
    methods.clickButton(createManuelUploadItemLocators.manuelUploadItemButtonServicesModal)
    methods.wait(700)
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
            const productName2 = generateProductName(6);
    methods.fillInput(createManuelUploadItemLocators.productIdTextBoxCMD, productName2)
    methods.wait(200)
        function generateProductDescription(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let randomWord = '';
                    for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomWord += characters.charAt(randomIndex);
                    }
            return randomWord;
                    }
            const productDescription2 = generateProductDescription(6);
    methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxENCMD, productDescription2)
    methods.realClickElement(createManuelUploadItemLocators.productDescriptionTextBoxDECMD)
    methods.clickButton(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.selectCheckbox(productPoolLocators.secondProductPoolItemCheckbox)
    methods.checkTextIsVisible("Başka bir müşavire atama yapmadan önce lütfen firmaya göre filtreleme yapınız.", true)
    })    
    it("29.Çıkan Uyarıda tamam butonuna tıklandığında uyarının başarılı bir şekilde kapandığı görülür", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.dashboardButton)
    methods.wait(300)
    methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
    methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
    methods.clickButton(createManuelUploadItemLocators.denemeMailAşSelected)
    methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
    methods.clickButton(createManuelUploadItemLocators.manuelUploadItemButtonServicesModal)
    methods.wait(700)
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
            const productName2 = generateProductName(6);
    methods.fillInput(createManuelUploadItemLocators.productIdTextBoxCMD, productName2)
    methods.wait(200)
        function generateProductDescription(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let randomWord = '';
                    for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomWord += characters.charAt(randomIndex);
                    }
            return randomWord;
                    }
            const productDescription2 = generateProductDescription(6);
    methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxENCMD, productDescription2)
    methods.realClickElement(createManuelUploadItemLocators.productDescriptionTextBoxDECMD)
    methods.clickButton(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.selectCheckbox(productPoolLocators.secondProductPoolItemCheckbox)
    methods.clickButton(productPoolLocators.productPoolAssigneWarningOkeyButton)
    methods.checkTextIsNotPresent("Başka bir müşavire atama yapmadan önce lütfen firmaya göre filtreleme yapınız.", true)
    })    
    it("30.Uyarı öncesinde veya sonrasında firma adı seçimi yapılmadan butonun görünür olmadığı görülür.", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.checkButtonNotDisabled(productPoolLocators.selectCustomsBrokerButton)
    })  
    it("31.Uyarı öncesinde veya sonrasında Firma seçimi yaptıktan sonra Müşavir Seç butonunun görünür olduğu görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.dashboardButton)
    methods.wait(300)
    methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
    methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
    methods.clickButton(createManuelUploadItemLocators.denemeMailAşSelected)
    methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
    methods.clickButton(createManuelUploadItemLocators.manuelUploadItemButtonServicesModal)
    methods.wait(700)
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
            const productName2 = generateProductName(6);
    methods.fillInput(createManuelUploadItemLocators.productIdTextBoxCMD, productName2)
    methods.wait(200)
        function generateProductDescription(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let randomWord = '';
                    for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomWord += characters.charAt(randomIndex);
                    }
            return randomWord;
                    }
            const productDescription2 = generateProductDescription(6);
    methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxENCMD, productDescription2)
    methods.realClickElement(createManuelUploadItemLocators.productDescriptionTextBoxDECMD)
    methods.clickButton(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.selectCheckbox(productPoolLocators.secondProductPoolItemCheckbox)
    methods.checkButtonDisabled(productPoolLocators.selectCustomsBrokerButton)
    })
    it("32.Müşavir Seç Butonu Tıklandığında başarılı bir şekilde modal açıldığı ve seçilen eşya adedinin doğru geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.checkButtonNotDisabled(productPoolLocators.oneItemSelectCustomsBrokerButton)
    })  
    it("33.Müşavir Seç Butonu tıklandıktan sonra açılan modalda Atanmamış ve seçilen firmaya göre müşavirlerin geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.clickButton(productPoolLocators.oneItemSelectCustomsBrokerButton)
    methods.checkTextIsVisible("Atanmamış", true)
    methods.checkTextIsVisible("Test ert", true)
    })  
    it("34.Müşavir Seç Butonu tıklandıktan sonra açılan modalda müşavir seçimi yapılıp Seçili eşyaların tüm servislerini dahil et checkboxı seçilip Ata butonuna tıklanınca başarılı bir şekilde “Uyarı!Seçtiğiniz kalemler test Müşavir’e atanacaktır kabul ediyor musunuz?” uyarısının geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.clickButton(productPoolLocators.oneItemSelectCustomsBrokerButton)
    methods.selectCheckbox(productPoolLocators.includeAllServicesForSelectedItemsCheckbox)
    methods.selectCheckbox(productPoolLocators.testErtSelectCheckbox)
    methods.clickButton(productPoolLocators.assigneButtonInModal)
    methods.checkTextIsVisible("Seçtiğiniz kalemler Test ert'ya atanacaktır kabul ediyor musunuz?", true)
    })
    it("35.Müşavir Seç Butonu tıklandıktan sonra açılan modalda müşavir seçimi olarak Atanmamış seçilip, Seçili eşyaların tüm servislerini dahil et checkboxı seçilip Ata butonuna tıklanınca başarılı bir şekilde “Uyarı!Seçtiğiniz kalemler ATANMAMIŞ olarak değişecektir. Kabul ediyor musunuz?” uyarısının geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.clickButton(productPoolLocators.oneItemSelectCustomsBrokerButton)
    methods.selectCheckbox(productPoolLocators.includeAllServicesForSelectedItemsCheckbox)
    methods.selectCheckbox(productPoolLocators.testErtSelectCheckbox)
    methods.clickButton(productPoolLocators.assigneButtonInModal)
    methods.checkTextIsVisible("Seçtiğiniz kalemler ATANMAMIŞ olarak değişcektir. Kabul ediyor musunuz?", true)
    })
    it("36.Müşavir Seç Butonu Tıklandığında açılan modalda Vazgeç butonu tıklandığı başarılı bir şekilde modalın kapandığı görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.clickButton(productPoolLocators.oneItemSelectCustomsBrokerButton)
    methods.selectCheckbox(productPoolLocators.includeAllServicesForSelectedItemsCheckbox)
    methods.selectCheckbox(productPoolLocators.testErtSelectCheckbox)
    methods.clickButton(productPoolLocators.cancelButtonAssigneCustomerModal)
    methods.checkTextIsNotPresent("Seçtiğiniz kalemler ATANMAMIŞ olarak değişcektir. Kabul ediyor musunuz?", true)
    }) 
    it("37.Firma Adı Alanında firma seçimi yapıldıktan sonra firma eşyalarının başarılı bir şekilde geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.denemeMailAşSelected)
    methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
    methods.clickButton(createManuelUploadItemLocators.manuelUploadItemButtonServicesModal)
    methods.wait(700)
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.clickButton(productPoolLocators.companyNameFilterPlaceholder)
    methods.clickButton(productPoolLocators.musteriTrchCompanyNameFilter)
    methods.wait(500)
    methods.checkTextIsNotPresent(productName , true)
    })
    it("38.Bana Ata Butonu tıklanıp, açılan modalda Tüm Servisleri Dahil Et checkboxı seçilip Ata butonuna tıklanınca gelen “Uyarı!Seçtiğiniz kalemler test Müşavir’e atanacaktır kabul ediyor musunuz?”  uyarısına Ata butonuna tıklandığında başarılı bir şekilde eşyanın tüm hizmetlerinin atandığı görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.clickButton(productPoolLocators.oneItemSelectCustomsBrokerButton)
    methods.selectCheckbox(productPoolLocators.includeAllServicesForSelectedItemsCheckbox)
    methods.selectCheckbox(productPoolLocators.testErtSelectCheckbox)
    methods.clickButton(productPoolLocators.assigneButtonInModal)
    methods.clickButton(productPoolLocators.assigneModalAssigneButton)
    methods.checkTextIsVisible("Atama Yapıldı", true)
    })
    it("39.Bana Ata Butonu tıklanıp, açılan modalda Yalnızca ilgili hizmet checkboxı seçilip Ata butonuna tıklanınca gelen “Uyarı!Seçtiğiniz kalemler test Müşavir’e atanacaktır kabul ediyor musunuz?”  uyarısına Ata butonuna tıklandığında başarılı bir şekilde eşyanın ilgili hizmetinin atandığı görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.clickButton(productPoolLocators.banaAtaMetinLocator)
    methods.clickButton(productPoolLocators.assigneButtonInModal)
    methods.clickButton(productPoolLocators.assigneModalAssigneButton)
    methods.checkTextIsVisible("Atama Yapıldı", true)
    })
    it("40.Müşavir Seç Butonu tıklanıp, açılan modalda müşavir seçildikten sonra Ata butonuna tıklanınca gelen “Uyarı!Seçtiğiniz kalemler test Müşavir’e atanacaktır kabul ediyor musunuz?”  uyarısına Ata butonuna tıklandığında başarılı bir şekilde eşyanın ilgili hizmetinin atandığı görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.clickButton(productPoolLocators.oneItemSelectCustomsBrokerButton)
    methods.selectCheckbox(productPoolLocators.includeAllServicesForSelectedItemsCheckbox)
    methods.selectCheckbox(productPoolLocators.testErtSelectCheckbox)
    methods.clickButton(productPoolLocators.assigneButtonInModal)
    methods.clickButton(productPoolLocators.assigneModalAssigneButton)
    methods.checkTextIsVisible("Atama Yapıldı", true)
    })
    it("41.Müşavir Seç Butonu tıklanıp, açılan modalda müşavir seçildikten ve tüm servisleri dahil et checkboxı seçildikten sonra Ata butonuna tıklanınca gelen “Uyarı!Seçtiğiniz kalemler test Müşavir’e atanacaktır kabul ediyor musunuz?”  uyarısına Ata butonuna tıklandığında başarılı bir şekilde eşyanın tüm hizmetlerinin atandığı görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.productPoolFirstItemCheckbox)
    methods.clickButton(productPoolLocators.oneItemSelectCustomsBrokerButton)
    methods.selectCheckbox(productPoolLocators.includeAllServicesForSelectedItemsCheckbox)
    methods.selectCheckbox(productPoolLocators.testErtSelectCheckbox)
    methods.clickButton(productPoolLocators.assigneButtonInModal)
    methods.clickButton(productPoolLocators.assigneModalAssigneButton)
    methods.checkTextIsVisible("Atama Yapıldı", true)
    })
    it("42.Ülke filtre seçiminin İsviçre ve hizmet filtre seçiminin GTİP Tespiti olması durumunda eşyaların başarılı bir şekilde geldiği görülür.", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountryChRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationHsClsRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    })
    it("43.Ülke filtre seçiminin İsviçre ve hizmet filtre seçiminin Dual-Use Sınıflandırma olması durumunda eşyaların başarılı bir şekilde geldiği görülür.", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountryChRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationExpCntRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    })
    it("44.Ülke filtre seçiminin İsviçre ve hizmet filtre seçiminin Yaptırımlar Sınıflandırma olması durumunda eşyaların başarılı bir şekilde geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountryChRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationSnctnRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    })
    it("45.Ülke filtre seçiminin Almanya ve hizmet filtre seçiminin GTİP Tespiti olması durumunda eşyaların başarılı bir şekilde geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountryDeRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationHsClsRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    }) 
    it("46.Ülke filtre seçiminin Almanya ve hizmet filtre seçiminin Dual-Use Sınıflandırma olması durumunda eşyaların başarılı bir şekilde geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountryChRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationExpCntRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    })
    it("47.Ülke filtre seçiminin Almanya ve hizmet filtre seçiminin SKDM olması durumunda eşyaların başarılı bir şekilde geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountryDeRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationCbamRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    })
    it("48.Ülke filtre seçiminin Avrupa Birliği ve hizmet filtre seçiminin GTİP Tespiti olması durumunda eşyaların başarılı bir şekilde geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountryEuRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationHsClsRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    })
    it("49.Ülke filtre seçiminin Avrupa Birliği ve hizmet filtre seçiminin SKDM olması durumunda eşyaların başarılı bir şekilde geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountryEuRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationCbamRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    })
    it("50.Ülke filtre seçiminin Birleşik Krallık ve hizmet filtre seçiminin GTİP Tespiti olması durumunda eşyaların başarılı bir şekilde geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountryUkRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationHsClsRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    })
    it("51.Ülke filtre seçiminin Türkiye ve hizmet filtre seçiminin GTİP Tespiti olması durumunda eşyaların başarılı bir şekilde geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountryTrRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationHsClsRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    })
    it("52.Ülke filtre seçiminin Türkiye ve hizmet filtre seçiminin Gümrük Mevzuatına Uyumolması durumunda eşyaların başarılı bir şekilde geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountrytrRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationCusCmpRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    })
    it("53.Ülke filtre seçiminin Türkiye  ve hizmet filtre seçiminin İthalat Mevzuatına Uyum olması durumunda eşyaların başarılı bir şekilde geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountryChRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationRglCmpImRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    })
    it("54.Ülke filtre seçiminin Türkiye ve hizmet filtre seçiminin İhracat Mevzuatına Uyum olması durumunda eşyaların başarılı bir şekilde geldiği görüldü mü", () => {
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
    methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
    methods.wait(600)
    methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
    methods.selectCheckbox(productPoolLocators.generalInformationCountryChRadioButton)
    methods.wait(400)
    methods.selectCheckbox(productPoolLocators.generalInformationRglCmpExRadioButton)
    methods.wait(400)
    methods.checkTextIsVisible(productName, true)
    })

})