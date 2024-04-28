import telaInicial from '../support/pageObjects/tela-inicial.page'

describe('Regressivo ToDo App', () => {

    context('Validadar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Validar a aréa label de input de dados', () => {
            telaInicial.validarInput('What needs to be done?')
        })
    })

    context('Validadar a adição de itens', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Adicionar mais de um item a lista', () => {
            let todoItens = ['Maça', 'Banana', 'Cenoura']
    
            todoItens.forEach(function (item) {
                telaInicial.inputText(item)
            })

            telaInicial.validarContador(3)
        });
    })

    context('Validadar a conclusão de itens', () => {

    })

    context('Validadar o filtro da aplicação', () => {

    })

    context('Validadar a remoção de itens', () => {

    })

})