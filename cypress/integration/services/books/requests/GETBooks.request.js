//verbos/metodo - endpoint .motivo (request) .extensao
/// <reference types="cypress"/>


function allBooks(){
    return cy.request({
        method:'GET',
        url: 'v1/Books',
        failOnStatusCode:false,  //nao falahar caso de um status diferente de 200
    })
}

export { allBooks };