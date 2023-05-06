
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Test Login
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Login con campo vacio
describe('Inicio de sesión con campo vacio', () => {
    it('Debe generar alerta al iniciar sesión con credenciales vacias', () => {
      cy.login(' ', ' ')
      cy.get('p.main-error').should('contain','Please fill out the form to sign in.')// Verifica que el usuario ha iniciado sesión correctamente
    })
  })
  
//Login correcto 
describe('Inicio de sesión', () => {
    it('Debe permitir iniciar sesión con credenciales válidas', () => {
      cy.login('e.tijaro@uniandes.edu.co', 'Contrasena_123')
      cy.url().should('include', '/#/site') // Verifica que el usuario ha iniciado sesión correctamente
    })
  })







//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//End of smart monkey
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------