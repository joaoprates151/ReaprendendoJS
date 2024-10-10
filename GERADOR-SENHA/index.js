let button = document.querySelector(".button")
let container_radios = document.querySelectorAll("input[name='complexibilidade']")
let radio_selecionado;
let principal = document.querySelector(".principal");
let parametros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

button.addEventListener("click", () =>
{
    for(const radio of container_radios){
        if(radio.checked){
            radio_selecionado = radio.value
            break;
        }
    }

    if(radio_selecionado === "Baixa")
    {
        facil();
    }
    else if(radio_selecionado === "Média")
    {
        medio();
    }
    else if(radio_selecionado === "Alta")
    {
        alta();
    }
    
})

function criarResposta(resultado){

    let div = document.querySelector(".dificuldade");
    let paragrafo;
    let paragrafoExistente = principal.querySelector("p");

    if (!paragrafoExistente) {
        paragrafo = document.createElement("p");
        paragrafo.style.marginTop = "10px";
        paragrafo.style.fontSize = "1.2em";
        paragrafo.innerText = resultado;
        principal.appendChild(paragrafo);
    }
    else
    {
        paragrafoExistente.innerText = resultado;
    }
    
    
    if(resultado.length == 8){
        div.style.display = "block"
        if(div.classList.contains("amarelo") || div.classList.contains("verde"))
        {
            div.classList.remove("amarelo");
            div.classList.remove("verde");
            div.classList.add("vermelho");
        }else
        {
            div.classList.add("vermelho");
        }
    }
    else if(resultado.length == 10)
    {
        div.style.display = "block"
        if(div.classList.contains("vermelho") || div.classList.contains("verde"))
        {
            div.classList.remove("vermelho");
            div.classList.remove("verde");
            div.classList.add("amarelo");
        }else
        {
            div.classList.add("amarelo");
        }
    }
    else if(resultado.length == 12)
    {
        div.style.display = "block"
        if(div.classList.contains("vermelho") || div.classList.contains("amarelo"))
        {
            div.classList.remove("vermelho");
            div.classList.remove("amarelo");
            div.classList.add("verde");
        }else
        {
            div.classList.add("verde");
        }
    }
}

function facil()
{
    let sequenciaFacil;
    for(let i = 0; i < 8; i++){
        if(i == 0){
            sequenciaFacil = Math.floor(Math.random() * 10);
        }else{
            sequenciaFacil  +=  (Math.floor(Math.random() * 10) + "");
        } 
    }
    
    criarResposta(sequenciaFacil);
}

function medio()
{
    let sequenciaMedia;

    for(let i = 0; i < 10; i++)
    { //36
        if(i == 0){
            sequenciaMedia = parametros[Math.floor(Math.random() * 36)];
        }else{
            sequenciaMedia  +=  parametros[Math.floor(Math.random() * 36)];
        } 
        
    }

    criarResposta(sequenciaMedia);
}

function alta()
{
    let sequenciaDificil;
    let maisParametros = ["!", "@", "$", "&", "(", ")", "-", "ç", ">", "<", ".", ",", "|", "?", "^"];
    let parametrosFinais = parametros.concat(maisParametros);

    for(let i = 0; i < 12; i++)
    { //36
        if(i == 0){
            sequenciaDificil = parametrosFinais[Math.floor(Math.random() * (parametrosFinais.length))];

        }else{
            sequenciaDificil += parametrosFinais[Math.floor(Math.random() * (parametrosFinais.length))];
        } 
        
    }
    criarResposta(sequenciaDificil);
}
