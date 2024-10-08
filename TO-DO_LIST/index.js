let contador = 0;
var apagar = "";
let botao = document.querySelector("button")
botao.addEventListener("click", clicou)

let conteudo = document.getElementById("campo_texto")

let div = document.querySelector(".conteudo")

let desaparece = document.querySelector(".desaparece")

let itens = new Array();

const formulario = document.getElementById('meuFormulario');

        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o recarregamento da página
});

function disparar(){
    let checkbox = document.querySelector(".radio")
    checkbox.addEventListener("click", function(){
        if(this.checked)
        {
            let pai = this.parentElement;
            pai.style.backgroundColor = '#d3d3d3'
            pai.style.textDecoration = " line-through"
            div.removeChild(pai)
            div.appendChild(pai)
        }
    })
}


function apagarComponente(botao){
    const linha = botao.parentElement;
    linha.remove()
}

function teste(c){
    console.log("teste")
}


function clicou() {
    if(conteudo.value !== ""){
        let item = document.createElement("p");
        item.style.fontSize = "1.3em";
        item.innerHTML = `<input type="checkbox" class="radio" name="${conteudo.value.split(' ').join('')} onclick="teste()"">${conteudo.value.toUpperCase()} <button class="remover" onclick = "apagarComponente(this)"> X </button>`;
        div.insertBefore(item, div.firstChild); 
        conteudo.value = ""
        disparar()
    }
}