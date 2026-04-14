

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

async function carregarGatos() {
    const response = await fetch('http://localhost:3000/gatos')
    const data = await response.json()
    const select = document.getElementById("mostrarGatos")
    select.innerHTML = data.map(g => `option value =${g.id} >${g.nome, g.raca, g.idade, g.descricao, g.sexo,g.porte, g.foto_principal,g.cadastrado,g.vacinado, g.castrado,g.id_usuario}`
    ).join("")

}
carregarGatos()



