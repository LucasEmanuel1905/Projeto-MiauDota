# Pseudocódigo dos Arquivos Front-End 

Este arquivo contém o pseudocódigo ("receita de bolo" passo a passo) detalhado para cada arquivo dentro do Front-End do projeto MiauDota.

---

## 📂 PASTA: `FrontEnd/Project/` (ARQUIVOS HTML)

### 📄 ARQUIVO: `index.html`
```text
INÍCIO DOCUMENTO HTML
  DEFINIR CABEÇALHO (head)
    TITULO: "MiauDota"
    IMPORTAR: CSS e Fontes (Estilos, Ícones)
  
  DEFINIR CORPO (body)
    CRIAR CABEÇALHO DA PÁGINA (header)
      EXIBIR Logo e Menu Navegação (Como Adotar, Sobre Nós, Cadastrar Gato, Perfil)
    
    CRIAR CONTEÚDO PRINCIPAL (main)
      SEÇÃO DE BANNER (topo do site)
      SEÇÃO DE GATOS DISPONÍVEIS
        MENSAGEM: "12 resgatinhos disponiveis"
        CONTAINER DOS CARTÕES DE GATOS: vazio (Será preenchido pelo JS)
    
    CRIAR RODAPÉ (footer)
      BLOCO: Logo, frase de efeito e lema
      BLOCO: Nossa Missão
      BLOCO: Contato e Endereço
      LINKS SOCIAIS E CRÉDITOS
    
    CARREGAR SCRIPT: 'javascript/index.js'
FIM DOCUMENTO
```

### 📄 ARQUIVO: `cadastro_user.html`
```text
INÍCIO DOCUMENTO HTML
  DEFINIR CABEÇALHO (head)
    TITULO: "MiauDota - Cadastro"
    IMPORTAR: CSS Específico de Cadastro e Ícones
  
  DEFINIR CORPO (body)
    CRIAR CABEÇALHO DA PÁGINA (header)
    
    CRIAR CONTEÚDO PRINCIPAL (main)
      CAIXA DE FORMULÁRIO DE CADASTRO
        CAMPO TEXTO: Email/Usuário
        CAMPO SENHA: Senha
        CAMPO SENHA: Confirme sua Senha
        TEXTO COM LINK: "Possui um Perfil? LOGIN"
        BOTÃO: "Enviar"
        
    CRIAR RODAPÉ (footer)
    
    CRIAR MODAL DE SUCESSO (escondido por padrão)
      MENSAGEM: "Cadastro Realizado!"
      BOTÃO: Ir para o site
    
    CARREGAR SCRIPT: 'javascript/cadastro_user.js'
FIM DOCUMENTO
```

### 📄 ARQUIVO: `login_user.html`
```text
INÍCIO DOCUMENTO HTML
  DEFINIR CABEÇALHO (head)
    TITULO: "MiauDota - Login"
    IMPORTAR: CSS de Cadastro (Reaproveitado)
  
  DEFINIR CORPO (body)
    CRIAR CABEÇALHO DA PÁGINA (header)
    
    CRIAR CONTEÚDO PRINCIPAL (main)
      CAIXA DE FORMULÁRIO DE LOGIN
        CAMPO TEXTO: Email
        CAMPO SENHA: Senha
        CAMPO SENHA: Confirme sua Senha
        TEXTOS COM LINK: "Esqueceu a Senha?" / "Não possui um Perfil? CADASTRE-SE"
        BOTÃO: "Enviar"
        
    CRIAR RODAPÉ (footer)
FIM DOCUMENTO
```

### 📄 ARQUIVO: `cadastre_um_gato.html`
```text
INÍCIO DOCUMENTO HTML
  DEFINIR CABEÇALHO (head)
    TITULO: "Cadastre um gato"
    IMPORTAR: CSS específico de cadastrar animais
  
  DEFINIR CORPO (body)
    CRIAR CABEÇALHO DA PÁGINA (header)
    
    CRIAR CONTEÚDO PRINCIPAL (main)
      INICIAR FORMULÁRIO (id="formAnimal")
        ESCOLHA DE OPÇÃO: "Adoção" ou "Procura-se"
        CAMPO TEXTO: Nome do Animal
        CAMPO URL: Link da Foto
        CAIXA DE SELEÇÃO: Lista de Raças
        CAIXA DE SELEÇÃO: Sexo (Macho/Fêmea)
        CAIXA DE SELEÇÃO: Idade (Filhote, Adulto, etc)
        CAMPO TEXTO: Descrição
        CAIXA DE SELEÇÃO: Vacinado? (Sim/Não)
        CAIXA DE SELEÇÃO: Castrado? (Sim/Não)
        BOTÃO: "Enviar"
        
    CRIAR RODAPÉ (footer)
    
    CARREGAR SCRIPT: 'javascript/cadastre_um_gato.js'
FIM DOCUMENTO
```

### 📄 ARQUIVO: `como_adotar.html`
```text
INÍCIO DOCUMENTO HTML
  DEFINIR CABEÇALHO (head)
    TITULO: "Como Adotar | MiauDota"
    IMPORTAR: CSS e Meta Tags de SEO
  
  DEFINIR CORPO (body)
    CRIAR CABEÇALHO DA PÁGINA (header)
    
    CRIAR CONTEÚDO PRINCIPAL (main)
      TITULO: "Como Adotar"
      APRESENTAR 4 PASSOS:
        1: Escolha o Gato
        2: Preencha o Formulário
        3: Entrevista e Visita
        4: Adoção Responsável
      APRESENTAR HISTÓRIA (PROVA SOCIAL)
        COMO EXCEÇÃO: A história de Mariana e do gato Luna
        
    CRIAR RODAPÉ (footer)
FIM DOCUMENTO
```

### 📄 ARQUIVO: `sobre_nos.html`
```text
INÍCIO DOCUMENTO HTML
  DEFINIR CABEÇALHO (head)
    TITULO: "Sobre Nós"
    IMPORTAR: CSS
  
  DEFINIR CORPO (body)
    CRIAR CABEÇALHO DA PÁGINA (header)
    CRIAR RODAPÉ (footer) contendo informações e missão da organização
FIM DOCUMENTO
```

---

## 📂 PASTA: `FrontEnd/Project/javascript/` (ARQUIVOS DE LÓGICA / JS)

### 📄 ARQUIVO: `index.js`
```text
INÍCIO LÓGICA DO INDEX

  // Elementos HTML
  GUARDAR REFERÊNCIA DO MODAL
  
  // Função para ver dados de um gato que a pessoa clicou
  FUNÇÃO abrirModal (foto, nome, descrição, idade, sexo, vacina, castração, raça):
    ATUALIZAR as imagens e textos dentro do Modal (Pop-up) com os dados recebidos
    EXIBIR Modal na tela
  
  // Função que busca dados no Backend
  FUNÇÃO ASSÍNCRONA carregarGatos():
    BUSCAR DADOS NO ENDEREÇO "http://localhost:3000/gatos"
    CONVERTER Resposta do servidor em Lista JSON
    GUARDAR REFERÊNCIA da caixa de Cartões (cards) do site
    
    PARA CADA gato DENTRO DE dados:
      MONTAR BLOCO DE HTML:
        FOTO DO GATO
        NOME, IDADE, STATUS, ETC
        BOTÃO "Quero Adotar" -> Configurado para quando clicado chamar "abrirModal()" com as informações deste gato
        ESTRUTURA DE MODAL ESCONDIDA PARA O GATO
    
    INSERIR os blocos HTML gerados no site

  // Rodar logo que abrir a página
  EXECUTAR carregarGatos()
  FUNÇÃO abrirModal: Preenche dados no pop-up e exibe.
  FUNÇÃO carregarGatos:
    1. Tenta baixar gatos do servidor local (porta 3000)
    2. Busca gatos salvos na memória local (localStorage)
    3. Junta as listas e cria os cartões (cards) no site
  // Rodar ao iniciar página
FIM
```

### 📄 ARQUIVO: `auth_check.js` (LÓGICA GLOBAL)
```text
INÍCIO VERIFICAÇÃO DE LOGIN
  LÊR do SessionStorage se existe usuário logado
  SE LOGADO:
    Troca botão "Entrar/Cadastrar" por "Olá, [Nome]!" + Ícone de Perfil
  SE NÃO LOGADO e tentar acessar /perfil:
    Redireciona para login
FIM
```

### 📄 ARQUIVO: `cadastro_user.js`
```text
INÍCIO LÓGICA DE CADASTRO DE USUÁRIO

  GUARDAR REFERÊNCIA DO FORMULÁRIO DE CADASTRO
  GUARDAR REFERÊNCIA DO MODAL-DE-SUCESSO
  
  AO ACONTECER O EVENTO DE "ENVIAR" (SUBMIT) NO FORMULÁRIO:
    FAZER PARAR o comportamento natural de recarregar a tela do navegador
    (Local para futura integração com Banco de Dados)
    EXIBIR Modal-de-Sucesso na tela do usuário
    
  FUNÇÃO fecharModal():
    ESCONDER O Modal-de-Sucesso
    REDIRECIONAR a tela inteira para o arquivo "login_user.html"


### 📄 ARQUIVO: `perfil_usuario.js`    
INÍCIO LÓGICA DE PERFIL
  LÊR dados do usuário logado
  CARREGAR área de "Minhas Doações" e "Meus Pedidos"
  FUNÇÃO editarPerfil: Abre modal -> Salva novos dados localmente -> Atualiza tela
  FUNÇÃO aceitar/recusar Pedido: Altera status do pedido e salva persistência
  BOTÃO SAIR: Limpa a sessão e volta para o Index

FIM
```

### 📄 ARQUIVO: `cadastre_um_gato.js`
```text
INÍCIO LÓGICA DE CADASTRAR GATOS NO SISTEMA

  FUNÇÃO ASSÍNCRONA carregarGatos():
    (Busca os gatos e tenta gerar o HTML, semelhante ao arquivo index)
  
  AO ACONTECER O EVENTO DE "ENVIAR" (SUBMIT) NO FORMULÁRIO:
    FAZER PARAR procedimento padrão
    OBTER VALORES DE: nome, raça, sexo, idade, foto, descrição
    OBTER VALORES DE: Vacinado e Castrado
    
    // Tratando dados (Como o HTML devolve String, converter para Boolean)
    SE Vacinado for "false": Mudar para falso booleano
    SE Castrado for "false": Mudar para falso booleano
    
    BUSCAR COM MÉTODO "POST" NA ROTA "http://localhost:3000/gatos":
      ENVIAR NO CORPO: Todos os valores recolhidos transformados em formato Objeto Literal via JSON.stringify()
      
    SE A RESPOSTA (response.ok) FOR DE SUCESSO:
      MOSTRAR janela Pop-up padrão do PC "gato cadastrado!"
      LIMPAR todo o formulário (reset)
      EXECUTAR carregarGatos() para atualizar
    SENÃO:
      MOSTRAR janela Pop-up padrão do PC com Erro
      
INÍCIO CADASTRO DE GATOS
  AO CLICAR EM ENVIAR:
    Recolhe dados do formulário (Nome, Raça, Foto, etc)
    SALVA no localStorage (para garantir que apareça no Index em tempo real)
    TENTA ENVIAR para o servidor via POST
    RESPOSTA: Sucesso e volta para o Index
FIM
```

---

## 📂 PASTA: `FrontEnd/Project/css/` (ARQUIVOS DE ESTILIZAÇÃO)

### 📄 ARQUIVOS DE CSS (`style.css`, `cadastro_user.css`, `cadastre_um_gato.css`, etc.)
*Por ser visual, o CSS é descrito apenas de forma estrutural (o que o estilo fará):*

```text
INÍCIO ESTILIZAR PÁGINAS

  DEFINIÇÕES GLOBAIS:
    SELECIONAR CORPO (Body): Definir Fonte 'SN Pro', margin zero.

  ESTILOS DO CABEÇALHO E RODAPÉ (comum entre páginas):
    ALINHAR ITENS e Logo no centro da Barra (Header / Footer)
    APLICAR COR DE FUNDO primária do modelo MiauDota
    DEFINIR EFEITOS de cor pra quando arrastar o mouse em cima de links (Hover)
  
  ESTILOS DO FORMULÁRIO:
    CAIXAS DE TEXTO e CAMPOS: Colocar cantos arredondados e borda sútil.
    BOTÕES: Colocar cor sólida, mudar cor quando for pressionado/clicado (Active / Hover).
    
  ESTILOS DOS GATINHOS (CARDS):
    DEFINIR a caixa do card como Display Flex (flexível e alinhada)
    MOLDAR as fotos para não ficarem distorcidas
    
  ESTILOS DOS MODAIS (POP-UPS):
    FUNDO (Background): Semi-transparente escurecendo o resto da tela
    BOTAO DE FECHAR e POSICIONAMENTO: Centralizado absoluto
    
  RESPONSIVIDADE (Layout de Celular / @media queries):
    SE SE IDENTIFICAR QUE A TELA DIMINUIU:
      EMPILHAR elementos lateralmente, trocando orientação de Linha para Coluna
      AUMENTAR TAMANHO DOS BOTÕES para o dedo do usuário 

FIM ESTILIZAR PÁGINAS
```
