import { fastify } from 'fastify'

const server = fastify()

// Função para calcular a quantidade de cédulas
function calcularCedulas(valor) {
    const cedulas = [100, 50, 20, 10, 5, 2]
    let resultado = {}

    for (let cedula of cedulas) {
        resultado[cedula] = Math.floor(valor / cedula)
        valor %= cedula
    }

    return resultado
}

// Rota para receber o valor do saque
server.post('/api/saque', (request, reply) => {
    const { valor } = request.body
    const valorNumerico = Number(valor)

    if (typeof valor !== 'number' || valor <= 0  || !Number.isInteger(valor)) {
        return reply.status(400).send({ error: 'Valor de saque deve ser um número inteiro positivo!!' })
    }

    if (valor == 1){
        return reply.status(400).send({ error: 'O valor de saque mínimo é 2!!'})
    }

    const resultado = calcularCedulas(valorNumerico)

    // Formantando o Content para aparecer em cada linha:
    const formattedResponse = `Content: ${JSON.stringify(resultado, null, 1)}`
    reply.type('text/plain').send(formattedResponse)
})

// Inicializando do servidor
server.listen({
    port: 5000,
},
    console.log(`Server está rodando em localhost:5000`)
)