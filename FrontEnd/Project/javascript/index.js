async function mostrarGatos() {
    const resposta = await fetch("http://localhost:3000/gatos");
    const gatos = await resposta.json();
    console.log(gatos); 
}



const adotar = document.querySelector(".buttonA")
const modal = document.querySelector("dialog")
const fecharPop = document.querySelector("dialog button")


function abrirModal(titulo, desc,img){
    document.querySelector(".modal-img").src = img
    document.querySelector(".modal-titulo").innerHTML = titulo
    document.querySelector(".desc").innerHTML = desc

    modal.showModal()
}

fecharPop.onclick = function(){
    modal.close()
}

const API_URL = "http://localhost:3000";
// Função que busca os gatos no Banco de Dados
async function carregarGatos() {
    const container = document.querySelector(".cards");
    
    try {
        const response = await fetch(`${API_URL}/gatos`);
        const gatos = await response.json();
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
    } catch (error) {
        console.error("Erro ao carregar gatos:", error);
    }
}
window.onload = carregarGatos;
// Função do Modal 
const fecharPop = document.querySelector("dialog button");
function abrirModal(titulo, desc, img) {
    document.querySelector(".modal-img").src = img;
    document.querySelector(".modal-titulo").innerHTML = titulo;
    document.querySelector(".desc").innerHTML = desc;
    modal.showModal();
}
fecharPop.onclick = () => modal.close();