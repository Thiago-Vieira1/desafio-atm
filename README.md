# Desafio Técnico Morada.ai: Caixa Eletrônico API

## Descrição
Esta API simula o funcionamento de um caixa eletrônico. Ela recebe um valor de saque desejado e retorna a quantidade de cédulas de cada valor necessárias para compor esse saque, utilizando a menor quantidade de cédulas possível. As cédulas consideradas são: 100, 50, 20, 10, 5 e 2.

## Requisitos

1. **Algoritmo para saque**: A lógica deve ser capaz de calcular a quantidade mínima de cédulas necessárias para um valor de saque dado.
2. **Endpoint para saque**:
   - **Entrada**: Valor do saque desejado (inteiro positivo).
   - **Saída**: Quantidade de cédulas de cada valor.

## Formato do Endpoint

- **URL**: `/api/saque`
- **Método**: POST
- **Entrada** (JSON):
  ```json
  {
    "valor": 380
  }
  ```
- **Saída** (JSON):
  ```json
  {
    "100": 3,
    "50": 1,
    "20": 1,
    "10": 1,
    "5": 0,
    "2": 0
  }
  ```

## Critérios para validação

1. **Tratamento de Entradas Inválidas**: Garantir que o valor inserido é um número inteiro positivo.
2. **Eficiência na Distribuição de Cédulas**: Implementar uma lógica que sempre retorne a menor quantidade de cédulas possível.
3. **Erros e Exceções**: Lidar com cenários onde o valor de saque não pode ser atendido com as cédulas disponíveis.
4. **Documentação e Testes**: Garantir que o código esteja bem documentado e com testes adequados para validar a lógica de saque.

## Exemplos de Uso

- **Requisição**:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"valor": 380}' http://localhost:5000/api/saque
  ```
- **Resposta**:
  ```json
  {
    "100": 3,
    "50": 1,
    "20": 1,
    "10": 1,
    "5": 0,
    "2": 0
  }
  ```

## Principais Desafios

1. Validação de Entradas: Garantir que o valor de saque seja um número inteiro positivo foi um dos principais desafios. Adicionar validações para tratar valores inválidos, incluindo valores com centavos e valores negativos, foi essencial para a robustez da API.
2. Cálculo das Cédulas: Implementar a lógica para calcular a quantidade de cada cédula necessária para um valor de saque específico, assegurando que a distribuição fosse correta e eficiente.
3. Formatar Respostas: Formatar a resposta para ser amigável ao usuário, garantindo que as informações fossem claras e fáceis de entender, foi um desafio adicional. Usar JSON.stringify para formatar a resposta em múltiplas linhas foi uma solução para melhorar a legibilidade.


## Como usar esta API

1. **Clone o repositório**: A primeira seção explica como clonar o repositório e entrar no diretório do projeto.
2. **Instalação**: Instruções para instalar as dependências usando `npm install` e a biblioteca Fastify usando `npm install fastify`.
3. **Execução**: Instruções para iniciar o servidor, usando `node server.js`.
4. **Endpoints**: Detalha o endpoint principal da API, incluindo exemplos de requisição e resposta.

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/Thiago-Vieira1/desafio-atm.git
    cd desafio-atm
    ```

2. Inicialize um novo projeto Node.js:
    ```sh
    npm init -y
    ```

3. Instale a biblioteca Fastify:
    ```sh
    npm install fastify
    ```

## Execução

Para iniciar o servidor, utilize o comando:
```sh
node server.js
```

Para testar a API, você pode usar o seguinte comando curl:

```sh
curl -X POST -H "Content-Type: application/json" -d '{"valor": 380}' http://localhost:5000/api/saque
```

Ou, se estiver usando PowerShell, utilize o comando abaixo:

```powershell
$body = @{
    valor = 100.50
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:5000/api/saque" `
                  -Method POST `
                  -ContentType "application/json" `
                  -Body $body
```
