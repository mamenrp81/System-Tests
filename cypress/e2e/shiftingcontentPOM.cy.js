/// <reference types="cypress" />


import {MainPage}  from "../page-objects/mainpage"
import {} from "../page-objects/"
import {} from "../page-objects/"


describe('Pruebas de login', () => {

    const mainPage = new MainPage()
    const  = new ()
    const s = new ()

    beforeEach(() => {
        mainPage.visitarMainPage()
        mainPage.clicarShiftingContent()
      
    })
    
    it('Comprobamos el nùmero de filas (registros)', () => {
        cy.get('table tbody tr').should('have.length', 5);
      });

})



