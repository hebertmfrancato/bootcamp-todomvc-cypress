import telaInicial from '../support/pageObjects/tela-inicial.page'

describe('Concluir itens na lista de ToDo', () => {

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

    it('Concluir um item da lista ToDo', () => {
        telaInicial.concluirItem()
    })
});