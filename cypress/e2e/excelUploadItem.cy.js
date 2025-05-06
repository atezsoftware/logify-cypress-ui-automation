import methods from "../pages/Methods"
import loginPageLocators from "../fixtures/loginLocators"
import createManuelUploadItemLocators from "../fixtures/createManuelUploadItemLocators"
import excelUploadItemLocator from "../fixtures/excelUploadItemLocator";
import "cypress-real-events";
import 'cypress-xpath';
import  random  from 'lodash';
import Name from "faker/lib/name";
const faker = require("faker");

    Cypress.on('Excel Upload Item', (err, runnable) => {
    return false
    })
    describe("Excel Upload Item", () => {
        it("01.Manuel Eşya Yükleme Sayfasını Açmak", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
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

        it("02.Excel Şablonlarının İndirilmesi TR ", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            methods.clickButton(excelUploadItemLocator.downloadExcelTemplateButtonServicesModal)
            methods.clickText("TürkçeExcelŞablonu.xlsx")
            methods.checkTextIsVisible('TürkçeExcelŞablonu.xlsx İndirildi',true)
            
        })
        it("03.Excel Şablonlarının İndirilmesi EN ", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            methods.clickButton(excelUploadItemLocator.downloadExcelTemplateButtonServicesModal)
            methods.clickText("EnglishExcelTemplate.xlsx")
            methods.checkTextIsVisible('EnglishExcelTemplate.xlsx İndirildi',true)
            
        })
        it("04.Article ID Alanı Zorunluluk", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'idZorunluKontrol.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Eşya Kodu - Eşya kodu zorunludur, lütfen tüm ürünler için eşya kodunu giriniz.',true)

        })
        it("05.Eşya Açıklaması Alanı zorunluluğu", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'açıklamaAlanıZorunlu.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Eşya Açıklaması - Lütfen tüm ürünler için eşya açıklaması giriniz',true)

        })
        it("06.Tüm eşyalar için Eşya Kodu Alanının unic olduğu görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'aynıEşyaKodu.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Başarılı Yüklenen Eşya Adedi:',true)
            methods.checkTextIsVisible('Eşya Kodu - Eşya kodu zorunludur, lütfen tüm ürünler için eşya kodunu giriniz.',true)

        })
        it("07.Eksik veya hatalı Brüt Ağırlık girilmesi durumunda “Brüt ağırlık alanı hatalı.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'brütAğırlıkHata.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Brüt Ağırlık - Brüt ağırlık alanı hatalı.',true)

        })
        it("08.Eksik veya hatalı Net Ağırlık girilmesi durumunda “Net ağırlık alanı hatalı.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'netAğırlıkHatalı.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Net Ağırlık - Net ağırlık alanı hatalı.',true)

        })
        it("09.Eksik veya hatalı Ağırlık Birini girilmesi durumunda “Firmaya ait Ağırlık Birimlerinden birini seçiniz.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'ağırlıkBirimiHatalı.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Ağırlık Birimi - Firmaya ait Ağırlık Birimlerinden birini seçiniz.',true)

        })
        it("10.Yüklenen excelde eşyanın GTİP’i mevcutsa; eşyanın GTİP tespiti servisi Tamamlandı olmalı", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'ağırlıkBirimiHatalı.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Ağırlık Birimi - Firmaya ait Ağırlık Birimlerinden birini seçiniz.',true)

        })
        it("11.Geçersiz veya eksik  TR GTİP girilmesi durumunda “Geçersiz GTİP girdiniz.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hatalıTRGTİP.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Tarife-TR - Eşya Tarifesi TR alanı hatalı',true)

        })
        it("12.Geçersiz veya eksik  CH GTİP girilmesi durumunda “Geçersiz GTİP girdiniz.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hatalıCHGTİP.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Tarife-CH - Eşya Tarifesi CH alanı hatalı',true)

        })
        it("13.Geçersiz veya eksik  CH Stat Kod GTİP girilmesi durumunda “Geçersiz GTİP girdiniz.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hatalıCHStatKod.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('İthalat Tarife Ek Kod - CH İthalat Tarife Ek Kod alanı hatalı',true)
            methods.checkTextIsVisible('İhracat Tarife Ek Kod - CH İhracat Tarife Ek Kod alanı hatalı',true)

        })
        it("14.Geçersiz veya eksik  DE 8’li GTİP girilmesi durumunda “Geçersiz GTİP girdiniz.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hataDE8liGTİP.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Eşya Tarifesi TARIC İhracat - Eşya Tarifesi DE alanı hatalı',true)

        })
        it("15.Geçersiz veya eksik  DE 10’lu GTİP girilmesi durumunda “Geçersiz GTİP girdiniz.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hatalıDE10luGTİP.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Eşya Tarifesi TARIC İthalat - Hatalı alan',true)

        })
        it("16.Geçersiz veya eksik  DE 11’li GTİP girilmesi durumunda “Geçersiz GTİP girdiniz.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hatalıDE11liKod.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Sistemde sorun var lütfen daha sonra deneyin',true) 

        })
        it("17.Geçersiz veya eksik  DE 8’li GTİP girilmesi durumunda “Geçersiz GTİP girdiniz.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hataDE8liGTİP.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Eşya Tarifesi TARIC İhracat - Eşya Tarifesi DE alanı hatalı',true)

        })
        it("18.Geçersiz veya eksik UK GTİP girilmesi durumunda “Geçersiz GTİP girdiniz.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hatalıUK8liGTİP.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Eşya Tarifesi TARIC İhracat - Eşya Tarifesi DE alanı hatalı',true)

        })
        it("19.	Geçersiz veya eksik  UK 10’lu GTİP girilmesi durumunda “Geçersiz GTİP girdiniz.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hatalıUK10luGTİP.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Eşya Tarifesi TARIC İhracat - Eşya Tarifesi DE alanı hatalı',true)

        })
        it("20.Geçersiz veya eksik  EU 8’li GTİP girilmesi durumunda “Geçersiz GTİP girdiniz.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hatalıEU8liGTİP.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Commodity Code TARIC Export-EU - Gtip sistemde bulunamadı',true)

        })
        it("21.Geçersiz veya eksik  EU 10’lu GTİP girilmesi durumunda “Geçersiz GTİP girdiniz.” uyarısı geldiği görülür", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hatalıEU10luGTİP.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Commodity Code TARIC Import-EU - Gtip sistemde bulunamadı',true)

        })
        it("22.Yüklenen excelde hatalı İş Bölümü bilgisi olduğu zaman “Firmaya ait İş Bölümlerinden birini seçiniz.” uyarısı verilmesi", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hatalıİşBölümü.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('İş Bölümü - Firmaya ait İş Bölümlerinden birini seçiniz.',true)

        })
        it("23.Yüklenen excelde hatalı Satış Ölçü Birimi bilgisi olduğu zaman “Firmaya ait Satış Ölçü Birimlerinden birini seçiniz.” uyarısı verilmesi", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hatalıSatışÖlçüBirimi.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Satış Ölçü Birimi - Firmaya ait Satış Ölçü Birimlerinden birini seçiniz.',true)

        })
        it("24.Yüklenen excelde hatalı Eşya Grubu bilgisi olduğu zaman “Firmaya ait Eşya Gruplarından birini seçiniz.” uyarısı verilmesi", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = 'hatalıEU10luGTİP.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Commodity Code TARIC Import-EU - Gtip sistemde bulunamadı',true)

        })
        it("25.1000 eşya ve üzerin olan excel yüklenmesi halinde gelen bilgilendirme mesajının görüntülenmesi", () => {
            methods.visit()
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false })
            methods.clickButton(loginPageLocators.loginUsername)
            methods.fillInput(loginPageLocators.loginUsername,'musavir.trch@outlook.com')
            methods.fillInput(loginPageLocators.loginPassword,'123')
            methods.clickButton(loginPageLocators.loginButton)
            methods.clickButton(loginPageLocators.globalButton)
            methods.clickButton(loginPageLocators.turkishLanguageButton)
            methods.clickButton(createManuelUploadItemLocators.uploadItemButtonDashboard)
            methods.clickButton(createManuelUploadItemLocators.pleaseSelectCompany)
            methods.clickButton(createManuelUploadItemLocators.musteriTrchSelected)
            methods.clickButton(createManuelUploadItemLocators.uploadItemSelectFirmModalNextButton)
            const fixtureFile = '1000lieşya.xlsx';
                    cy.get('[data-test-id="create-master-data-upload"]').attachFile(fixtureFile);
                    methods.wait(2000)
            methods.clickButton(excelUploadItemLocator.uploadButtonServiceModal)
            methods.wait(1000)
            methods.checkTextIsVisible('Eşyalarınız yükleniyor, bu biraz zaman alacak!',true)
            methods.checkTextIsVisible('Yükleme devam ederken diğer işlemlerinize devam edebilirsiniz.',true)

        })

})