const API_URL = "http://localhost:3000";

// Função para abrir o modal genérico
function abrirModal(titulo, desc, img) {
    // Tenta pegar o modal geral ou o primeiro que encontrar
    const modal = document.getElementById("modalGeral") || document.querySelector("dialog");
    
    modal.querySelector(".modal-img").src = img || 'img/gato.jpg';
    modal.querySelector(".modal-titulo").innerHTML = titulo;
    modal.querySelector(".desc").innerHTML = desc || "Sem descrição disponível.";

    modal.showModal();
}

// Função que busca os gatos no Banco de Dados e monta os cards
async function carregarGatos() {
    const container = document.querySelector(".cards");
    
    try {
        const response = await fetch(`${API_URL}/gatos`);
        const gatos = await response.json();
        
        // Se tiver gatos no banco, limpamos os estáticos e mostramos os do banco
        if (gatos && gatos.length > 0) {
            container.innerHTML = "";
            gatos.forEach(gato => {
                const card = `
                    <div class="card">
                        <img src="${gato.foto_principal || 'img/gato.jpg'}" alt="${gato.nome}">
                        <h2>${gato.nome}</h2>
                        <h4>${gato.idade}</h4>
                        <p class="stats">
                            ${gato.vacinado ? '<i class="bi bi-patch-check"></i>Vacinado' : ''}
                        </p>
                        <a class="buttonA" onclick="abrirModal('${gato.nome}', '${gato.descricao}', '${gato.foto_principal}')">Quero Adotar</a>
                    </div>
                `;
                container.innerHTML += card;
            });
        }
    } catch (error) {
        console.error("Erro ao carregar gatos:", error);
    }
}

// Inicia o carregamento ao abrir a página
window.onload = carregarGatos;

// Configura o botão de fechar para o modal (se houver um estático aberto)
const btnFechar = document.querySelector("dialog button");
if(btnFechar) {
    btnFechar.onclick = () => document.querySelector("dialog").close();
}