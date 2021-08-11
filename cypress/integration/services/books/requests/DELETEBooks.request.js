//verbos/metodo - endpoint .motivo (request) .extensao
/// <reference types="cypress"/>


function deleteBook(idBook){
    return cy.request({
        method:'DELETE',
        url: `v1/Books/${idBook}`,
        failOnStatusCode:false,  //nao falahar caso de um status diferente de 200
    })
}

export { deleteBook };