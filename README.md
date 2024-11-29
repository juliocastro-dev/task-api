# Task API

Uma API de gerenciamento de tarefas com autenticação JWT usando Node.js, Express, e MongoDB. Esta API permite que os usuários se cadastrem, façam login, e gerenciem suas tarefas de forma segura.

## Funcionalidades

- **Cadastro de usuários**: Permite que novos usuários se cadastrem no sistema.
- **Login de usuários**: Usuários podem fazer login com suas credenciais (e-mail e senha).
- **Gerenciamento de tarefas**: Após o login, os usuários podem criar, listar e excluir tarefas.
- **Autenticação JWT**: A autenticação é feita utilizando JSON Web Tokens (JWT) para proteger as rotas que requerem login.

## Tecnologias

- **Node.js**: Ambiente de execução para a API.
- **Express**: Framework para construção da API.
- **MongoDB**: Banco de dados NoSQL para armazenar usuários e tarefas.
- **JWT (JSON Web Token)**: Para autenticação de usuários.
- **TypeScript**: Para garantir tipagem estática e segurança no código.
- **Mongoose**: Biblioteca para modelagem de objetos MongoDB.

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (ou uma instância MongoDB online, como o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/task-api.git
    ```

2. Acese o diretorio do projeto:

   ```bash
   cd task-api
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo .env na raiz do projeto e adicione suas variáveis de ambiente. Um exemplo de arquivo `.env` pode ser:

    ```env
    JWT_SECRET=seu_segredo_aqui
    MONGO_URI=mongodb://localhost:27017/taskdb
    ```

    - `JWT_SECRET`: Chave secreta usada para gerar tokens JWT.
    - `MONGO_URI`: URI de conexão com o MongoDB.
  
## Estrutura de Diretórios

A estrutura de diretórios do projeto é a seguinte:

```bash
task-api/
|-- src/
|   |-- models/           # Modelos do MongoDB
|   |   |-- Task.ts       # Modelo de Tarefa
|   |-- routes/           # Rotas da API
|   |   |-- authRoutes.ts # Rota de autenticação (login, cadastro)
|   |   |-- taskRoutes.ts # Rota de tarefas (criação, listagem, exclusão)
|   |-- middleware/       # Middleware de autenticação
|   |   |-- authMiddleware.ts # Middleware para verificar o JWT
|   |-- types/            # Tipagens personalizadas
|   |   |-- express.d.ts  # Tipagens extendidas para o Express
|   |-- index.ts          # Ponto de entrada da API
|-- .env                  # Arquivo de variáveis de ambiente
|-- package.json          # Dependências e scripts do projeto
|-- tsconfig.json         # Configuração do TypeScript
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/license/mit).
