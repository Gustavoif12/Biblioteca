import { createServer } from 'node:http'

const server = createServer((request, response) => {
    //console.log('Olá Mundo!')

    response.write('Olá Mundo!')
    response.write('Já me livrei do kasane')

    return response.end()
})
server.listen(3333)