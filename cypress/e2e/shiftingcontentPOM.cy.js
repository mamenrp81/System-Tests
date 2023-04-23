/// <reference types="cypress" />


import {MainPage}  from "../page-objects/mainpage"
import {ShiftingContent} from "../page-objects/shiftingcontent"
import {MenuElement} from "../page-objects/menuelement"


describe('Elementos de una tabla', () => {

    const mainPage = new MainPage()
    const shiftingContent = new ShiftingContent()
    const menuElement = new MenuElement()

    beforeEach(() => {
        mainPage.visitarMainPage()
        mainPage.clicarShiftingContent()
        shiftingContent.clicarEjemplo1()
    })
    
    it('Comprobamos los elementos de la tabla del ejemplo 1', () => {      
        menuElement.comprobarElement('5')        
    })

})



