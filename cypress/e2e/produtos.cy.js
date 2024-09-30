/// <reference types="cypress"/>

describe('Teste de API em produtos', () => {

    let token
    
    beforeEach(() => {
        cy.token('fulano@qa.com','teste').then(tkn =>{
            token = tkn
        })
    });

    it('Listar produtos - GET', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).should((response)=>{
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        })
    });

    it('Cadastrar produto com sucesso- POST', () => {
        let produto = 'Produto EBAC ' + Math.floor(Math.random() * 100000000000)
        cy.cadastrarProduto(token,produto,10,'Cabo USB C',100)
        .should(response=>{
            expect(response.body.message).equal('Cadastro realizado com sucesso')
            expect(response.status).equal(201)

        })
    });

    it('Deve validar mensagem de produto cadastrado anteriormente', () => {
        cy.cadastrarProduto(token,'Cabo USB 001',10,'Cabo USB C',100)
        .should(response=>{
            expect(response.body.message).equal('Já existe produto com esse nome')
            expect(response.status).equal(400)

        })
    });
}); 