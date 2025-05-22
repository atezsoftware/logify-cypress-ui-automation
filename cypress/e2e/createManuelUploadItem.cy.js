import methods from "../pages/Methods"
import loginPageLocators from "../fixtures/loginLocators"
import createManuelUploadItemLocators from "../fixtures/createManuelUploadItemLocators"
import "cypress-real-events";
import 'cypress-xpath';
import  random  from 'lodash';
import Name from "faker/lib/name";
const faker = require("faker");

    Cypress.on('Create Manuel Upload Item', (err, runnable) => {
    return false
    })
    describe("Create Manuel Upload Item", () => {
    it("01.Manuel Eşya Yükleme Sayfasını Açmak", () => {
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
        methods.clickButton(createManuelUploadItemLocators.createButtonServicesModal)
        methods.checkTextIsVisible('Eşya Kodu',true)
        methods.checkTextIsVisible('İş Bölümü',true)
        methods.checkTextIsVisible('Eşya Tanımı - TR',true)
        
    })

    it("02.Manuel Eşya Yükleme Sayfasında Kolonların Düzgün Gelmesi", () => {
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
        methods.clickButton(createManuelUploadItemLocators.createButtonServicesModal)
        methods.checkTextIsVisible('Eşya Kodu',true)
        methods.checkTextIsVisible('İş Bölümü',true)
        methods.checkTextIsVisible('Eşya Tanımı - TR',true)
        methods.checkTextIsVisible('Eşya Tanımı - DE',true)
        methods.checkTextIsVisible('Eşya Tanımı - EN',true)
        methods.checkTextIsVisible('Brüt Ağırlık',true)
        methods.checkTextIsVisible('Net Ağırlık',true)
        methods.checkTextIsVisible('Ağırlık Birimi',true)
        methods.checkTextIsVisible('Satış Ölçü Birimi',true)
        methods.checkTextIsVisible('Eşya Ticari Tanım - TR',true)
        methods.checkTextIsVisible('Eşya Ticari Tanım - DE',true)
        methods.checkTextIsVisible('Eşya Ticari Tanım - EN',true)
        methods.checkTextIsVisible('Tedarikçi',true)
        methods.checkTextIsVisible('Üretici',true)
        methods.checkTextIsVisible('Bilinen Tarife Kodu',true)
        methods.checkTextIsVisible('Kullanım Amacı ve Fonksiyonu',true)
        methods.checkTextIsVisible('Mamul Maddesi',true)
        methods.checkTextIsVisible('Yardımcı Doküman',true)
        methods.checkTextIsVisible('Teknik Notlar',true)
        methods.checkTextIsVisible('GTİP',true)
        methods.checkTextIsVisible('Bilinen Dual Use Kodu',true)
        methods.checkTextIsVisible('Model No',true)
        
    })

    it("03.Zorunlu Alanlar Girilirse Gönder Butonu Aktif Olmalı", () => {
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
        methods.checkButtonNotDisabled(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
        
    })

    it("04.Zorunlu Alanlardan En Az Biri Girilmezse Gönder Butonu Pasif Olmalı", () => {
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
        methods.checkButtonDisabled(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
        
    })

    it("05.Dolu Olan Zorunlu Alanlardan En Az Biri Silinirse Gönder Butonu Pasif Olmalı", () => {
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
        methods.clearTextfield(createManuelUploadItemLocators.productIdTextBoxCMD)
        methods.checkButtonNotDisabled(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
        
    })

    it("06.Eşya Kodu Alanının Unic Olması", () => {
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
        methods.clickButton(createManuelUploadItemLocators.addItemCMD)
        methods.fillInput(createManuelUploadItemLocators.productIdTextBoxCMDSecond, productName)
        methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxTRCMDSecond, productDescription)
        methods.checkTextIsVisible('Tekrarlanan eşya kodları bulunmaktadır.',true)
        
    })

    it("07.Var Olan Eşyanın Yazılması", () => {
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
        methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxDECMD, 'test')
        methods.clickElementTrigger(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
        methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
        methods.clickButton(createManuelUploadItemLocators.closeModalCMD)
        methods.fillInput(createManuelUploadItemLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createManuelUploadItemLocators.productDescriptionTextBoxDECMD)
        methods.shouldHaveValue(createManuelUploadItemLocators.productDescriptionTextBoxTRCMD, productDescription)
        
    })

    it("10.Modalda Yapılan Seçime Göre Gelmeli (Ülke/Hizmet seçimleri)", () => {
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
        methods.clickElementTrigger(createManuelUploadItemLocators.createButtonServicesModal)
        methods.clickButton(createManuelUploadItemLocators.servicesButonInCMD)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.chHsCheckBoxServicesModal)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.deHsCheckBoxServicesModal)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.euHsCheckBoxServicesModal)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.ukHsCheckBoxServicesModal)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.trHsCheckBoxServicesModal)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.chDualUseCheckBoxServicesModal)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.deDualUseCheckBoxServicesModal)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.chSanctionsCheckBoxServicesModal)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.deCbamCheckBoxServicesModal)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.euCbamCheckBoxServicesModal)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.trCusCmpCheckBoxServicesModal)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.trRglCmpImCheckBoxServicesModal)
        methods.checkRadioButtonSelected(createManuelUploadItemLocators.trRglCmpExCheckBoxServicesModal)
        
    })

    it("11.Brüt ağırlık girildiğinde Net Ağırlık ve Ağırlık Biriminden en az biri girilmemişse uyarı gelmeli", () => {
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
        methods.fillInput(createManuelUploadItemLocators.grossWeightCMD, '10')
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
        methods.checkTextIsVisible('Lütfen Eşya kodlarının karşısında bulunan alanları giriniz', true)
        
    })

    it("12.Net ağırlık girildiğinde Brüt Ağırlık ve Ağırlık Biriminden en az biri girilmemişse uyarı gelmeli", () => {
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
        methods.fillInput(createManuelUploadItemLocators.netWeightCMD, '10')
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
        methods.checkTextIsVisible('Lütfen Eşya kodlarının karşısında bulunan alanları giriniz', true)
        
    })

    it("13.Ağırlık Birimi girildiğinde Net Ağırlık ve Brüt Biriminden en az biri girilmemişse uyarı gelmeli", () => {
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
        methods.clickButton(createManuelUploadItemLocators.weightUnitOfMeasureCMD)
        methods.clickText('KG')
        methods.checkTextIsVisible('Lütfen Eşya kodlarının karşısında bulunan alanları giriniz', true)
        
    })

    it("14.Eşya Grup Kodu Alanına Giriş Yapılınca Başarıyla Kaydetmesi", () => {
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
        methods.fillInput(createManuelUploadItemLocators.productGroupCodeTextCMD, 'testEşyaGrupKodu')
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
        methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxDECMD, 'test')
        methods.clickElementTrigger(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
        methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
        methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
        methods.shouldHaveText(createManuelUploadItemLocators.productPoolProductGroupCodeFirstText, "testEşyaGrupKodu")
        
    })

    it("15.Eşya Grup Kodu Alanına Giriş Yapılmaması durumunda sistem tarafından grup kodu atanır", () => {
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
        methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxDECMD, 'test')
        methods.clickElementTrigger(createManuelUploadItemLocators.submitButtonInCreateDataScreen)
        methods.clickButton(createManuelUploadItemLocators.submitButtonOnSubmitModalCMD)
        methods.clickButton(createManuelUploadItemLocators.productPoolButtonSubmitModalCMD)
        methods.wait(3000)
        methods.invokeText(createManuelUploadItemLocators.productPoolProductGroupCodeFirstText, "MFT")
        
    })

    it("16.Şablonlar Kontrolü", () => {
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
        methods.clickElementTrigger(createManuelUploadItemLocators.createButtonServicesModal)
        methods.clickButton(createManuelUploadItemLocators.downloadableContentCMD)
        methods.clickButton(createManuelUploadItemLocators.turkceExcelTemplateCMD)
        methods.checkTextIsVisible('TürkçeExcelŞablonu.xlsx İndirildi',true)
        
    })

    it("17.Eşya oluşturma ekranında excelle eşya yükleme '200 kalem altı'", () => {
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
        methods.clickElementTrigger(createManuelUploadItemLocators.createButtonServicesModal)
        const fixtureFile = 'başarılıExcel.xlsx';
        cy.get('[data-test-id="excel-upload-drawer"]').attachFile(fixtureFile);
        methods.wait(10000)
        methods.shouldHaveValue(createManuelUploadItemLocators.productIdTextBoxCMD, 'testOtomasyon-001')
        
    })

    it("18.Eşya oluşturma ekranında excelle eşya yükleme '200 kalem üstü'", () => {
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
        methods.clickElementTrigger(createManuelUploadItemLocators.createButtonServicesModal)
        const fixtureFile = '200üstüexcel.xlsx';
        cy.get('[data-test-id="excel-upload-drawer"]').attachFile(fixtureFile);
        methods.wait(10000)
        methods.checkTextIsVisible('En fazla 200 eşya yükleyebilirsiniz. Lütfen dokümanınızı kontrol edin. Daha fazla sayıda eşya yüklemek için aynı adımları tekrar etmeniz ve yeni yükleme yapmanız gerekmektedir.', true)
        
    })

    it("19.Toplu Doküman Ekleme butonuyla kalemlere doküman ekleme", () => {
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
        methods.clickButton(createManuelUploadItemLocators.addItemCMD)
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
        methods.fillInput(createManuelUploadItemLocators.productIdTextBoxCMDSecond, productName2)
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
        methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxTRCMDSecond, productDescription2)
        methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxDECMD, 'test')
        methods.clickButton(createManuelUploadItemLocators.additionalDocumentsAddCMD)
        const fixtureFile = 'başarılıExcel.xlsx';
        cy.get('[data-test-id="excel-upload-drawer"]').attachFile(fixtureFile);
        //methods.checkTextIsVisible('başarılıExcel.xlsx Doküman tüm kalemlere eklenmiştir', true)
        methods.fillInput(createManuelUploadItemLocators.urlTextBoxModalCMD, 'www.atez.com{enter}')
        methods.checkTextIsVisible('Doküman tüm kalemlere eklenmiştir', true)
        
    })

    it("20.Kalem Bazlı Doküman ve URL Eklenmesi", () => {
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
        methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxDECMD, 'test')
        methods.clickButton(createManuelUploadItemLocators.addDocumentButtonOnLineCMD)
        methods.fillInput(createManuelUploadItemLocators.urlTextBoxModalCMDOnLine, 'www.atez.com{enter}')
        methods.checkTextIsVisible('Doküman tüm kalemlere eklenmiştir', true)
        methods.checkTextIsVisible('www.atez.com', true)
        
    })

    it("24.Üretici Modalına Başarılı Şekilde Üretici Ekleme", () => {
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
        methods.clickElementTrigger(createManuelUploadItemLocators.createButtonServicesModal)
        methods.clickButton(createManuelUploadItemLocators.manufacturerButtonCMD)
        methods.clickButton(createManuelUploadItemLocators.manufacturerNameTextBoxModalCMD)
        methods.clickButton(createManuelUploadItemLocators.addManufacturerButtonModalCMD)
        function generateManuFacturer(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let randomWord = '';
            for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomWord += characters.charAt(randomIndex);
            }
            return randomWord;
            }
            const manufacturerName = generateManuFacturer(6);
        methods.fillInput(createManuelUploadItemLocators.addManufactuerNameModalCMD, manufacturerName)
        methods.clickButton(createManuelUploadItemLocators.saveButtonAddManufaturerModalCMD)
        methods.wait(25000)
        methods.checkTextIsVisible(manufacturerName, true)
        
    })

    it("25.Excel Yükleme ile Tablo Verileri Doldurma", () => {
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
        methods.clickElementTrigger(createManuelUploadItemLocators.createButtonServicesModal)
        const fixtureFile = 'yüklenenExcelAlanKontrolü.xlsx';
        cy.get('[data-test-id="excel-upload-drawer"]').attachFile(fixtureFile);
        methods.wait(10000)
        methods.shouldHaveValue(createManuelUploadItemLocators.productIdTextBoxCMD, 'testOtomasyon-001')
        methods.shouldHaveValue(createManuelUploadItemLocators.productDescriptionTextBoxTRCMD, 'otomasyonExcel')
        methods.shouldHaveValue(createManuelUploadItemLocators.productDescriptionTextBoxDECMD, 'otomasyonExcel')
        methods.shouldHaveValue(createManuelUploadItemLocators.productDescriptionTextBoxENCMD, 'otomasyonExcel')
        methods.shouldHaveValue(createManuelUploadItemLocators.grossWeightCMD, '15')
        methods.shouldHaveValue(createManuelUploadItemLocators.netWeightCMD, '10')
        methods.shouldHaveValue(createManuelUploadItemLocators.commercialDescriptionTRTextBoxCMD, 'otomasyonExcel')
        methods.shouldHaveValue(createManuelUploadItemLocators.commercialDescriptionDETextBoxCMD, 'otomasyonExcel')
        methods.shouldHaveValue(createManuelUploadItemLocators.commercialDescriptionENTextBoxCMD, 'otomasyonExcel')
        methods.shouldHaveValue(createManuelUploadItemLocators.initialHsCodeTextBoxCMD, '1010.10.10.10.10')
        methods.shouldHaveValue(createManuelUploadItemLocators.purposeAndFunctionTextBoxCMD, 'testOtomasyon')
        methods.shouldHaveValue(createManuelUploadItemLocators.rawMaterialsTextBoxCMD, 'testOtomasyon')
        methods.shouldHaveValue(createManuelUploadItemLocators.initialDualUseCodeTextBoxCMD, 'test12')
        methods.scrollElement(createManuelUploadItemLocators.modelNoTextBoxCMD)
        methods.shouldHaveValue(createManuelUploadItemLocators.modelNoTextBoxCMD, 'modelTest')
        methods.clickButton(createManuelUploadItemLocators.addedAdditionalDocumentsLineCMD)
        methods.checkTextIsVisible("www.atez.com", true)
        methods.clickButton(createManuelUploadItemLocators.closeDocumentModalCMD)
        methods.clickButton(createManuelUploadItemLocators.addedHsCodeLineButtonCMD)
        methods.shouldHaveValue(createManuelUploadItemLocators.chHsTextBoxHsModalCMD, '8704.31.30')
        methods.shouldHaveValue(createManuelUploadItemLocators.trHsTextBoxHsModalCMD, '3926.10.00.00.00')
        methods.shouldHaveValue(createManuelUploadItemLocators.deHsTextBoxHsModalCMD, '0102.21.10')
        
    })

    it("26.Tedarikçi Modalına Başarılı Şekilde Üretici Ekleme", () => {
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
        methods.clickElementTrigger(createManuelUploadItemLocators.createButtonServicesModal)
        methods.clickButton(createManuelUploadItemLocators.addSupplierButtonCMD)
        methods.clickButton(createManuelUploadItemLocators.supplierNameClickBox)
        methods.clickButton(createManuelUploadItemLocators.supplierAddSupplierModalCMD)
        function generateSupplier(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let randomWord = '';
            for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomWord += characters.charAt(randomIndex);
            }
            return randomWord;
            }
            const supplierName = generateSupplier(6);
        methods.fillInput(createManuelUploadItemLocators.addSupplierNameTextBoxModalCMD, supplierName)
        methods.clickButton(createManuelUploadItemLocators.saveButtonAddSupplierButtonModalCMD)
        methods.wait(5000)
        methods.checkTextIsVisible(supplierName, true)
        
    })

    it("27.Satır Silme butonu", () => {
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
        methods.clickButton(createManuelUploadItemLocators.deleteLineButtonCMD)
        methods.clickButton(createManuelUploadItemLocators.deleteAllButtonWarningYesButtonCMD)
        methods.shouldNotHaveValue(createManuelUploadItemLocators.productIdTextBoxCMD, productName)
        
    })

    it("28.Tüm satırları silme butonu", () => {
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
        methods.clickButton(createManuelUploadItemLocators.addItemCMD)
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
        methods.fillInput(createManuelUploadItemLocators.productIdTextBoxCMDSecond, productName2)
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
        methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxTRCMDSecond, productDescription2)
        methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxDECMD, 'test')
        methods.clickButton(createManuelUploadItemLocators.deleteAllLineButtonCMD)
        methods.clickButton(createManuelUploadItemLocators.deleteAllButtonWarningYesButtonCMD)
        methods.shouldNotHaveValue(createManuelUploadItemLocators.productIdTextBoxCMD, productName)
        
    })

    it("29.Satır kopyalama butonuyla, alanlar başarıyla kopyalanıyor", () => {
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
        methods.clickButton(createManuelUploadItemLocators.addItemCMD)
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
        methods.fillInput(createManuelUploadItemLocators.productIdTextBoxCMDSecond, productName2)
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
        methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxTRCMDSecond, productDescription2)
        methods.fillInput(createManuelUploadItemLocators.productDescriptionTextBoxDECMD, 'test')
        methods.clickButton(createManuelUploadItemLocators.deleteAllLineButtonCMD)
        methods.clickButton(createManuelUploadItemLocators.deleteAllButtonWarningYesButtonCMD)
        methods.shouldNotHaveValue(createManuelUploadItemLocators.productIdTextBoxCMD, productName)
        
    })

})