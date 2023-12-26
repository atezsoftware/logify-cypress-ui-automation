import methods from "../pages/Methods"
import loginPageLocators from "../fixtures/loginLocators"
import createMasterDataLocators from "../fixtures/createMasterDataLocators"
import "cypress-real-events";
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.servicesButtonCMD)
        methods.clickButton(createMasterDataLocators.gtipTespitCH)
        methods.clickButton(createMasterDataLocators.dcsltdModalDropdown)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.servicesButtonCMD)
        methods.clickButton(createMasterDataLocators.gtipTespitCH)
        methods.clickButton(createMasterDataLocators.dcsltdModalDropdown)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.generalDocumentButtonCMD)
        const fixtureFile = 'logifyUploadFile.xlsx';
        cy.get('[data-test-id="dragger-docs"]').attachFile(fixtureFile);
        methods.checkTextIsVisible("logifyUploadFile.xlsx yüklendi.", true)
          


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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
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
        methods.clickButton(createMasterDataLocators.gtipTespitiTR)
        methods.clickButton(createMasterDataLocators.dcsltdModal)
        methods.clickButton(createMasterDataLocators.createMasterDataModal)
        methods.clickButton(createMasterDataLocators.downloadableContentCMD)
        methods.clickButton(createMasterDataLocators.englishExcelTemplateCMD)
        methods.checkTextIsVisible('english-excel-template.xlsx İndirildi',true)

    })

    })