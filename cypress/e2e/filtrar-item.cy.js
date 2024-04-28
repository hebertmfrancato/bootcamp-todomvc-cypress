import telaInicial from '../support/pageObjects/tela-inicial.page'

describe('Validar os filtros da aplicação após adição de itens', () => {

    /**
     * DADO - BEFORE - ANTES DO PRIMEIRO TESTE
     * BEFORE EACH - ANTES DE CADA TESTE
     */

    beforeEach(() => {
        // Dado que estou na tela
        cy.visit('/')

        // Quando adiciono itens
        let todoItens = ['Maça', 'Banana', 'Cenoura']

        todoItens.forEach(function (item) {
            telaInicial.inputText(item)
        // E tenho pelo menos um deles concluído    
            telaInicial.concluirItem()
        }) 
    })

    /**
     * Essas são as etapas do nosso teste que precisamos fazer:
     * clicar no filtro
     * o item ser exibido
     * e o contador deve bater com a informação
     */
    
    // Então filtro itens ativos
    it.only('Filtrar itens ativos', () => {
        telaInicial.filrarItem('Active')
    })

    // Então filtro itens concluídos
    it('Filtrar itens concluídos', () => {
        
    })
});