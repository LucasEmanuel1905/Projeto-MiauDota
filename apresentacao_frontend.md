# Apresentação Detalhada: Foco Front-End (MiauDota) 🎨

Esta apresentação foca na experiência do usuário, na interface visual e na lógica de interação, utilizando a metodologia **Por que, O que, Como e Onde**.

---

## 🏗️ 1. HTML5, CSS3 e JavaScript Vanilla
*   **Porque:** Garantir o máximo de performance e controle sobre cada elemento, sem a sobrecarga de frameworks pesados para este projeto.
*   **O que:** Triade fundamental do desenvolvimento web para estrutura, estilo e comportamento.
*   **Como:** Usando marcação semântica, estilos CSS puros e manipulação direta do DOM via JavaScript.
*   **Onde:** Em todas as páginas do site (Index, Perfil, Cadastro, etc.) e na pasta `Project/javascript`.

## 💎 2. Estética Premium (God-level Design)
*   **Porque:** Para capturar a atenção do usuário no primeiro segundo, transmitindo profissionalismo e modernidade.
*   **O que:** Uso de *Glassmorphism* (transparências com desfoque), gradientes roxos e sombras suaves.
*   **Como:** Utilizando `backdrop-filter: blur()`, cores HSL calibradas e `box-shadow` estratégicos para criar profundidade.
*   **Onde:** Aplicado em Navbars, Cartões de Gatos, Modais e painéis de formulários.

## 💾 3. Persistência Híbrida (LocalStorage)
*   **Porque:** Garantir que o usuário veja seus resultados imediatamente ao cadastrar um pet, mesmo se o servidor demorar a responder ou estiver offline.
*   **O que:** Mecanismo de armazenamento de dados no próprio navegador do usuário.
*   **Como:** Salvando o objeto do gato via `localStorage.setItem()` e lendo-o no carregamento da Home.
*   **Onde:** Implementado nos arquivos `javascript/cadastre_um_gato.js` e `javascript/index.js`.

## 👤 4. Controle de Sessão Dinâmico (Auth Check)
*   **Porque:** Personalizar a experiência de acordo com quem está logado e proteger páginas sensíveis como o perfil.
*   **O que:** Script global que verifica o estado de login e alterna elementos da interface.
*   **Como:** Usando `sessionStorage` para guardar dados do usuário logado e alterando o HTML do Header em tempo real.
*   **Onde:** Arquivo central `javascript/auth_check.js`, carregado em todas as páginas HTML.

## 🃏 5. Renderização Dinâmica de Cards
*   **Porque:** Facilitar a manutenção; em vez de criar dezenas de cartões no HTML, o sistema gera tudo automaticamente a partir de uma lista.
*   **O que:** Geração automática de cards de gatos com dados de nome, idade e status.
*   **Como:** Usando a função `.map()` no JavaScript para transformar dados em strings de HTML e injetá-las no container via `innerHTML`.
*   **Onde:** Funções `carregarGatos()` localizadas no `javascript/index.js`.

## 💬 6. Sistema de Interação (Modais Premium)
*   **Porque:** Manter o usuário na mesma página ao ver detalhes de um gato, evitando carregamentos desnecessários e quebras de fluxo.
*   **O que:** Pop-ups contextuais que exibem informações detalhadas (raça, vacinação, castração).
*   **Como:** Utilizando o elemento `<dialog>` do HTML5 controlado por funções `abrirModal()` e `fecharModal()`.
*   **Onde:** Integrado entre o `index.html` e a lógica do `javascript/index.js`.

## 📱 7. Responsividade e UX (Experiência do Usuário)
*   **Porque:** Garantir que a plataforma seja acessível em qualquer dispositivo, desde monitores 4K até smartphones.
*   **O que:** Layout fluído que se ajusta automaticamente ao tamanho da tela.
*   **Como:** Utilizando `Flexbox`, `Grid Layout` e `Media Queries` no CSS para reorganizar os elementos conforme a largura diminuir.
*   **Onde:** Definido globalmente nos arquivos de CSS dentro da pasta `FrontEnd/Project/css`.
