/**
 * feature -> describe
 * background -> contexto ou beforeEach
 * caso de teste -> it
 */
import telaInicial from '../support/pageObjects/tela-inicial.page'

describe('Acessar a pagina do todoMVC', () => { // describe é a nossa featrue //
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/javascript-es6/dist/')
    telaInicial.inputText()
  })
})