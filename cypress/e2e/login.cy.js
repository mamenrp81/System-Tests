describe('Pruebas de login', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
  })
  
  it('Un usuario válido puede hacer login correctamente', () => {
    
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains('You logged into a secure area!')

  })

  it('Usuario incorrecto', () => {
    
    cy.get('#username').type('pepe')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains('Your username is invalid!')

  })

  it('Usuario en blanco', () => {
   
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains('Your username is invalid!')

  })


})