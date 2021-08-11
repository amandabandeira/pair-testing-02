//verbos/metodo - endpoint .motivo (request) .extensao
/// <reference types="cypress"/>

const payloadchangeBook = require('../payloads/change-book.json')


function changeBook(idBook){
    debugger
    return cy.request({
        method:'PUT',
        url: `v1/Books/${idBook}`,
        headers:{
            'Content-Type':'application/json'
        },
        failOnStatusCode:false, //nao falahar caso de um status diferente de 200
        body:payloadchangeBook
    })
}

export { changeBook };