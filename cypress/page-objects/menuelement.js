/// <reference types="cypress" />

export class MenuElement {

    comprobarElement(number){
        
        cy.get('#content .example ul li').should('have.length', number)

  }
  
}


