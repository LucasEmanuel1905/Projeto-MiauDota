// Selecionando os elementos
const form = document.querySelector('.cadastro-form');
const modal = document.getElementById('modal-sucesso');

// Interceptar o envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página
    
    // Aqui você faria a lógica de salvar no banco de dados.
    // Por enquanto, apenas mostramos a modal:
    modal.style.display = 'flex';
});

// Função para fechar e redirecionar
function fecharModal() {
    modal.style.display = 'none';
    window.location.href = "login_user.html"; // Redireciona para a página principal
}