# Apresentação Detalhada: Foco Back-End (MiauDota) ⚙️

Esta apresentação foca na inteligência técnica e nos bastidores do servidor, utilizando a metodologia **Por que, O que, Como e Onde**.

---

## 🏗️ 1. Node.js com TypeScript
*   **Porque:** Para garantir escalabilidade e evitar erros comuns de digitação em tempo de desenvolvimento, tornando o código mais seguro e fácil de manter.
*   **O que:** Ambiente de execução assíncrono utilizando a tipagem estática do TypeScript.
*   **Como:** Através da transpilação do código TS para JS moderno e execução via `tsx` no ambiente de desenvolvimento.
*   **Onde:** Em todo o núcleo do servidor (pasta `BackEnd/src`), desde a inicialização (`index.ts`) até as rotas.

## 🗄️ 2. Banco de Dados Relacional (MySQL)
*   **Porque:** Necessidade de manter dados altamente estruturados e relacionados (ex: um gato pertence a um usuário, um pedido liga usuário e gato).
*   **O que:** Banco de Dados MySQL com tabelas de Usuários, Gatos e Pedidos de Adoção (`miadb`).
*   **Como:** Definindo chaves primárias e estrangeiras para garantir a integridade referencial dos dados.
*   **Onde:** Gerenciado através do script `miadb.sql` e acessado pelo servidor.

## 🧱 3. Query Builder (Knex.js)
*   **Porque:** Facilitar a escrita de consultas SQL de forma programática e permitir que o código seja independente do banco (portabilidade).
*   **O que:** O Knex.js atua como uma ponte entre o código Node e o banco SQL.
*   **Como:** Utilizando métodos como `db('tabela').select('*').where({ id })` em vez de strings SQL puras.
*   **Onde:** Localizado no arquivo `BackEnd/src/database/connection.ts` e injetado nos controladores.

## 🔒 4. Autenticação JWT (JSON Web Token)
*   **Porque:** Para permitir que o usuário permaneça logado de forma segura e stateless (sem precisar salvar sessões pesadas no servidor).
*   **O que:** Sistema de tokens cifrados que validam a identidade do usuário em cada requisição protegida.
*   **Como:** Gerando um token único no Login e verificando-o através da função `Authmeio` nos cabeçalhos das rotas.
*   **Onde:** Definido em `middleware/auth.ts` e usado nas rotas de Usuarios e Pedidos.

## 🛡️ 5. Criptografia de Senhas (Bcrypt)
*   **Porque:** Segurança de dados sensíveis; nunca devemos salvar senhas em texto puro caso o banco seja comprometido.
*   **O que:** Algoritmo de hash de alta segurança para "embaralhar" as senhas dos usuários.
*   **Como:** Usando `bcrypt.hash()` no momento do cadastro e `bcrypt.compare()` no momento do login.
*   **Onde:** Implementado dentro do `authcontroller.ts` durante os fluxos de registro e acesso.

## 🔌 6. Arquitetura REST & Endpoints
*   **Porque:** Padronizar a comunicação entre o Front-End e o Back-End, permitindo que qualquer cliente (web ou mobile) consuma os dados.
*   **O que:** Rotas baseadas nos verbos HTTP (GET, POST, PUT, PATCH, DELETE).
*   **Como:** Organizando rotas semânticas como `/gatos`, `/usuarios` e `/pedidos` no roteador do Express.
*   **Onde:** Definido centralmente no arquivo `BackEnd/src/routes/Routes.ts`.

## 🎮 7. Controladores (Business Logic)
*   **Porque:** Separar as regras de negócio das rotas, mantendo o código organizado e testável (Princípio de Responsabilidade Única).
*   **O que:** Funções que processam as requisições, consultam o banco e devolvem as respostas em JSON.
*   **Como:** Implementando funções assíncronas que tratam erros e validam os dados antes de salvar no banco.
*   **Onde:** Pasta `BackEnd/src/controllers/`, dividida por domínio (Gatos, Pedidos, Usuários e Auth).
