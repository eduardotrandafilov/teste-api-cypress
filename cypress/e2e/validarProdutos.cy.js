/// <reference types="cypress"/>
import contrato from '../contratos/produtos.contrato' 

describe('Teste de API em produtos', () => {

    let token
    
    beforeEach(() => {
        cy.token('fulano@qa.com','teste').then(tkn =>{
            token = tkn
        })
    });

    it.only('Deve validar contrato de produtos com sucesso', () => {
        cy.request('produtos').then(response => {
            return contrato.validateAsync(response.body)
        })
    });

    it('Deve listar produtos com sucesso - GET', () => {

    });

    it('Deve cadastrar produto com sucesso- POST', () => {

    });

    it('Deve validar mensagem de produto cadastrado anteriormente - POST', () => {

    });

    it('Deve editar um produto com sucesso - PUT', () => {

    });

    it('Deve deletar um produto com sucesso - DELETE', () => {

    });
}); 