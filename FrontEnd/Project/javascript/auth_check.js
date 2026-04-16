// auth_check.js - Carrega o nome do usuário em todas as páginas
document.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('userName');
    const headerNav = document.querySelector('.navegacao ul');
    const currentPage = window.location.pathname;

    // Proteção de Rota: Se estiver no perfil mas não logado, manda pro login
    if (currentPage.includes('perfil_usuario.html') && !savedName) {
        window.location.href = 'login_user.html';
        return;
    }
    
    if (savedName && headerNav) {
        // --- ESTADO LOGADO ---
        
        // 1. Adicionar Saudação (Olá, Nome)
        const greetingLi = document.createElement('li');
        greetingLi.className = 'user-greeting-item';
        greetingLi.style.cssText = 'color: white; font-size: 0.9rem; font-weight: bold; display: flex; align-items: center; margin-right: 15px;';
        greetingLi.innerHTML = `<span>Olá, ${savedName.split(' ')[0]}!</span>`;
        headerNav.insertBefore(greetingLi, headerNav.firstChild);

        // 2. Garantir que o link do perfil está correto
        const lastLiLink = headerNav.querySelector('li:last-child a');
        if (lastLiLink) {
            lastLiLink.href = 'perfil_usuario.html';
            lastLiLink.innerHTML = '<i class="bi bi-person-circle"></i>'; // Ícone mais "cheio" para logado
            lastLiLink.title = 'Meu Perfil';
        }
    } else if (headerNav) {
        // --- ESTADO DESLOGADO ---
        
        // Mudar o botão de perfil para botão de login
        const lastLiLink = headerNav.querySelector('li:last-child a');
        if (lastLiLink) {
            lastLiLink.href = 'login_user.html';
            lastLiLink.innerHTML = 'Entrar / Cadastrar';
            lastLiLink.className = 'btn-login-header'; // Classe para estilizar se necessário
            lastLiLink.style.cssText = 'background: #bf88ff; color: #562b88; padding: 8px 15px; border-radius: 20px; font-weight: bold; transition: all 0.3s;';
        }
    }
});
