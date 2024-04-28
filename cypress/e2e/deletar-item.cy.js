import telaInicial from '../support/pageObjects/tela-inicial.page'

describe('Deletar itens da lista de ToDo', () => {

    /**
     * DADO - BEFORE - ANTES DO PRIMEIRO TESTE
    * BEFORE EACH - ANTES DE CADA TESTE
     */

    beforeEach(() => {
        cy.visit('/')
        let todoItens = ['Maça', 'Banana', 'Cenoura']

        todoItens.forEach(function (item) {
            telaInicial.inputText(item)
        })
    })

    it('Deletar um item da lista ToDo', () => {
        telaInicial.deletarItem()
    })
});