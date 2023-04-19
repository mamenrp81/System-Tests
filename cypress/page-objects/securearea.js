/// <reference types="cypress" />

export class SecureArea {

    comprobarMensaje(text) {

        cy.get('#flash').contains(text)

    }

      
}

