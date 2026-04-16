# Pseudocódigo dos Arquivos Back-End

Este arquivo contém o estilo "receita de bolo" ou pseudocódigo detalhado para cada arquivo dentro do Back-End no servidor do projeto MiauDota (em Node.js / Express).

---

## 📂 PASTA: `BackEnd/src/`

### 📄 ARQUIVO: `index.ts`
```text
INÍCIO SERVIDOR
  IMPORTAR biblioteca express (para configurar servidor web)
  IMPORTAR rotas do arquivo 'routes/Routes.js'
  IMPORTAR cors (para permitir conexões via sites externos e frontend)
  
  CRIAR aplicativo (app) a partir do express
  ATIVAR cors no aplicativo
  DEFINIR porta do servidor como 3000
  
  CONFIGURAR aplicativo para entender dados no formato JSON
  CONECTAR e ativar as rotas importadas no aplicativo
  
  INICIAR o servidor "escutando" na porta 3000:
    IMPRIMIR MENSAGEM no terminal "Example app listening on port 3000"
FIM SERVIDOR
```

---

## 📂 PASTA: `BackEnd/src/database/`

### 📄 ARQUIVO: `connection.ts`
```text
INÍCIO CONEXÃO COM BANCO DE DADOS
  IMPORTAR biblioteca Knex (Construtor de buscas e conexões para SQL)
  
  EXPORTAR UMA CONSTANTE 'db', CONFIGURANDO O Knex COM OS DADOS:
    CLIENTE ESCOLHIDO: 'mysql2'
    CREDENNCIAIS DE CONEXÃO:
      HOST (Endereço): "localhost"
      USUÁRIO: "root"
      SENHA: "senacrs"
      NOME_DO_BANCO_DE_DADOS: "miadb"
FIM CONEXÃO
```

---

## 📂 PASTA: `BackEnd/src/routes/`

### 📄 ARQUIVO: `Routes.ts`
```text
INÍCIO ROTAS DO SISTEMA
  IMPORTAR rotas do express e controladores
  IMPORTAR Middleware de validação (Authmeio) para rotas protegidas
  
  // Rotas de Autenticação (Aberto)
  POST '/login' -> Função login
  POST '/registrar' -> Função registrar
  
  // Rotas de Usuários
  GET '/usuarios' -> Lista todos
  GET '/usuarios/:id' -> Busca um
  PUT '/usuarios/:id' (PROTEGIDA pelo Authmeio) -> Atualiza perfil
  DELETE '/usuarios/:id' -> Deleta usuário
  
  // Rotas de Gatos
  GET '/gatos' -> Lista todos os pets
  POST '/gatos' -> Cadastra novo pet
  GET '/gatos/:id' -> Busca detalhes de um pet
  PUT '/gatos/:id' -> Atualiza dados do pet
  DELETE '/gatos/:id' -> Remove pet
  
  // Rotas de Pedidos de Adoção (Exigem login)
  GET '/pedidos' (PROTEGIDA) -> Lista solicitações
  POST '/pedidos' (PROTEGIDA) -> Cria novo pedido
  PATCH '/pedidos/:id' (PROTEGIDA) -> Aceita ou Recusa pedido
  DELETE '/pedidos/:id' -> Remove registro de pedido
FIM ROTAS
```

---

## 📂 PASTA: `BackEnd/src/middleware/`

### 📄 ARQUIVO: `auth.ts`
```text
INÍCIO INTERCEPTADOR DE AUTENTICAÇÃO (Authmeio)
  IMPORTAR jsonwebtoken (ferramenta para gerenciar tokens de login)
  
  EXPORTAR FUNÇÃO ASSÍNCRONA Authmeio(Requisição, Resposta, Função Próximo):
    LÊR autorização do cabeçalho da Requisição de rede ('headers.authorization')
    
    // Verificando se enviou a chave de identificação:
    SE o cabeçalho estiver vazio OU não começar com a palavra 'Bearer':
      RETORNAR ERRO 401 COM MENSAGEM: "quem é vc?" e cancelar requisição
      
    REMOVER a palavra 'Bearer ' e guardar apenas a parte do token cifrado
    
    TENTAR:
      DESCRIPTOGRAFAR o token guardado usando a chave privada "miaudotasupersecreto"
      ARMAZENAR as informações do usuário contidas no token na requisição, para uso futuro
      CHAMAR função "Próximo()" permitindo a continuidade até o controle (autorizado)
    EM CASO DE FALHA NA DESCRIPTOGRAFIA:
      RETORNAR ERRO 401 COM MENSAGEM: "token invalido ou expirado"
FIM INTERCEPTADOR
```

---

## 📂 PASTA: `BackEnd/src/controllers/`

### 📄 ARQUIVO: `authcontroller.ts`
```text
INÍCIO CONTROLE_AUTENTICAÇÃO

  FUNÇÃO ASSÍNCRONA registrar (Criar conta):
    RECEBER "nome", "email", "telefone", "cpf" e "senha" do corpo JSON da Requisição de Rede
    
    BUSCAR no banco de dados se já existe conta na tabela "usuario" com este mesmo "email"
    SE EXISTER:
      RETORNAR ALERTA ERRO 409: "Email ja cadastrado"
      
    CRIPTOGRAFAR E EMBARALHAR a "senha" pura enviada pelo usuário (usando biblioteca bcrypt)
    
    INSERIR NA TABELA NO BANCO DADOS o nome, email, telefone, cpf e a SENHA ESTANDO AGORA CRIPTOGRAFADA.
    SALVAR O ID numérico gerado pelo cadastro com sucesso
    
    RETORNAR MENSAGEM de sucesso informando API externa do "id" criado
    EM CASO DE FALHA DE BANCO DADOS: Retornar Erro 500 "Erro ao cadastrar usuário"

  FUNÇÃO ASSÍNCRONA login (Acesso):
    RECEBER "email", "senha" do corpo da requisição
    
    BUSCAR no banco de dados a linha referente ao "usuario" pelo seu "email"
    SE NÃO LOCALIZADO:
      RETORNAR ERRO 401: "usuario não encontrado"
      
    UTILIZAR FERRAMENTA DE CRIPTOGRAFIA (bcrypt) PARA COMPARAR a nova senha digitada com a que está cifrada no Banco.
    SE AS SENHAS NÃO BATEREM:
      RETORNAR ERRO 401: "usuario não encontrado"
      
    GERAR O TOKEN JWT colocando dados do usuário (ID e Email) assinado à chave confidencial "miaudotasupersecreto", tendo prazo máximo de 1 dia (expiresIn).
    
    RETORNAR SUCESSO CÓDIGO 201 repassando ao App do Frontend o seu "token" de acesso.
FIM CONTROLE_AUTENTICAÇÃO
```

### 📄 ARQUIVO: `catController.ts`
```text
INÍCIO CONTROLE_GATOS

  FUNÇÃO ASSÍNCRONA listarGatos:
    SELECIONAR TODOS da tabela "gato" armazenada no Banco
    RESPONDER em JSON os registros dos gatos
    
  FUNÇÃO ASSÍNCRONA listarGatosCompleto:
    SELECIONAR da tabela "gato", agregando o nome do criador obtido na tabela "usuario" através da união (InnerJoin)
    RESPONDER em JSON este super bloco de registros
    
  FUNÇÃO ASSÍNCRONA buscarGato (Individual):
    RECEBER o "id" numérico via caminho da URL ("/gatos/2" -> ID é 2)
    SELECIONAR APENAS UM na tabela "gato" cujo id cruze com este da URL
    RESPONDER os dados localizados
    
  FUNÇÃO ASSÍNCRONA criarGato:
    RECEBER dados de informação inseridos pelo usuário (nome, raca, idade, descricao, sexo, imagem, castrado, vacinado)
    DEFINIR INFORMACOES AUTOMATIZADAS DO CHUMBO TESTE (id_usuario = 1, cadastrado = true)
    
    INSERIR na tabela de "gato" do Banco repassando a informação. Se castrado ou vacinado vier vazio será registrado Falso.
    RETORNAR SUCESSO CÓDIGO 201 com o ID provido pelo Banco com frase alegre.

  FUNÇÃO ASSÍNCRONA atualizarGato:
    RECEBER "id" via URL, seguido de dezenas atributos de Atualização informados no formulário Corpo
    LOCALIZAR no banco de dados na Tabela "gato" utilizando cláusula "where" no id especificado.
    ATUALIZAR no mesmo local os atributos pelos listados.
    RETORNAR Resposta do Servidor: "Gato atualizado com sucesso!"
    
  FUNÇÃO ASSÍNCRONA deletarGato:
    RECEBER "id" pela URL da Solicitação Deletiva
    LOCALIZAR no banco este "id" na tabela "gato" E APAGAR DE FATO
    RETORNAR para quem fez a solicitação: "Gato excluído!"
    
FIM CONTROLE_GATOS
```

### 📄 ARQUIVO: `usuariosController.ts`
```text
INÍCIO CONTROLE_USUÁRIOS
  
  FUNÇÃO ASSÍNCRONA listarUsuarios:
    SOLICITAR dados totais do banco da entidade "usuario"
    RETORNAR a solicitação de dados JSON
    
  FUNÇÃO ASSÍNCRONA buscarUsuario:
    LÊR da requisição da URL a diretriz "id"
    FILTRAR usuários do banco onde correspondam a "id" e retornar.
    
  FUNÇÃO ASSÍNCRONA atualizarUsuario:
    RECEBER da URL: a identificação do ser (id)
    RECEBER DA LÓGICA DO CORPO JSON: nome, email, telefone, cpf e senha para alteração de perfile
    BUSCAR PERFIL no banco, injetar os novos textos nos atributos velhos.
    RETORNAR aviso: "Atualizado!"
    
  FUNÇÃO ASSÍNCRONA deletarUsuario:
    LÊR indicativo do "id" do usuário e apagá-lo na base de informações.
    RESPONDER: "Excluído!"
    
FIM CONTROLE_USUÁRIOS
```

### 📄 ARQUIVO: `pedidosController.ts`
```text
INÍCIO CONTROLE_PEDIDOS_DE_ADOÇÃO

  FUNÇÃO ASSÍNCRONA listarPedidos:
    IR NO BANCO TABELA "pedido_adocao" E SELECIONAR (Data, id, Status, e os nomes referênciados nas tabelas Usuario e Gato usando ligação JOIN)
    RESPONDER a requisição com esses dados combinados.
    
  FUNÇÃO ASSÍNCRONA buscarPedido:
    RECEBER o "id". Fazer a mesma junção complexa de banco (JOIN entre Usuario, Gato e Pedido) filtrando Apenas Para o correspondente ID.
    RESPONDER
    
  FUNÇÃO ASSÍNCRONA criarPedido:
    RECEBER do Frontend a informação "id_usuario" (de quem está adotando) e "id_gato" (do pet sendo levado)
    INSERIR NA DATA-BASE esses dois ID de vínculo atestando STATUS INICIAL "pendente" e anotando o horário oficial DB (db.fn.now).
    RETORNAR MENSAGEM: "Pedido de adoção realizado!"
    
  FUNÇÃO ASSÍNCRONA atualizarPedido:
    LÊR "id" e o corpo com novo status (Ex: de "pendente" para "aprovado")
    BATER na Base Atualizando o registro específico e voltar com "Status atualizado!"
    
  FUNÇÃO ASSÍNCRONA deletarPedido:
    LÊR pedido por "id" da URL e acionar EXERCUTOR (delete).
    AVISAR "Pedido removido!"
    
FIM CONTROLE_PEDIDOS
```
