/// <reference types="cypress"/>

describe('Teste de API em produtos', () => {
    it('Listar produtos - GET', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).should((response)=>{
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        })
    });

    it('Cadastrar produto - POST', () => {
        //TODO: criar token dinamicamente
        let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzI3NzA5MzU4LCJleHAiOjE3Mjc3MDk5NTh9.Kl60ItYYW2qNja97HUfOrjSZjNdKmsPVh8wFvHxKKgo"
        cy.request({
            method: 'POST',
            url: 'produtos',
            headers:{authorization: token},
            body:{
                //TODO: criar produto dinamicamente
                "nome": "Cabo usb - 001",
                "preco": 15,
                "descricao": "Cabo usb tipo micro-usb",
                "quantidade": 100
            }
        }).should(response=>{
            expect(response.body.message).equal('Cadastro realizado com sucesso')
        })
    });
});