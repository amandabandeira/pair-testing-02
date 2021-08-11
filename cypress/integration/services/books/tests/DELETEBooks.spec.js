import * as DeleteBooks from '../requests/DELETEBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'



describe('DELETE Books',  () => {
    it('Deletar um livro',  () => {
        GETBooks.allBooks().then((resAllBooks)=>{
            DeleteBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBooks)=>{
                expect(resDeleteBooks.status).to.eq(200)
            })
        })
    })
 })

 describe('DELETE Books',  () => {
    it('Criar e excluir um livro',  () => {
        POSTBooks.addBooks().then((resAddBooks)=>{
            DeleteBooks.deleteBook(resAddBooks.body.id).should((resDeleteBookk)=>{
                expect(resDeleteBookk.status).to.eq(200)
            })
        })
            })
})