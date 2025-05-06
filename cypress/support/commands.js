import 'cypress-file-upload'
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
// cypress/support/e2e.js veya cypress/support/index.js dosyasında

// Tüm beforeunload olaylarını etkisiz hale getir
Cypress.on('window:before:load', (win) => {
    // beforeunload olayını tamamen devre dışı bırak
    Object.defineProperty(win, 'onbeforeunload', {
      value: null,
      configurable: true
    });
    
    // Ayrıca addEventListener kullanarak eklenen event listener'ları da engelle
    const originalAddEventListener = win.addEventListener;
    win.addEventListener = function(type, listener, ...rest) {
      if (type === 'beforeunload') {
        // beforeunload için eklenen event listener'ları görmezden gel
        return;
      }
      return originalAddEventListener.call(this, type, listener, ...rest);
    };
  });
  
  // Tüm confirm dialoglarını otomatik kabul et
  Cypress.on('window:confirm', () => true);
  Cypress.on('window:before:unload', () => true);