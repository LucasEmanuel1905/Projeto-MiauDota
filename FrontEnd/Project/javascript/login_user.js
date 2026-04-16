// Selecionando os elementos
const loginForm = document.querySelector('.cadastro-form');
const loginModal = document.getElementById('modal-login-sucesso');

// Usuários Mockados para Teste e Vinculação
const MOCK_USERS = {
    "05692969009@senacrs.edu.br": {
        nome: "Otávio Santos",
        telefone: "53984652732",
        bio: "Estudante do Senac e amante de tecnologia. No MiauDota, ajudo a gerenciar resgates e encontrar lares responsáveis."
    },
    "00000000000@senacrs.edu.br": {
        nome: "Lucas Emanuel",
        telefone: "555399477529",
        bio: "Fundador entusiasta. Minha missão é garantir que cada gatinho tenha um sofá quentinho e muito amor. 🐾"
    }
};

// Interceptar o envio do formulário
if (loginForm) {
    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Impede o recarregamento da página
        
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Simulador de Login (Mock) - Prioridade para teste conforme solicitado
        if (MOCK_USERS[email] && senha === "Teste1234") {
            const user = MOCK_USERS[email];
            localStorage.setItem('userName', user.nome);
            localStorage.setItem('userPhone', user.telefone);
            localStorage.setItem('userBio', user.bio);
            localStorage.setItem('userEmail', email);
            
            loginModal.style.display = 'flex';
            return;
        }

        // Caso não seja um usuário mockado, tenta o servidor
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, senha })
            });

            if (response.ok) {
                const data = await response.json();
                
                // Armazenar o token JWT e mostrar modal de sucesso
                localStorage.setItem('token', data.token);
                loginModal.style.display = 'flex';
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Erro ao realizar o login');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Não foi possível conectar ao servidor!');
        }
    });
}

// Função para fechar e redirecionar
function fecharModalLogin() {
    loginModal.style.display = 'none';
    window.location.href = "perfil_usuario.html"; // Redireciona direto para o perfil para ver o resultado
}
