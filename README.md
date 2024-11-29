# Task API

Uma API de gerenciamento de tarefas com autentica��o JWT usando Node.js, Express, e MongoDB. Esta API permite que os usu�rios se cadastrem, fa�am login, e gerenciem suas tarefas de forma segura.

## Funcionalidades

- **Cadastro de usu�rios**: Permite que novos usu�rios se cadastrem no sistema.
- **Login de usu�rios**: Usu�rios podem fazer login com suas credenciais (e-mail e senha).
- **Gerenciamento de tarefas**: Ap�s o login, os usu�rios podem criar, listar e excluir tarefas.
- **Autentica��o JWT**: A autentica��o � feita utilizando JSON Web Tokens (JWT) para proteger as rotas que requerem login.

## Tecnologias

- **Node.js**: Ambiente de execu��o para a API.
- **Express**: Framework para constru��o da API.
- **MongoDB**: Banco de dados NoSQL para armazenar usu�rios e tarefas.
- **JWT (JSON Web Token)**: Para autentica��o de usu�rios.
- **TypeScript**: Para garantir tipagem est�tica e seguran�a no c�digo.
- **Mongoose**: Biblioteca para modelagem de objetos MongoDB.

## Pr�-requisitos

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (ou uma inst�ncia MongoDB online, como o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Instala��o

1. Clone o reposit�rio:

   ```bash
   git clone https://github.com/seu-usuario/task-api.git
    ```

2. Acese o diretorio do projeto:

   ```bash
   cd task-api
   ```

3. Instale as depend�ncias:

   ```bash
   npm install
   ```

4. Crie um arquivo .env na raiz do projeto e adicione suas vari�veis de ambiente. Um exemplo de arquivo `.env` pode ser:

    ```env
    JWT_SECRET=seu_segredo_aqui
    MONGO_URI=mongodb+srv://<user_name>:<user_password>@cluster0.sq83l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    ```

    - `JWT_SECRET`: Chave secreta usada para gerar tokens JWT.
    - `MONGO_URI`: URI de conex�o com o MongoDB.
  
## Estrutura de Diret�rios

A estrutura de diret�rios do projeto � a seguinte:

```bash
task-api/
|-- src/
|   |-- models/               # Modelos do MongoDB
|   |   |-- Task.ts           # Modelo de Tarefa
|   |   |-- User.ts           # Modelo de Usu�rio
|   |-- routes/               # Rotas da API
|   |   |-- authRoutes.ts     # Rota de autentica��o (login, cadastro)
|   |   |-- taskRoutes.ts     # Rota de tarefas (cria��o, listagem, exclus�o)
|   |-- middleware/           # Middleware de autentica��o
|   |   |-- authMiddleware.ts # Middleware para verificar o JWT
|   |-- types/                # Tipagens personalizadas
|   |   |-- express.d.ts      # Tipagens extendidas para o Express
|   |-- index.ts              # Ponto de entrada da API
|-- .env                      # Arquivo de vari�veis de ambiente
|-- package.json              # Depend�ncias e scripts do projeto
|-- tsconfig.json             # Configura��o do TypeScript
```

## Rotas da API

### Casdastro de usu�rio

- **POST** `/api/auth/register`
  
  Registra um novo usu�rio.

  **Corpo da requisi��o**:

   ``` json
   {
      "email": "usuario@exemplo.com",
      "password": "senha123"
   }
   ```

   **Resposta**

   ```json
   {
      "message": "User registered successfully"
   }
   ```

### Login de usu�rio

- **POST** `/api/auth/login`
  
  Realiza o login de um usu�rio e retorna um token JWT e os dados do usu�rio logado.

   **Corpo da requisi��o**:

   ``` json
   {
      "email": "usuario@exemplo.com",
      "password": "senha123"
   }
   ```

   **Resposta**

   ```json
   {
      "token": "seu_token_jwt_aqui",
      "user": {
         "id": "id_do_usuario",
         "name": "name",
         "email": "email",
      }
   }
   ```

### Gerenciamento de Tarefas

- **GET** `/api/tasks/`
  
  Lista todas as tarefas do usu�rio autenticado. Requer autentica��o via JWT.

   **Resposta**

   ```json
   {
      "tasks": [
         {
            "_id": "id_da_tarefa",
            "title": "Exemplo de tarefa",
            "description": "Descri��o da tarefa",
            "completed": false,
            "user": "id_do_usuario",
            "createdAt": "data_de_cria��o",
            "updatedAt": "data_de_atualiza��o",
            "__v": 0
         }
      ]
   }
   ```

- **POST** `/api/tasks/`
  
  Cria uma nova tarefa para o usu�rio autenticado. Requer autentica��o via JWT.

   **Corpo da requisi��o**:

  ``` json
  {
      "title": "Nova tarefa",
      "description": "Descri��o da nova tarefa"
  }
  ```

   **Resposta**

   ```json
   {
      "title": "Nova tarefa",
      "description": "Descri��o da nova tarefa",
      "completed": false,
      "user": "id_do_usuario",
      "_id": "id_da_nova_tarefa",
      "createdAt": "data_de_cria��o",
      "updatedAt": "data_de_atualiza��o",
      "__v": 0
   }
   ```

- **PUT** `/api/tasks/:id_da_tarefa`
  
  Edita a tarefa identificada pelo seu ID com novas informa��es enviadas na requisi��o pelo usu�rio autenticado. Requer autentica��o via JWT.

   **Corpo da requisi��o**:

  ``` json
  {
      "title": "Tarefa Atualizada",
      "description": "Descri��o atualizada da tarefa editada"
  }
  ```

   **Resposta**

   ```json
   {
      "_id": "id_da_tarefa",
      "title": "Tarefa Atualizada",
      "description": "Descri��o atualizada da tarefa editada",
      "completed": false,
      "user": "id_do_usuario",
      "createdAt": "data_de_cria��o",
      "updatedAt": "data_de_atualiza��o",
      "__v": 0
   }
   ```

- **DELETE** `/api/tasks/:id_da_tarefa`
  
  Exclui uma tarefa do usu�rio autenticado. Requer autentica��o via JWT.

   **Resposta**

   ```json
   {
      "message": "Task deleted successfully"
   }
   ```

## Scripts

- **Iniciar o servidor:**

  ```bash
  npm run dev
  ```

   Este comando inicia o servidor em modo de desenvolvimento com o `nodemon`.

- **Compilar o TypeScript:**
  
  ```bash
  npm run build
  ```

  Este comando compila o TypeScript para o diret�rio `dist`.

- **Executar a vers�o compilada do projeto:**

   ```bash
   npm start
   ```

## Contribui��es

Contribui��es s�o bem-vindas! Sinta-se � vontade para abrir issues e pull requests.

## Licen�a

Este projeto est� licenciado sob a [MIT License](https://opensource.org/license/mit).
