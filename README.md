# Projeto MiauDota - Sistema de Adoção de Gatos 🐾
O MiauDota é uma plataforma completa (Fullstack) desenvolvida para conectar gatinhos que precisam de um lar com adotantes responsáveis. O sistema conta com uma API robusta em Node.js e um Frontend dinâmico.

## 📋 Pré-requisitos
Antes de começar, você precisa ter instalado em sua máquina:
*   **Node.js** (versão 18 ou superior) - [Baixe aqui](https://nodejs.org/)
*   **MySQL** (versão 8 ou superior) - [Baixe aqui](https://www.mysql.com/downloads/)
*   **VS Code** ou outro editor de código.

## 🚀 Passo a Passo para Rodar o Projeto

### 1️⃣ Configurar o Banco de Dados
1.  Abra o MySQL Workbench ou seu terminal MySQL.
2.  Execute o script SQL localizado em: `BackEnd/src/database/miadb.sql`.
    *   Isso criará o banco `miadb` e as tabelas necessárias (`usuarios`, `gato`, `pedidos`).
    *   Também insere usuários de teste como Lucas Emanuel e Otávio Santos.

### 2️⃣ Configurar a Conexão
Edite o arquivo `BackEnd/src/database/connection.ts` se precisar ajustar suas credenciais:
```typescript
connection: {
  host: "localhost",
  user: "root",       // Seu usuário MySQL
  password: "senacrs", // Sua senha MySQL
  database: "miadb",
}
```

### 3️⃣ Instalar Dependências e Rodar o BackEnd
No terminal, vá para a pasta BackEnd:
```bash
cd BackEnd
npm install
npm run dev
```
Se tudo estiver correto, você verá: **Servidor rodando na porta 3000 🚀**

### 4️⃣ Rodar o FrontEnd
1.  Basta abrir o arquivo `FrontEnd/Project/index.html` no seu navegador (recomendado usar a extensão **Live Server** do VS Code).
2.  Para testar a "Troca de Contas", faça login, exemplo:
    *   **Lucas:** `00000000000@senacrs.edu.br` / senha: `Teste1234`

## 📂 Estrutura do Projeto
```text
Projeto-MiauDota/
├── BackEnd/
│   ├── src/
│   │   ├── controllers/   # Lógica (usuarios, gatos, pedidos)
│   │   ├── database/      # SQL e Conexão Knex
│   │   ├── middleware/    # Autenticação JWT
│   │   ├── routes/        # Rotas da API
│   │   └── index.ts       # Main do servidor
├── FrontEnd/
│   └── Project/
│       ├── css/           # Estilos God-level
│       ├── javascript/    # Lógica de interface e persistência
│       ├── img/           # Fotos dos gatinhos
│       └── *.html         # Páginas do sistema
```

## 🔌 Principais Endpoints da API (Porta 3000)

### 📌 Autenticação
*   `POST /login` - Realiza login e retorna Token JWT.
*   `POST /registrar` - Cria nova conta de usuário.

### 📌 Gatos
*   `GET /gatos` - Lista todos os gatos disponíveis.
*   `POST /gatos` - Anuncia um novo gato para adoção.
*   `GET /gatos/:id` - Detalhes de um gato específico.

### 📌 Pedidos de Adoção
*   `GET /pedidos` - Lista solicitações (requer Login).
*   `POST /pedidos` - Envia um pedido de adoção para um gato.
*   `PATCH /pedidos/:id` - Atualiza status (Aceito/Recusado).

## 📚 Tecnologias Utilizadas
*   **Backend:** Node.js, TypeScript, Express, Knex.js, JWT.
*   **Banco de Dados:** MySQL.
*   **Frontend:** HTML5, CSS3 (Glassmorphism), JavaScript Vanilla, Bootstrap Icons.

---
📝 **Projeto Educacional - Senac RS**
Desenvolvido com foco em UX/UI e fluxos de transação de dados. 🎓🐾
