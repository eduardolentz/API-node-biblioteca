

# 📚 API Node.js Biblioteca

Este projeto é uma **API RESTful** para gerenciamento de livros, construída com **Node.js**, **Express** e **Sequelize**, utilizando **PostgreSQL** como banco de dados.  

A API suporta operações **CRUD**, inclui **logs com Winston** e **testes automatizados com Jest e Supertest**.  

---

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **Express** – Framework para criação de APIs REST
- **Sequelize** – ORM para interação com o PostgreSQL
- **PostgreSQL** – Banco de dados relacional
- **Winston** – Biblioteca para logs estruturados
- **Jest e Supertest** – Frameworks para testes automatizados
- **Dotenv** – Gerenciamento de variáveis de ambiente
- **Postman** – Fazer requisições para a API

---

## 📁 Estrutura do Projeto

```
API-node-biblioteca/
├── config/
│   └── database.js        # Configuração do Sequelize e conexão com PostgreSQL
├── models/
│   └── livro.js           # Modelo Livro (ORM Sequelize)
├── routes/
│   └── livros.js          # Rotas da API
├── utils/
│   └── logger.js          # Configuração do Winston para logs
├── tests/
│   └── app.test.js        # Testes automatizados com Jest e Supertest
├── logs/                  # (Ignorado pelo Git) Armazena logs do Winston
├── seed.js                # Script para inserir 5 livros iniciais
├── app.js                 # Configuração do servidor Express
├── .env                   # Variáveis de ambiente (não versionado)
├── .gitignore             # Arquivos e diretórios ignorados pelo Git
├── package.json           # Dependências e scripts npm
└── README.md              # Documentação do projeto
```

---

## 🛠️ Configuração do Projeto

### 1️⃣ Clonando o repositório

```bash
git clone https://github.com/eduardolentz/API-node-biblioteca.git
cd API-node-biblioteca
```

### 2️⃣ Configurando as Variáveis de Ambiente

Crie um arquivo **.env** na raiz do projeto e defina as credenciais do banco:


## ▶️ Executando a Aplicação Localmente

### 💻 Passos para rodar o projeto

1. **Instale as dependências**:

   ```bash
   npm install
   ```

2. **Certifique-se de que o PostgreSQL está rodando e acessível.**
   
3. **Inicie a aplicação em modo desenvolvimento:**

   ```bash
   npm run dev
   ```

4. A API estará rodando em `http://localhost:8000`.

---

## 📌 Endpoints da API

A API suporta as seguintes operações:

| Método  | Rota                  | Descrição                  |
|---------|------------------------|----------------------------|
| **GET**    | `/api/livros`          | Retorna todos os livros    |
| **GET**    | `/api/livros/{id}`     | Retorna um livro por ID    |
| **POST**   | `/api/livros`          | Adiciona um novo livro     |
| **PUT**    | `/api/livros/{id}`     | Atualiza um livro          |
| **DELETE** | `/api/livros/{id}`     | Remove um livro            |

### 🔎 Exemplo de Requisição `POST` para Criar um Livro

Requisição:
```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "ano_publicacao": 1899
}
```

Resposta esperada:
```json
{
  "id": 6,
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "ano_publicacao": 1899
}
```

---

## 📊 Logs com Winston

O **Winston** é utilizado para registrar logs tanto no terminal quanto em arquivos dentro da pasta `logs/`.

### 📌 Níveis de Log:
- **info** – Informações gerais sobre a aplicação.
- **warn** – Avisos (exemplo: tentativa de buscar um livro que não existe).
- **error** – Erros ocorridos durante a execução da API.

### 📂 Onde encontrar os logs?
- **logs/error.log** → Registra apenas logs de erro.
- **logs/combined.log** → Registra todos os logs.

📌 **Exemplo de saída de logs no terminal:**
```
2025-02-24 14:00:01 [INFO]: Servidor rodando na porta 8000
2025-02-24 14:00:05 [INFO]: Lista de livros retornada com sucesso.
2025-02-24 14:00:10 [WARN]: Livro ID 999 não encontrado.
2025-02-24 14:00:15 [ERROR]: Erro ao buscar livro ID 2: Conexão perdida com o banco.
```


---

## ✅ Testes Automatizados

Os testes são escritos com **Jest e Supertest**. Para rodá-los:

```bash
npm test
```

Os testes incluem:

- Verificação da rota `GET /api/livros`
- Testes para garantir que a API retorna os dados corretamente

Caso os testes não finalizem corretamente, **verifique se o banco está rodando** e se as tabelas foram criadas corretamente.

---

## 🚀 Melhorias Futuras

- Implementação de **Swagger** para documentação interativa da API.
- Autenticação e autorização com **JWT**.
- Deploy da API em um serviço cloud.

---