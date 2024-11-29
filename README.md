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
    MONGO_URI=mongodb://localhost:27017/taskdb
    ```

    - `JWT_SECRET`: Chave secreta usada para gerar tokens JWT.
    - `MONGO_URI`: URI de conex�o com o MongoDB.
  
## Estrutura de Diret�rios

A estrutura de diret�rios do projeto � a seguinte:

```bash
task-api/
??? src/
?   ??? models/           # Modelos do MongoDB
?   ?   ??? Task.ts       # Modelo de Tarefa
?   ??? routes/           # Rotas da API
?   ?   ??? authRoutes.ts # Rota de autentica��o (login, cadastro)
?   ?   ??? taskRoutes.ts # Rota de tarefas (cria��o, listagem, exclus�o)
?   ??? middleware/       # Middleware de autentica��o
?   ?   ??? authMiddleware.ts # Middleware para verificar o JWT
?   ??? types/            # Tipagens personalizadas
?   ?   ??? express.d.ts  # Tipagens extendidas para o Express
?   ??? index.ts          # Ponto de entrada da API
??? .env                  # Arquivo de vari�veis de ambiente
??? package.json          # Depend�ncias e scripts do projeto
??? tsconfig.json         # Configura��o do TypeScript
```

## Contribui��es

Contribui��es s�o bem-vindas! Sinta-se � vontade para abrir issues e pull requests.

## Licen�a

Este projeto est� licenciado sob a [MIT License](https://opensource.org/license/mit).
