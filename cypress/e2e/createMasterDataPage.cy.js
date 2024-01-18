import methods from "../pages/Methods"
import loginPageLocators from "../fixtures/loginLocators"
import createMasterDataLocators from "../fixtures/createMasterDataLocators"
import "cypress-real-events";
import  random  from 'lodash';
import Name from "faker/lib/name";
const faker = require("faker");

    Cypress.on('Create Master Data Page', (err, runnable) => {
    return false
    })
    describe("Create Master Data Page", () => {
    it("01.Create Master Data butonuna tıkladıktan sonra ekranın doğru görüntülenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.checkTextIsVisible('Lütfen oluşturmak istediğiniz İş Emrine ait hizmet ve Ülke kapsamını aşağıdaki tablodan seçin.',true)
        methods.checkTextIsVisible('GTİP Tespiti',true)

    })

    it("02.Create Master Data ekranında Müşavir firma seçilmediği zaman Create Master Data Oluştur butonunun disabled olarak görüntülenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.checkButtonDisabled(createMasterDataLocators.createMasterDataModal)

    })

    it("03.Müşavir Firmanın başarıyla seçilmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.checkButtonNotDisabled(createMasterDataLocators.createMasterDataModal)

    })

    it("04.Seçilen Müşavir Firmanın Silinmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.cancelCustomsFirmModal)
        methods.shouldHaveNotItem(createMasterDataLocators.cancelCustomsFirmModal)

    })

    it("05.Create Master Data ekranında Müşavir Firma seçildikten sonra Master Data Oluştur butonuna tıklanması", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.checkTextIsVisible('Ürün Kodu',true)
        methods.checkTextIsVisible('İş Bölümü',true)
        methods.checkTextIsVisible('Ürün Grupları',true)

    })

    it("06.Zorunlu alanlar doldurulmadığı zaman 'Gönder', 'Kaydet' butonlarının deaktif olması", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.checkButtonDisabled(createMasterDataLocators.sendButtonCMD)
        methods.checkButtonDisabled(createMasterDataLocators.saveButtonCMD)

    })

    it("07.Ülke ve Hizmet seçimlerini Create Master Data ekranında ki Seçimler butonuna tıklayarak başarıyla değiştirildiğini görüntüler", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.servicesButtonCMD)
        methods.clickButton(createMasterDataLocators.gtipTespitCH)
        methods.clickButton(createMasterDataLocators.applyButtonServicesCMD)
        methods.clickButton(createMasterDataLocators.servicesButtonCMD)
        methods.checkRadioButtonSelected(createMasterDataLocators.gtipTespitCH)

    })

    it("08.Ülke ve Hizmet seçimlerini Create Master Data ekranında ki Seçimler butonuna tıklayarak farklı bir hizmet seçeneği seçildikten sonra 'X' butonu ile modal kapatıldıktan sonra seçimin yapılamadığının görüntülenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.servicesButtonCMD)
        methods.clickButton(createMasterDataLocators.gtipTespitCH)
        methods.clickButton(createMasterDataLocators.cancelButtonServicesCMD)
        methods.clickButton(createMasterDataLocators.servicesButtonCMD)
        methods.checkRadioButtonNotSelected(createMasterDataLocators.gtipTespitCH)

    })

    it("09.Create Master Data ekranında Sınıflandırma Emri Başlığı alanının başarıyla doldurulduğunun görüntülenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.fillInput(createMasterDataLocators.workOrderTitleCMD,'TestTitle')
        methods.shouldHaveValue(createMasterDataLocators.workOrderTitleCMD,'TestTitle')

    })

    it("10.Create Master Data ekranında Sınıflandırma Emri Başlığı alanının 40 haneden fazla alfanumerik karakter girilemediğinin kontrolü", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.fillInput(createMasterDataLocators.workOrderTitleCMD,'TestTitleTestTitleTestTitleTestTitleTestT')
        methods.shouldNotHaveValue(createMasterDataLocators.workOrderTitleCMD,'TestTitleTestTitleTestTitleTestTitleTestT')

    })

    it("11.Sınıflandırma Emri Başlığı alanı doldurulduktan sonra 'Okey' butonu tıkladıktan sonra başlığın kaydedilmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.fillInput(createMasterDataLocators.workOrderTitleCMD,'TestTitle')
        methods.clickButton(createMasterDataLocators.okeyWorkOrderTitleCMD)
        methods.shouldHaveValue(createMasterDataLocators.workOrderTitleCMD,'TestTitle')

    })

    it("12.Sınıflandırma Emri Başlığı alanı doldurulduktan sonra 'X' butonu ile text alanından çıkıldıktan sonra alanın boş olmasının kontrolü", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.fillInput(createMasterDataLocators.workOrderTitleCMD,'TestTitle')
        methods.clickButton(createMasterDataLocators.cancelWorkOrderTitleCMD)
        methods.shouldNotHaveValue(createMasterDataLocators.workOrderTitleCMD,'TestTitle')

    })

    it("13.Create Master Data ekranında Genel Belge butonu ile gelen modalda URL eklenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.generalDocumentButtonCMD)
        methods.fillInput(createMasterDataLocators.generalDocumentUrlCMD,'www.atez.com{enter}')
        methods.shouldHaveItem(createMasterDataLocators.atezUrlButton)

    })

    it("14.Create Master Data ekranında Genel Belge butonu ile gelen modalda eklenen URL'in silinmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.generalDocumentButtonCMD)
        methods.fillInput(createMasterDataLocators.generalDocumentUrlCMD,'www.atez.com{enter}')
        methods.mouseHover(createMasterDataLocators.atezUrlButton)
        methods.clickButton(createMasterDataLocators.urlTrashIconCMD)
        methods.shouldHaveNotItem(createMasterDataLocators.atezUrlButton)

    })

    it("15.Create Master Data ekranında Genel Belge butonu ile gelen modalda eklenen URL'e tıklandığı zaman yönlendirme olacağı için uyarı alınması", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.generalDocumentButtonCMD)
        methods.fillInput(createMasterDataLocators.generalDocumentUrlCMD,'www.atez.com{enter}')
        methods.clickButton(createMasterDataLocators.atezUrlButton)
        methods.checkTextIsVisible('Farklı bir adrese yönlendiriliyorsunuz.', true)

    })

    it("16.Create Master Data ekranında Genel Belge butonu ile gelen modalda başarıyla doküman yüklendiğinin görüntülenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.generalDocumentButtonCMD)
        const fixtureFile = 'logifyUploadFile.xlsx';
        cy.get('[data-test-id="dragger-docs"]').attachFile(fixtureFile);
        methods.checkTextIsVisible("logifyUploadFile.xlsx yüklendi.", true)

    })  
    
    it("17.Create Master Data ekranında Genel Belge butonu ile gelen modalda yüklenen dosyanın başarıyla silindiğinin görüntülenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.generalDocumentButtonCMD)
        const fixtureFile = 'logifyUploadFile.xlsx';
        cy.get('[data-test-id="dragger-docs"]').attachFile(fixtureFile);
        methods.clickButton(createMasterDataLocators.documentTrashIconCMD)
        methods.checkTextIsVisible("Doküman başarıyla silindi", true)

    })

    it("18.Create Master Data ekranında Genel Belge butonu ile gelen modalda yüklenen dosyanın başarıyla indirildiğinin görüntülenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.generalDocumentButtonCMD)
        const fixtureFile = 'logifyUploadFile.xlsx';
        cy.get('[data-test-id="dragger-docs"]').attachFile(fixtureFile);
        methods.wait(3000)
        methods.mouseHover(createMasterDataLocators.downloadUploadDocumentCMD)
        methods.checkTextIsVisible("logifyUploadFile.xlsx İndirildi", true)

    })

    it("19.Create Master Data ekranında İndirilebilir İçerik üzerinden örnek Türkçe şablonun başarıyla indirilmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.downloadableContentCMD)
        methods.clickButton(createMasterDataLocators.turkceExcelTemplateCMD)
        methods.checkTextIsVisible('turkce-excel-sablonu.xlsx İndirildi',true)

    })

    it("20.Create Master Data ekranında İndirilebilir İçerik üzerinden örnek İngilizce şablonun başarıyla indirilmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.downloadableContentCMD)
        methods.clickButton(createMasterDataLocators.englishExcelTemplateCMD)
        methods.checkTextIsVisible('english-excel-template.xlsx İndirildi',true)

    })

    it("21.Zorunlu alanlar doldurulduktan sonra kalem silme butonu ile kalemin silinmesinin iptalinin başarıyla görüntülenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.trashIconForProductCMD)
        methods.clickButton(createMasterDataLocators.cancelButtonForTrashProductCMD)
        methods.shouldHaveValue(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.shouldHaveValue(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.shouldHaveText(createMasterDataLocators.productGroupValueCMD, 'MERHABA12546')


    })
    
    it("22.Zorunlu alanlar doldurulduktan sonra kalem silme butonu ile silme işleminin başarıyla tamamlandığının görüntülenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.trashIconForProductCMD)
        methods.clickButton(createMasterDataLocators.deleteButtonForTrashProductCMD)
        methods.shouldNotHaveValue(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.shouldNotHaveValue(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.shouldHaveNotItem(createMasterDataLocators.productGroupValueCMD)


    })

    it("23.Zorunlu alanlar dolduruktan sonra ilgili kalem satırı checkbox ile seçilerek 'SİL' butonu ile silinmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.selectCheckbox(createMasterDataLocators.firstProductCheckbox)
        methods.clickButton(createMasterDataLocators.deleteButtonForProductLine)
        methods.shouldNotHaveValue(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.shouldNotHaveValue(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.shouldHaveNotItem(createMasterDataLocators.productGroupValueCMD)

    })

    it("24.Zorunlu alanlar doldurulduktan sonra 'Tümünü Sil' butonu ile silinmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.deleteAllButtonCMD)
        methods.clickButton(createMasterDataLocators.okButtonDeleteWarningCMD)
        methods.shouldNotHaveValue(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.shouldNotHaveValue(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.shouldHaveNotItem(createMasterDataLocators.productGroupValueCMD)

    })

    it("25.Zorunlu alanlar dolduruktan sonra 'Kalem Ekle' butonunun aktif olması", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.checkButtonNotDisabled(createMasterDataLocators.addLineButtonCMD)

    })

    it("26.Zorunlu alanlar doldurulduktan sonra aktif olan 'Kalem Ekle' butonuyla yeni kalem satırının eklenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.clickButton(createMasterDataLocators.addLineButtonCMD)
        methods.shouldHaveItem(createMasterDataLocators.secondLineCMD)

    })

    it("27.Create Master Data ekranında Doküman Ekle ile gelen modalda URL eklenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.scrollElement(createMasterDataLocators.addDocumentInColumn)
        methods.clickButton(createMasterDataLocators.addDocumentInColumn)
        methods.fillInput(createMasterDataLocators.generalDocumentUrlCMD,'www.atez.com{enter}')
        methods.shouldHaveItem(createMasterDataLocators.atezUrlButton)

    })

    it("28.Create Master Data ekranında Doküman Ekle ile gelen modalda eklenen URL'in silinmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.scrollElement(createMasterDataLocators.addDocumentInColumn)
        methods.clickButton(createMasterDataLocators.addDocumentInColumn)
        methods.fillInput(createMasterDataLocators.generalDocumentUrlCMD,'www.atez.com{enter}')
        //methods.mouseOver(createMasterDataLocators.atezUrlButton)
        methods.mouseHover(createMasterDataLocators.urlTrashIconCMD)
        methods.shouldHaveNotItem(createMasterDataLocators.atezUrlButton)

    })

    it("29.Create Master Data ekranında Doküman Ekle ile gelen modalda eklenen URL'e tıklandığı zaman yönlendirme olacağı için uyarı alınması", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.scrollElement(createMasterDataLocators.addDocumentInColumn)
        methods.clickButton(createMasterDataLocators.addDocumentInColumn)
        methods.fillInput(createMasterDataLocators.generalDocumentUrlCMD,'www.atez.com{enter}')
        methods.clickButton(createMasterDataLocators.atezUrlButton)
        methods.checkTextIsVisible('Farklı bir adrese yönlendiriliyorsunuz.', true)

    })

    it("30.Create Master Data ekranında Doküman Ekle ile gelen modalda başarıyla doküman yüklendiğinin görüntülenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.scrollElement(createMasterDataLocators.addDocumentInColumn)
        methods.clickButton(createMasterDataLocators.addDocumentInColumn)
        const fixtureFile = 'logifyUploadFile.xlsx';
        cy.get('[data-test-id="dragger-docs"]').attachFile(fixtureFile);
        methods.checkTextIsVisible("logifyUploadFile.xlsx yüklendi.", true)

    })

    it("31.Create Master Data ekranında Doküman Ekle ile gelen modalda yüklenen dosyanın başarıyla silindiğinin görüntülenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.scrollElement(createMasterDataLocators.addDocumentInColumn)
        methods.clickButton(createMasterDataLocators.addDocumentInColumn)
        const fixtureFile = 'logifyUploadFile.xlsx';
        cy.get('[data-test-id="dragger-docs"]').attachFile(fixtureFile);
        methods.clickButton(createMasterDataLocators.documentTrashIconCMD)
        methods.checkTextIsVisible("Doküman başarıyla silindi", true)

    })

    it("32.Create Master Data ekranında Doküman Ekle ile gelen modalda yüklenen dosyanın başarıyla indirildiğinin görüntülenmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.scrollElement(createMasterDataLocators.addDocumentInColumn)
        methods.clickButton(createMasterDataLocators.addDocumentInColumn)
        cy.get('[data-test-id="dragger-docs"]').attachFile(fixtureFile);
        methods.wait(3000)
        methods.mouseHover(createMasterDataLocators.downloadUploadDocumentCMD)
        methods.checkTextIsVisible("logifyUploadFile.xlsx İndirildi", true)

    })

    it("33.Zorunlu alanlar girildikten sonra Brüt Ağırlık alanı doldurulduğunda Net Ağırlık alanının doldurulmasının zorunlu olduğunu belirten uyarı alınır", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.fillInput(createMasterDataLocators.grossWeightTextBoxCMD, "10")
        methods.clickButton(createMasterDataLocators.netWeightTextBox)
        methods.clickButton(createMasterDataLocators.submitButtonCMD)
        methods.checkTextIsVisible("Lütfen Net Ağırlık giriniz.", true)
        methods.shouldHaveItem(createMasterDataLocators.workOrderTitleCMD)

    })

    it("34.Zorunlu alanlar girildikten sonra Brüt Ağırlık ve Net Ağırlık alanları doldurulduğunda Ağırlık Birimi alanının zorunlu oludğunu belirten uyarının alınması", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.fillInput(createMasterDataLocators.grossWeightTextBoxCMD, "10")
        methods.fillInput(createMasterDataLocators.netWeightTextBox, "5")
        methods.clickButton(createMasterDataLocators.productDescriptionTextBoxCMD)
        methods.clickButton(createMasterDataLocators.submitButtonCMD)
        methods.checkTextIsVisible("Lütfen Ağırlık Birimi giriniz.", true)
        methods.shouldHaveItem(createMasterDataLocators.workOrderTitleCMD)

    })

    it("35.Zorunlu Alanlar doldurulduktan sonra 'Kaydet' butonu ile taslaklara kaydedilmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
        methods.clickButton(createMasterDataLocators.saveButtonCMD)
        methods.checkTextIsVisible("adlı sınıflandırma emri taslak olarak kayıt edildi", true)
        methods.checkTextIsVisible("Sınıflandırma emrini Taslaklar sayfasından takip edebilirsin.", true)

    })

    it("36.Zorunlu alanları doldurulan kalemin kaydet butonuna tıklandıktan sonra çıkan pop-up üzerinden taslaklara gidilmesi", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
        methods.clickButton(createMasterDataLocators.saveButtonCMD)
        methods.clickButton(createMasterDataLocators.draftsButtonWarningScreenCMD)
        methods.wait(2000)
        methods.checkTextIsVisible("Taslaklar", true)
        methods.shouldHaveItem(createMasterDataLocators.deleteAllButtonDraftPage)

    })

    it("37.Zorunlu alanlar dolduruktan sonra 'Tümünü Sil', 'Kaydet' ve 'Gönder' butonlarının aktif olması", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
        methods.checkButtonNotDisabled(createMasterDataLocators.submitButtonCMD)
        methods.checkButtonNotDisabled(createMasterDataLocators.saveButtonCMD)
        methods.checkButtonNotDisabled(createMasterDataLocators.deleteAllButtonCMD)

    })

    it("38.Zorunlu alanlar doldurulduktan sonra 'Gönder' butonuna tıklandıktan sonra 'İptal' butonuna tıklanması", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
        methods.clickButton(createMasterDataLocators.submitButtonCMD)
        methods.clickButton(createMasterDataLocators.cancelButtonSubmitWarningScreenCMD)
        methods.shouldHaveItem(createMasterDataLocators.productIdTextBoxCMD)
        methods.shouldHaveItem(createMasterDataLocators.productDescriptionTextBoxCMD)

    })

    it("39.Zorunlu alanlar doldurulduktan sonra 'Gönder' butonuna tıklandıktan sonra 'Gönder' butonuna tıklanması", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
        methods.clickButton(createMasterDataLocators.submitButtonCMD)
        methods.clickButton(createMasterDataLocators.submitButtonWarningScreenCMD)
        methods.wait(3000)
        methods.checkTextIsVisible('Gönderilen İş Emirleri', true)

    })

    it("40.Zorunlu alanlar doldurulduktan sonra 'Dashboard' butonuna tıklandıktan sonra 'İptal' butonuna tıklanması", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
        methods.clickButton(createMasterDataLocators.dashboardButtonHeader)
        methods.clickButton(createMasterDataLocators.cancelButtonBackCMD)
        methods.shouldHaveItem(createMasterDataLocators.productIdTextBoxCMD)

    })

    it("41.Zorunlu alanlar doldurulduktan sonra 'Dashboard' butonuna tıklandıktan sonra 'Devam Et' butonuna tıklanması", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
        methods.clickButton(createMasterDataLocators.dashboardButtonHeader)
        methods.clickButton(createMasterDataLocators.continueButtonBackCMD)
        methods.shouldHaveNotItem(createMasterDataLocators.productIdTextBoxCMD)
        methods.shouldHaveItem(createMasterDataLocators.createMasterDataDashboard)

    })

    it("42.Zorunlu alanlar doldurulduktan sonra 'Dashboard' butonuna tıklandıktan sonra 'Devam Et' butonuna tıklanması", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        const fixtureFile = 'alanKontrolü.xlsx';
        cy.get('[data-test-id="button-upload-excel"]').attachFile(fixtureFile);
        methods.wait(3000)
        methods.shouldHaveValue(createMasterDataLocators.productIdTextBoxCMD, 'textKontrol')
        methods.shouldHaveValue(createMasterDataLocators.productDescriptionTextBoxCMD, 'Elma')
    })

    it.only("43.Tüm alanlar doldurultuktan sonra kalem kopyalama butonu ile kopyalandıktan sonra 'Ürün Kodu' alanı dışında tüm alanların doğru kopyalandığı görüntülenir", () => {
        methods.visit()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false })
        methods.clickButton(loginPageLocators.loginUsername)
        methods.fillInput(loginPageLocators.loginUsername,'ali.dede@alidede.com')
        methods.fillInput(loginPageLocators.loginPassword,'qwer.123')
        methods.clickButton(loginPageLocators.loginButton)
        methods.clickButton(createMasterDataLocators.createMasterDataDashboard)
        methods.wait(3000)
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
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
        methods.fillInput(createMasterDataLocators.productIdTextBoxCMD, productName)
        methods.clickButton(createMasterDataLocators.businessDivisionCMD)
        methods.clickButton(createMasterDataLocators.atezBusinessDivisionCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.productGroupCMD)
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
        methods.fillInput(createMasterDataLocators.productDescriptionTextBoxCMD, productDescription)
        methods.clickButton(createMasterDataLocators.merhabaProductGroup)
        methods.wait(1000)
        methods.fillInput(createMasterDataLocators.productDescriptionTrTextBoxCMD, 'textTR')
        methods.fillInput(createMasterDataLocators.productDescriptionDeTextBoxCMD, 'textDE')
        methods.fillInput(createMasterDataLocators.productDescriptionEnTextBoxCMD, 'textEN')
        methods.fillInput(createMasterDataLocators.grossWeightTextBoxCMD, '10')
        methods.scrollElement(createMasterDataLocators.netWeightTextBoxCMD)
        methods.fillInput(createMasterDataLocators.netWeightTextBoxCMD, '7')
        methods.scrollElement(createMasterDataLocators.weightUnitOfMeasureSelectBoxCMD)
        methods.clickButton(createMasterDataLocators.weightUnitOfMeasureSelectBoxCMD)
        methods.clickButton(createMasterDataLocators.weightUnitKgDropdownCMD)
        methods.scrollElement(createMasterDataLocators.salesUnitOfMeasureSelectBoxCMD)
        methods.clickButton(createMasterDataLocators.salesUnitOfMeasureSelectBoxCMD)
        methods.clickButton(createMasterDataLocators.salesUnitKgDropdownCMD)
        methods.scrollElement(createMasterDataLocators.commercialDescriptionTextBoxCMD)
        methods.fillInput(createMasterDataLocators.commercialDescriptionTextBoxCMD, 'tanım1')
        methods.scrollElement(createMasterDataLocators.commercialDescriptionTrTextBoxCMD)
        methods.fillInput(createMasterDataLocators.commercialDescriptionTrTextBoxCMD, 'tanımTR')
        methods.scrollElement(createMasterDataLocators.commercialDescriptionDeTextBoxCMD)
        methods.fillInput(createMasterDataLocators.commercialDescriptionDeTextBoxCMD, 'tanımDE')
        methods.scrollElement(createMasterDataLocators.commercialDescriptionEnTextBoxCMD)
        methods.fillInput(createMasterDataLocators.commercialDescriptionEnTextBoxCMD, 'tanımEN')
        methods.scrollElement(createMasterDataLocators.addSupplierButtonCMD)
        methods.clickButton(createMasterDataLocators.addSupplierButtonCMD)
        methods.clickButton(createMasterDataLocators.supplierTextBoxCMD)
        methods.clickButton(createMasterDataLocators.supplierUsalarCMD)
        methods.clickButton(createMasterDataLocators.supplierCodeTextBoxCMD)
        methods.wait(2000)
        methods.clickButton(createMasterDataLocators.cancelButtonSupplierScreenCMD)
        methods.wait(1000)
        methods.clickButton(createMasterDataLocators.saveButtonSupplierCMD)
        methods.scrollElement(createMasterDataLocators.previousCommodityCodeTextBoxCMD)
        methods.fillInput(createMasterDataLocators.previousCommodityCodeTextBoxCMD, '000.00.00.00.00')
        methods.scrollElement(createMasterDataLocators.purposeandFunctionTextBox)
        methods.fillInput(createMasterDataLocators.purposeandFunctionTextBox, 'textAmaç')
        methods.scrollElement(createMasterDataLocators.rawMaterialsTextBoxCMD)
        methods.fillInput(createMasterDataLocators.rawMaterialsTextBoxCMD, 'textMateryal')
        methods.scrollElement(createMasterDataLocators.technicalRemarksTextBoxCMD)
        methods.fillInput(createMasterDataLocators.technicalRemarksTextBoxCMD, 'textTeknik')
        methods.scrollElement(createMasterDataLocators.addCommodityCodeButtonCMD)
        methods.clickButton(createMasterDataLocators.addCommodityCodeButtonCMD)
        methods.clickButton(createMasterDataLocators.selectCountryCommodityScreenCMD)
        methods.clickButton(createMasterDataLocators.selectCountryDropdownTrCMD)
        methods.fillInput(createMasterDataLocators.commodityCodeTextBoxAddScreenCMD, '0104.10.10.00.00')
        //cancel butona datatestid
        methods.clickButton(createMasterDataLocators.copyLineButtonCMD)

    })

    })