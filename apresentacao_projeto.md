# Apresentação Detalhada: Projeto MiauDota 🐾

Esta apresentação detalha os pilares fundamentais que sustentam a plataforma MiauDota, utilizando a metodologia **Por que, O que, Como e Onde**.

---

## 🎨 1. Cores (Paleta de Cores)
*   **Porque:** Para transmitir modernidade, confiança e um sentimento de acolhimento premium, fugindo do visual "clínico" tradicional.
*   **O que:** Paleta baseada em roxo vibrante, gradientes profundos e transparências (Glassmorphism).
*   **Como:** Utilizando variáveis CSS e gradientes lineares (`linear-gradient`) para criar profundidade visual.
*   **Onde:** Aplicado em botões, fundos de seções (Backgrounds) e nos estados de hover em todo o site.

## 📐 2. Formas Geométricas
*   **Porque:** Bordas arredondadas e formas suaves transmitem amigabilidade e segurança, essenciais para uma plataforma de adoção.
*   **O que:** Retângulos com `border-radius` elevado, círculos para ícones e containers com desfoque de fundo.
*   **Como:** Através das propriedades `border-radius`, `overflow: hidden` para imagens e `backdrop-filter: blur` para o efeito de vidro.
*   **Onde:** Nos cartões de gatos (cards), modais de detalhes e campos de formulário.

## 🐱 3. Logo
*   **Porque:** Criar uma identidade visual instantânea que conecte o usuário à causa animal de forma carinhosa.
*   **O que:** Uma silhueta minimalista de um gato integrada ao nome da marca.
*   **Como:** Usando imagens PNG de alta resolução com fundo transparente e SVG para garantir nitidez em qualquer tela.
*   **Onde:** No cabeçalho (Header) para navegação e no rodapé (Footer) para reforço de marca.

## 🏠 4. Cases (Casos de Uso)
*   **Porque:** Validar a funcionalidade da plataforma através da jornada real de um usuário (doador ou adotante).
*   **O que:** Os perfis de Lucas Emanuel (Doador) e Otávio Santos (Interessado) simulando fluxos reais.
*   **Como:** Criando contas de teste que possuem gatos cadastrados e solicitações de adoção ativas para demonstração.
*   **Onde:** Na seção "Como Adotar" e na simulação de login do sistema.

## ⚙️ 5. Aspectos Back-End
*   **Porque:** Garantir que os dados dos usuários e dos gatos sejam armazenados de forma segura e organizada.
*   **O que:** API REST desenvolvida em Node.js e TypeScript com banco de dados MySQL.
*   **Como:** Utilizando `Express` para rotas, `Knex` para consultas SQL e `JWT` para autenticação de usuários.
*   **Onde:** Localizado na pasta `BackEnd/src`, gerenciando controladores de gatos, usuários e pedidos.

## 💻 6. Aspectos Front-End
*   **Porque:** Prover uma interface rápida, responsiva e que funcione mesmo com o servidor temporariamente offline.
*   **O que:** Interface dinâmica usando HTML5, CSS3 e JavaScript Vanilla com suporte a LocalStorage.
*   **Como:** Através da manipulação do DOM em tempo real e persistência de dados no navegador para novos cadastros.
*   **Onde:** Localizado na pasta `FrontEnd/Project`, distribuído em arquivos HTML modulares e scripts especializados.

## ✨ 7. UX/UI (Experiência e Interface)
*   **Porque:** Proporcionar uma navegação fluida ("God-level") que reduza o esforço do usuário para completar uma adoção.
*   **O que:** Design responsivo, micro-interações (hover) e feedbacks visuais claros (Modais de sucesso e erro).
*   **Como:** Focando na hierarquia visual, uso de ícones intuitivos (Bootstrap Icons) e carregamento dinâmico de cards.
*   **Onde:** Presente em toda a jornada do usuário, desde a Home até a tela de confirmação de cadastro de gatos.
