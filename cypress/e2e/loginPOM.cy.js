/// <reference types="cypress" />


import {MainPage}  from "../page-objects/mainpage"
import {LoginPage} from "../page-objects/loginpage"
import {SecureArea} from "../page-objects/securearea"


describe('Pruebas de login', () => {

    const mainPage = new MainPage()
    const loginPage = new LoginPage()
    const secureArea = new SecureArea()

    beforeEach(() => {
        mainPage.visitarMainPage()
        mainPage.clicarFormAuthentication()
      
    })
    
    it('Un usuario válido puede hacer login correctamente', () => {

        loginPage.introducirUsuario('tomsmith')
        loginPage.introducirPassword('SuperSecretPassword!')
        loginPage.clicarBotonLogin()
        secureArea.comprobarMensaje('You logged into a secure area!')
       
  
    })
  
    it('Usuario incorrecto', () => {

        loginPage.introducirUsuario('pepe')
        loginPage.introducirPassword('SuperSecretPassword!')
        loginPage.clicarBotonLogin()
        secureArea.comprobarMensaje('Your username is invalid!')
       
         
  
    })
 

    it('Contraseña incorrecta', () => {
      
        loginPage.introducirUsuario('tomsmith')
        loginPage.introducirPassword('pepe')
        loginPage.clicarBotonLogin()
        secureArea.comprobarMensaje('Your password is invalid!')
           
  
    })


  
  
  })