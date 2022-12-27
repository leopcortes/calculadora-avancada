/* ============ Calculadora iPhone ============ */

const numeros = document.querySelectorAll(".numeros");
const resultado = document.querySelector(".resultado");
const sinais = document.querySelectorAll(".sinal");
const igual = document.querySelector(".igual");
const limpar = document.querySelector(".limpar");
const negativo = document.querySelector(".negativo");
const porcentagem = document.querySelector(".porcentagem");

let primeiroValor = "";
let ehPrimeiroValor = false;
let segundoValor = "";
let ehSegundoValor = false;
let sinal = "";
let valorResultado = 0;

for(let i = 0; i < numeros.length; i++){
    numeros[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(ehPrimeiroValor === false){
            pegarPrimeiroValor(atr);
        }
        if(ehSegundoValor === false){
            pegarSegundoValor(atr);
        }
    })
}

function pegarPrimeiroValor(el){
    resultado.innerHTML = "";
    primeiroValor += el;
    resultado.innerHTML = primeiroValor;
    primeiroValor = +primeiroValor;
}

function pegarSegundoValor(el){
    if(primeiroValor != "" && sinal != ""){
        segundoValor += el;
        resultado.innerHTML = segundoValor;
        segundoValor = +segundoValor;
    }
}

function pegarSinal(){
    for(let i = 0; i < sinais.length; i++){
        sinais[i].addEventListener('click', (e) => {
            sinal = e.target.getAttribute('value');
            ehPrimeiroValor = true;
        })
    }
}
pegarSinal();

igual.addEventListener('click', () => {
    resultado.innerHTML = "";
    if(sinal === "+"){
        valorResultado = primeiroValor + segundoValor;
    } else if(sinal === "-"){
        valorResultado = primeiroValor - segundoValor;
    } else if(sinal === "x"){
        valorResultado = primeiroValor * segundoValor;
    } else if(sinal === "/"){
        valorResultado = primeiroValor / segundoValor;
    } 
    resultado.innerHTML = valorResultado;
    primeiroValor = valorResultado;
    segundoValor = "";

    checarComprimentoResultado();
})

function checarComprimentoResultado(){
    valorResultado = JSON.stringify(valorResultado);

    if(valorResultado.length >= 0) {
        valorResultado = JSON.parse(valorResultado);
        resultado.innerHTML = valorResultado.toFixed(5);
    }
}

negativo.addEventListener('click', () => {
    resultado.innerHTML = "";
    if(primeiroValor != ""){
        valorResultado = -primeiroValor;
        primeiroValor = valorResultado;
    }
    if(primeiroValor != "" && segundoValor != "" && sinal != ""){
        valorResultado = -valorResultado;
    }

    resultado.innerHTML = valorResultado;
})

porcentagem.addEventListener('click', () => {
    resultado.innerHTML = "";
    if(primeiroValor != ""){
        valorResultado = primeiroValor / 100;
        primeiroValor = valorResultado;
    }
    if(primeiroValor != "" && segundoValor != "" && sinal != ""){
        valorResultado = valorResultado / 100;
    }

    resultado.innerHTML = valorResultado;
})

limpar.addEventListener('click', () => {
    resultado.innerHTML = 0;
    
    primeiroValor = "";
    ehPrimeiroValor = false;
    segundoValor = "";
    ehSegundoValor = false;
    sinal = "";
    valorResultado = 0;
})