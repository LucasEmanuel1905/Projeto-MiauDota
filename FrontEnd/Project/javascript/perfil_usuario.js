// Seletores dos Modais
const editModal = document.getElementById('modal-edit-profile');
const successModal = document.getElementById('modal-success-action');

// Botões de controle
const openEditBtn = document.getElementById('open-edit-modal');
const closeEditBtn = document.getElementById('close-edit-modal');
const editForm = document.getElementById('form-edit-profile');
const logoutBtn = document.getElementById('logout-btn');

// Elementos de exibição no perfil
const nameDisplay = document.getElementById('user-name-display');
const phoneDisplay = document.getElementById('user-phone-display');
const bioDisplay = document.getElementById('user-bio-display');

// Inputs do formulário
const inputName = document.getElementById('input-name');
const inputPhone = document.getElementById('input-phone');
const inputBio = document.getElementById('input-bio');

// --- Persistência de Dados (localStorage) ---

// Carregar Dados ao Iniciar
document.addEventListener('DOMContentLoaded', () => {
    // Carregar Perfil
    const savedName = localStorage.getItem('userName');
    const savedPhone = localStorage.getItem('userPhone');
    const savedBio = localStorage.getItem('userBio');

    if (savedName) {
        nameDisplay.textContent = savedName;
        inputName.value = savedName;
    }
    if (savedPhone) {
        phoneDisplay.innerHTML = `<i class="bi bi-telephone-fill"></i> ${savedPhone}`;
        inputPhone.value = savedPhone;
    }
    if (savedBio) {
        bioDisplay.innerHTML = `<p>${savedBio}</p>`;
        inputBio.value = savedBio;
    }

    // Carregar Solicitações Ocultas/Aceitas
    const hiddenRequests = JSON.parse(localStorage.getItem('hiddenRequests') || '[]');
    const acceptedRequests = JSON.parse(localStorage.getItem('acceptedRequests') || '[]');

    hiddenRequests.forEach(id => {
        const card = document.querySelector(`.request-card[data-id="${id}"]`);
        if (card) card.style.display = 'none';
    });

    acceptedRequests.forEach(id => {
        const card = document.querySelector(`.request-card[data-id="${id}"]`);
        if (card) {
            card.style.opacity = '0.5';
            card.querySelector('.request-actions').innerHTML = '<span style="color: #4caf50; font-weight: bold;">ACEITO</span>';
        }
    });

    // --- Simulação de Conteúdo por Usuário (Troca de Conta) ---
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail === "05692969009@senacrs.edu.br") { // Perfil do Otávio
        const cards = document.querySelectorAll('.request-card');
        if (cards.length >= 2) {
            // Card 1
            cards[0].querySelector('h3').innerHTML = 'Floquinho <span>(Pedido de Carlos Magno)</span>';
            cards[0].querySelector('.cat-thumb img').src = 'img/gato.jpg';
            // Card 2
            cards[1].querySelector('h3').innerHTML = 'Garfield <span>(Pedido de Ana Paula)</span>';
            cards[1].querySelector('.cat-thumb img').src = 'img/Bob.webp';
        }
        
        // Candidaturas do Otávio
        const appCards = document.querySelectorAll('.application-card');
        if (appCards.length >= 1) {
            appCards[0].querySelector('h3').textContent = 'Mel';
            appCards[0].querySelector('.cat-thumb img').src = 'img/Cloe.jpg';
        }
    }
});

// --- Lógica do Modal de Edição ---

openEditBtn.addEventListener('click', () => {
    editModal.style.display = 'flex';
});

closeEditBtn.addEventListener('click', () => {
    editModal.style.display = 'none';
});

// Fechar modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === editModal) editModal.style.display = 'none';
});

// Salvar Alterações
editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Atualizar visual
    nameDisplay.textContent = inputName.value;
    phoneDisplay.innerHTML = `<i class="bi bi-telephone-fill"></i> ${inputPhone.value}`;
    bioDisplay.innerHTML = `<p>${inputBio.value}</p>`;
    
    // Salvar no localStorage
    localStorage.setItem('userName', inputName.value);
    localStorage.setItem('userPhone', inputPhone.value);
    localStorage.setItem('userBio', inputBio.value);
    
    // Fechar modal de edição e mostrar sucesso
    editModal.style.display = 'none';
    showSuccess('Perfil Atualizado!', 'Suas informações foram salvas com sucesso.');
});

// --- Lógica de Sair (Logout) ---
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        // Confirmar com o usuário (opcional, mas bom pra UX)
        if (confirm('Tem certeza que deseja sair do seu perfil?')) {
            // Limpar dados de "sessão"
            localStorage.removeItem('userName');
            localStorage.removeItem('userPhone');
            localStorage.removeItem('userBio');
            localStorage.removeItem('userEmail');
            // Nota: Mantemos hiddenRequests e acceptedRequests se quisermos que persistam entre logins
            // Ou limpamos se quisermos um log fresh. O usuário pediu "logar novamente".
            
            // Redirecionar para login
            window.location.href = 'login_user.html';
        }
    });
}

// --- Lógica de Solicitações (Aceitar/Recusar) ---

const acceptButtons = document.querySelectorAll('.btn-action.accept');
const declineButtons = document.querySelectorAll('.btn-action.decline');

acceptButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.request-card');
        const requestId = card.getAttribute('data-id');
        const catName = card.querySelector('h3').firstChild.textContent.trim();
        
        showSuccess('Adoção Encaminhada!', `Você aceitou o pedido para o(a) ${catName}. Entraremos em contato com o adotante.`);
        
        // Simulação visual
        card.style.opacity = '0.5';
        this.parentElement.innerHTML = '<span style="color: #4caf50; font-weight: bold;">ACEITO</span>';

        // Persistir Aceitação
        const acceptedRequests = JSON.parse(localStorage.getItem('acceptedRequests') || '[]');
        if (!acceptedRequests.includes(requestId)) {
            acceptedRequests.push(requestId);
            localStorage.setItem('acceptedRequests', JSON.stringify(acceptedRequests));
        }
    });
});

declineButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.request-card');
        const requestId = card.getAttribute('data-id');
        
        showSuccess('Pedido Recusado', 'A solicitação foi removida da sua lista.');
        card.style.display = 'none';

        // Persistir Recusa (Ocultar)
        const hiddenRequests = JSON.parse(localStorage.getItem('hiddenRequests') || '[]');
        if (!hiddenRequests.includes(requestId)) {
            hiddenRequests.push(requestId);
            localStorage.setItem('hiddenRequests', JSON.stringify(hiddenRequests));
        }
    });
});

// --- Funções de Sucesso ---

function showSuccess(title, message) {
    document.getElementById('success-title').textContent = title;
    document.getElementById('success-message').textContent = message;
    successModal.style.display = 'flex';
}

function closeSuccessModal() {
    successModal.style.display = 'none';
}

// Fechar modal de sucesso ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === successModal) successModal.style.display = 'none';
});
