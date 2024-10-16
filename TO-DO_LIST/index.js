let botao = document.querySelector("button")
botao.addEventListener("click", clicou)

let conteudo = document.getElementById("campo_texto")

let div = document.querySelector(".conteudo")

let desaparece = document.querySelector(".desaparece")


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


function clicou() {
    if(conteudo.value !== ""){
        let item = document.createElement("p");
        item.style.fontSize = "1.3em";
        item.style.borderRadius = "10px";
        item.style.padding = "50px 20px 10px 20px";
        item.style.marginBottom= "15px";
        item.style.verticalAlign= "middle";
        item.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
        item.innerHTML = `<input type="checkbox" class="radio" name="${conteudo.value.split(' ').join('')} onclick="teste()"">${conteudo.value.toUpperCase()} <button class="remover" onclick = "apagarComponente(this)"> X </button>`;
        div.insertBefore(item, div.firstChild); 
        conteudo.value = ""
        disparar()
    }
}