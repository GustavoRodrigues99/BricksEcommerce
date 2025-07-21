# BricksStore

<img width="1899" height="924" alt="image" src="https://github.com/user-attachments/assets/5509aa57-5f5a-41f2-a3ff-54b0e23d3b97" />

## Conteúdo

- [Descrição do Projeto](##Descrição-do-Projeto)
- [Funcionalidades](##Funcionalidades)
- [Tecnologias Utilizadas](##Tecnologias-Utilizadas)
- [Exemplo .env](##Exemplo-.env)


## Descrição do Projeto

Este é um projeto completo de e-commerce construído com a stack MERN (MongoDB, Express.js, React e Node.js). Ele simula uma loja virtual com funcionalidades modernas, incluindo autenticação de usuários, gerenciamento de produtos, carrinho de compras, painel administrativo e muito mais.

## Funcionalidades

### Usuário

- Registro e login de usuários (com autenticação JWT)

- Visualização de produtos e detalhes

- Adição e remoção de itens no carrinho

- Checkout de pedidos

- Histórico de pedidos

### Produtos

- Listagem de produtos por categoria ou busca

- Avaliações e classificações de produtos

- Paginação e destaques (produtos em destaque)

### Pagamento

- Integração com Stripe para pagamentos

### Admin

- Gerenciamento de produtos (criar, editar e deletar)

- Gerenciamento de usuários (listar, editar e deletar)

- Gerenciamento de pedidos (visualizar, atualizar status)

## Tecnologias Utilizadas

### Frontend

- React.js: Biblioteca principal para construção da interface

- Redux Toolkit: Gerenciamento de estado global

- React Router DOM: Roteamento SPA

- Axios: Cliente HTTP para comunicação com a API

### Backend

- Node.js + Express.js: Servidor e criação da API RESTful

- MongoDB com Mongoose: Banco de dados NoSQL e modelagem de dados

- JSON Web Token (JWT): Autenticação de usuários

- bcryptjs: Hash de senhas

### Integrações

Stripe API: Sistema de pagamento online

## Exemplo .env

```bash
PORT=5000
MONGO_URI=your_mongo_uri

UPSTASH_REDIS_URL=your_redis_url

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```
