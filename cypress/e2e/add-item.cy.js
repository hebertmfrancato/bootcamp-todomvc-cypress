/**
 * feature -> describe
 * background -> contexto ou beforeEach
 * caso de teste -> it
 */

import telaInicial from '../support/pageObjects/tela-inicial.page'

describe('Adicionar itens na minha lista de ToDo', () => {

    /**
     * DADO - BEFORE - ANTES DO PRIMEIRO TESTE
    * BEFORE EACH - ANTES DE CADA TESTE
     */

    beforeEach(() => {
        cy.visit('/')
    })

    it('Adicionar um item na lista', () => {
        telaInicial.inputText('Maça')
    })

    it('Adicionar mais de um item a lista', () => {
        let todoItens = ['Maça', 'Banana', 'Cenoura']

        todoItens.forEach(function (item) {
            telaInicial.inputText(item)
        })
    });
});