/*import { createServer } from 'node:http'

const server = createServer((request, response) => {
    //console.log('Olá Mundo!')

    response.write('Olá Mundo!')
    response.write('Já me livrei do kasane')

    return response.end()
})
server.listen(3333)*/

//---------------------------------------------

// importando o fastify
import { fastify } from 'fastify'
// criando o servidor
const server = fastify()
// rota principal
server.get('/', () => {
    return 'Olá Mundo!'
})
// outras rotas
server.get('/livro', () => {
    return 'Paginas de livros!'
})
server.get('/artigo', () => {
    return 'Paginas de artigo!'
})
// passando a porta com objecto
server.listen({
    port: 3333,
})