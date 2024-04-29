import telaInicial from '../support/pageObjects/tela-inicial.page'

describe('Regressivo ToDo App', () => {

    context.skip('Validadar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Validar a aréa label de input de dados', () => {
            telaInicial.validarInput('What needs to be done?')
        })
    })

    context.skip('Validadar a adição de itens', () => {
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

    context.skip('Validar a conclusão de itens', () => {
        beforeEach(() => {
            cy.visit('/')
    
            let todoItens = ['Maça', 'Banana', 'Cenoura']
            todoItens.forEach(function (item) {
                telaInicial.inputText(item)
            })
        })

        it('Concluir um item da lista ToDo', () => {
            telaInicial.concluirItem()
            telaInicial.validarContador(2)
        })
    })

    context('Validar o filtro da aplicação', () => {
        beforeEach(() => {
            cy.visit('/')
            let todoItens = ['Maça', 'Banana', 'Cenoura']
    
            todoItens.forEach(function (item) {
                telaInicial.inputText(item)
            }) 

            telaInicial.concluirItem()
        })

        it('Validar a lista de itens ativos', () => {
            telaInicial.filrarItem('Active')
            // telaInicial.validarSizeToDo(2)
        });

        it('Validar a lista de itens concluídos', () => {
            telaInicial.filrarItem('Completed')
            // telaInicial.validarSizeToDo(1)
        });
    })

    context.skip('Validadar a remoção de itens', () => {

    })


})