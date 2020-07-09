# Linkapi desafio - Um desafio backend para vaga na Linkapi

- MongoDB Atlas Collections

![collections](assets/atlas.png 'collections')

- Pedidos Bling
  ![pedidos](assets/bling.png 'pedidos')

# Sobre o projeto

Este projeto é a resolução de um desafio backend na LinkApi.

### Requisitos

● Criar contas testes nas plataformas Pipedrive e Bling.

● Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

● Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça

● Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

● Criar endpoint para trazer os dados consolidados da collection do MongoDB.

# Para rodar o projeto

<h3>Clone o repositório</h3>

```
$ git clone git@github.com:brpadilha/link-api-desafio.git

$ cd link-api-desafio
```

<h3>Instale as dependencias</h3>

```
$ yarn
```

<h3>Rodar o projeto</h3>

Para rodar a aplicação, no seu terminal digite:

```
$ yarn dev
```

<h3>Rotas</h3>

Neste projeto utilizei duas rotas, para inserir no banco MongoDB as oportunidades e para pegar os dados no banco de dados.

POST - http://localhost:3333/order
GET - http://localhost:3333/order

Indico utilizar o insomnia o envio das requisições.

# Main libraries

```
    "dotenv"
    "express"
    "mongoose"
    "sequelize"
    "sequelize-cli"
    "axios"
    "pipedrive"
    "nodemon"
    "sucrase"
    "eslint"
    "prettier"
```
