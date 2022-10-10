
const { describe, it } = require("mocha");


describe('alura busca curso', () => {

    beforeEach(() => {
        cy.visit('http://www.alura.com.br');
    })
    
    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java')
        cy.get('.header-barraBusca-form-submit')

    })
})