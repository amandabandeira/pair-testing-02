//verbos/metodo - endpoint .motivo (request) .extensao
/// <reference types="cypress"/>

const payloadAddBook = require('../payloads/add-book.json')


function addBooks(){
    return cy.request({
        method:'POST',
        url: 'v1/Books',
        failOnStatusCode:false, //nao falahar caso de um status diferente de 200
        body:payloadAddBook
    })
}

export { addBooks };