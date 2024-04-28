const elem = require('../elements/tela-inicial.elements').ELEMENTS
const concluirItem = require('../elements/tela-inicial.elements').ITENS
const filtroItem = require('../elements/tela-inicial.elements').FILTROS

class telaInicial{

    inputText(dado){ // Método
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    } 

    validarInput(texto){
        cy.get(elem.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include', texto)
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcludeItem)
        .last()
        .click()
    }

    filrarItem(menu){
        cy.get(filtroItem.filtroToDo)
        .contains(menu)
        .and('be.visible')
        .click()
    }

    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }

    validarContador(numero){
        cy.get(filtroItem.contador)
        .find('strong')
        .should('have.text', numero)
    }
}

export default new telaInicial();