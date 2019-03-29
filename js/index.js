var numeros = document.getElementsByClassName("num");
var display =  document.getElementById("display");
var operacao = document.getElementsByClassName("op");
var operacao_atual;
var decimal = document.getElementById("dec");

function apaga(){
    display.innerText = null;
}

function escreve(num){
    display.innerText += num;
}

decimal.onclick = function(){escreve(decimal.innerText);}

for (let index = 0; index < numeros.length; index++){
    if (index == 0){
        display.innerText = null;
    }
    numeros[index].onclick = function(){ escreve(numeros[index].innerText);}
}

for (let index = 0; index < operacao.length; index++){
    operacao[index].onclick = function(){ 
        escreve(operacao[index].innerText);
        operacao_atual = operacao[index].innerText;
    
    }
}

function calculate(){
    var numero = display.innerText;

    if(numero.indexOf("+") > -1){
        numero = numero.split("+");
        resultado = Number(numero[0]);
        apaga();
        for (let index = 1; index < numero.length; index++) {
            resultado +=   Number(numero[index]);
            
        }
        escreve(resultado);
    }
    else if(numero.indexOf('-') > -1){
        numero = numero.split('-')
        resultado = Number(numero[0]);
        apaga();
        for (let index = 1; index < numero.length; index++) {
            resultado -=   Number(numero[index]);
            
        }
        escreve(resultado);
    }
    else if(numero.indexOf('*') > -1){
        numero = numero.split('*')
        resultado = Number(numero[0]);
        apaga();
        for (let index = 1; index < numero.length; index++) {
            resultado *=   Number(numero[index]);
            
        }
        escreve(resultado);
    }
    else if(numero.indexOf('/')){
        numero = numero.split('/')
        resultado = Number(numero[0]);
        apaga();
        for (let index = 1; index < numero.length; index++) {
            resultado /=   Number(numero[index]);
            
        }
        escreve(resultado);
    }
}