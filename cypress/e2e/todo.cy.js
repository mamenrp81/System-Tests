describe('Pruebas de la página to do', () => {

    beforeEach(() => {
      cy.visit('http://todomvc-app-for-testing.surge.sh/')
      
    })

    it('Crear una tarea', () => {
        
        cy.get('.new-todo').type('Comprar el pan {enter}')
    
    }) 
    
    // La que hicimos en clase
    it('Marca tarea como completada', () => {
        
        cy.get('.new-todo').type('Comprar el pan {enter}')
        cy.get('.toggle').click()
    
    }) 
    
    it('Desmarcar tarea completada', () => {

        cy.get('.new-todo').type('Comprar el pan {enter}')
        cy.get('.toggle').click()
        cy.get('.toggle').click()        
            
    })
    
    it('Editar una tarea', () => {
        
        cy.get('.new-todo').type('Comprar el pan {enter}')
        cy.get('label').dblclick()
        cy.focused().clear().type('Comprar el pan mañana{enter}')
                           
    }) 
 
    it('Borrar una tarea', () => {

        cy.get('.new-todo').type('Comprar el pan {enter}')
        cy.get('.toggle').click()
        cy.get('.clear-completed').click()
   
    })

    it('Filtrar tareas', () => {
        
        cy.get('.new-todo').type('Comprar el pan {enter} Hacer ejercicios QA {enter} Recoger juguetes {enter} Ir a la farmacia {enter} Hacer comida {enter}')
        cy.get(':nth-child(3) > .view >.toggle').click()
        cy.get(':nth-child(5) > .view >.toggle').click()
        cy.get(':nth-child(3) > a').click()
        cy.get(':nth-child(2) > a').click()
        cy.get(':nth-child(1) > a').click()

    }) 

}) 


  
