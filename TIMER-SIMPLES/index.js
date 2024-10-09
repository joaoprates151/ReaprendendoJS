let timerHoras = 0;
let timerSegundos = 0;
let timerMinutos = 0;

let contagem = document.getElementsByClassName("contagem")[0];
console.log(contagem.textContent)

let acionando = document.querySelector(".timer");
let texto;

let segundosBody = document.querySelector(".segundo"); 
let MinutosBody = document.querySelector(".minuto"); 
let horasBody = document.querySelector(".hora"); 

texto = acionando.innerText
acionando.addEventListener("click", function() {
    acionar();
});

function calcularSegundos()
{
    let segundos = 1;
    segundosBody.innerText = "0" + segundos;
     timerSegundos = setInterval(function() {
        segundos++;
        if(segundos < 10){
            segundosBody.innerText = "0" + segundos;
        }else{
        segundosBody.innerText = segundos;
        
        if (segundos == 60) {
            segundosBody.innerText = 0;
            segundos = 0;
        }}
        
    }, 1000);
}

function calcularMinutos()
{
    let minutos = 0;
    MinutosBody.innerText = "0"+minutos;
     timerMinutos = setInterval(function() {
        minutos++;
        if(minutos < 10){
            MinutosBody.innerText = "0"+minutos;
        }else{
        MinutosBody.innerText = minutos;
        
        if (minutos == 60) {
            MinutosBody.innerText = 0;
            minutos = 0;
            //clearInterval(timer)
        }}
        
    }, 60000);
}



function calcularHoras()
{
    let calculoHoras = 0;
     timerHoras = setInterval(function() {
        calculoHoras++;
        
        const horas = Math.floor(calculoHoras / 3600);
        horasBody.innerText = horas;
        
        if (calculoHoras >= 3600) {
            horasBody.innerText = 0;
            calculoHoras = 0;
            
        }
        
    }, 60000);
}

function cronometro(){
    calcularSegundos();
    calcularMinutos();
    calcularHoras();
}

function parar()
{
    clearInterval(timerSegundos)
    clearInterval(timerMinutos)
    clearInterval(timerHoras)
    segundosBody.innerText = 0.0;
    MinutosBody.innerText = 0.0;
    horasBody.innerText = 0.0;
}


function acionar(){

    if(texto === "Iniciar Timer")
    {
            acionando.innerText = "Zerar";;
            acionando.style.backgroundColor = "red";
            texto = "Parar";
            cronometro();
    }else{
            acionando.innerText = "Iniciar Timer";
            acionando.style.backgroundColor = "rgb(37, 163, 37)"
            texto = "Iniciar Timer";
            parar()
    }
    
    
}

    

    


    
    

