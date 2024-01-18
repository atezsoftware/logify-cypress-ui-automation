require('cypress-xpath');
import "cypress-real-events";
import  random  from 'lodash';
import { faker } from 'faker';
import Faker from 'faker/lib';

class Methods{

    visit(url = "/") {
      cy.visit(url);
    }
    findElement(locator) {
      const element = locator.startsWith("/") || locator.startsWith('(') ? cy.xpath(locator) : cy.get(locator);
      element.invoke('attr', 'style', 'border: 2px solid red; box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.5);');
      return element;
    }
    fillInput(locators,text, delay = 0){
        return this.findElement(locators).first().clear().type(text, { delay: delay })
    }
    clickButton(locators,afterWait = 0,){
        
        return this.findElement(locators).click({force: true}).wait(afterWait)
    }
    clickText(text) {
      cy.contains(text).click();
    }
    realClickElement(locator) {
      this.findElement(locator).realClick({});
    }
    clickElementTrigger(locator){
      return cy.xpath(locator).trigger('click')
    }
    mouseHover(locator){
      return cy.xpath(locator).eq(0).trigger('mouseover',{multiple:true}).click()
    }
    mouseOver(locator){
      return cy.xpath(locator).eq(0).trigger('mouseover',{multiple:true})
    }
    checkRadioButtonSelected(locator,text){
      return cy.xpath(locator).should('be.checked');
    }
    checkRadioButtonNotSelected(locator,text){
      return cy.xpath(locator).should('not.be.checked');
    }
    checkTextIsVisible(text, visibility = true) {
      cy.contains('body', text).should(visibility ? 'be.visible' : 'not.exist');
    }
    selectCheckbox(locator) {
      return this.findElement(locator).check({force: true});
    }
    selectItem(locators,text){
        return cy.xpath(locators).select(text)
    }
    checkButtonDisabled(locators){
      return cy.xpath(locators).should('have.attr', 'disabled');
    }
    checkButtonNotDisabled(locators){
      return cy.xpath(locators).should('not.have.attr', 'disabled');
    }
    shouldHaveText(locators,text){
      this.wait(1000)
      return cy.xpath(locators).should('have.text', text)
    }
    shouldNotHaveValue(locators,text){
      this.wait(1000)
      return cy.xpath(locators).should('not.have.value', text)
    }
    shouldHaveValue(locators,text){
      this.wait(1000)
      return cy.xpath(locators).should('have.value', text)
    }
    shouldHaveNotText(locators,text){
      return cy.xpath(locators).should('not.have.text', text)
    }
    shouldHaveItem(locators){
      return cy.xpath(locators).should('exist')
    }
    shouldHaveNotItem(locators){
      this.wait(1000)
      return cy.xpath(locators).should('not.exist')
    }
    clearTextfield(locators){
      return cy.xpath(locators).clear()
    }
    shouldHaveNotItemOnField(fieldLocator, locator){
      this.wait(1000)
      return cy.get(fieldLocator).find(locator).should('not.exist');
    }
    shouldHaveContain(locators,text){
      return cy.xpath(locators).contains(text)
    }
    shouldHaveNotContain(locators,text){
      return cy.xpath(locators).should('not.contain.text',text)
    }
    scrollElement(locators){
      return cy.xpath(locators).scrollIntoView() 
    }
    randomEmail(){
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let email = '';
      for (let i = 0; i < 5; i++) {
        email += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      email += '@gmail.com';
      return email;
    }
    randomPhoneNumber(){
      const characters = '123456789';
      let number = '';
      for (let i = 0; i < 9; i++) {
        number += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      let mobileCode = '+966'
      return mobileCode + number;
    }
    fillRandomNumber(locator) {
      const number = this.randomPhoneNumber();
      return this.fillInput(locator, number);
    }
    fillRandomEmail(locator) {
      const email = this.randomEmail();
      return this.fillInput(locator, email);
    }
    randomName(){
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      let name = '';
      for (let i = 0; i < 5; i++) {
        name += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return name;
    }
    randomLastName(){
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      let lastname = '';
      for (let i = 0; i < 5; i++) {
        lastname += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return lastname;
    }
    fillRandomName(locator){
      const name = this.randomName();
      return this.fillInput(locator, name);
    }
    fillRandomLastName(locator){
      const lastname = this.randomLastName();
      return this.fillInput(locator, lastname);
    }
    shouldPageExistItem(locators){
      return cy.xpath(locators).should('exist');
    }
    selectDropDown(locators,text){
      cy.get(locators).select(text).invoke('show')
      return this
    }
    clickDropdown(locators,text){
      cy.get(locators).invoke('show').click()
      cy.contains(text).click()
      return this
    }
    wait(time){
      return cy.wait(time)
    }
    reloadPage(){
      return cy.reload(true)
    }
    goBackPage(){
      return cy.go('back')
    }    
    newTab(locators){
      return cy.xpath(locators).invoke("removeAttr", "target").click({force: true});
    }
    shouldUrl(url){
      return cy.url().should('include', url);
    }
    clickOptionText(locators,text){
      const gender = text;
      return cy.xpath(locators).filter(`:contains("${gender}")`).first().click();
    }             
    fillInputPlaceholder(textboxName,text){
      const placeholderValue = textboxName;
      cy.get(`[placeholder='${placeholderValue}']`).eq(0).type(text); 
    }
    saveElementValue(locators, variableName, removeSpaces) {
      cy.xpath(locators).invoke('text').then((text) => {
      const removedBlankText = removeSpaces ? text.replace(/\s+/g, '') : text;
      cy.wrap(removedBlankText).as(variableName);
      cy.log(`Element value "${removedBlankText}" is saved as "${variableName}".`);
    });
  }

    checkEquality(firstVariable, secondVariable, shouldBeEqual = true) {
      cy.get('@' + firstVariable).then((firstValue) => {
        cy.get('@' + secondVariable).then((secondValue) => {
          const areEqual = firstValue === secondValue;
          
          if (areEqual === shouldBeEqual) {
            cy.log(`"${firstVariable}" and "${secondVariable}" are ${shouldBeEqual ? "equal" : "not equal"}.`);
          } else {
            cy.log(`"${firstVariable}" and "${secondVariable}" are ${shouldBeEqual ? "not equal" : "equal"}.`);
          }
    
          if (shouldBeEqual) {
            expect(firstValue).to.eq(secondValue);
          } else {
            expect(firstValue).not.to.eq(secondValue);
          }
        });
      });
    }

    checkContain(firstVariable, secondVariable, shouldBeContained = true) {
      cy.get('@' + firstVariable).then((firstValue) => {
        cy.get('@' + secondVariable).then((secondValue) => {
          const contains = firstValue.includes(secondValue);
          
          if (contains === shouldBeContained) {
            cy.log(`"${firstVariable}" ${shouldBeContained ? "contains" : "does not contain"} "${secondVariable}".`);
          } else {
            cy.log(`"${firstVariable}" ${shouldBeContained ? "does not contain" : "contains"} "${secondVariable}".`);
          }
    
          if (shouldBeContained) {
            expect(firstValue).to.include(secondValue);
          } else {
            expect(firstValue).not.to.include(secondValue);
          }
        });
      });
    }

    shouldContainVariable(locator, variableName) {
      cy.xpath(locator).invoke('text').then((text) => {
        cy.get('@' + variableName).then((savedText) => {
          const isContained = savedText.includes(text);
          
          expect(isContained).to.be.true;
          
          cy.log(`Element text "${savedText}" contains "${text}".`);
        });
      });
    }

}

export default new Methods();