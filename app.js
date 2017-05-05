'use strict';

function init() {
	document.getElementById('btn').addEventListener("click", function(){
    let tipo = document.getElementById('tipo').value;
    let output = document.getElementById('result');
    let temp = document.getElementById('temp').value;
    let text = '';
    if (tipo == 'f') {
    	text = paraFahrenheit(temp);
    } else if(tipo == 'c') {
    	text = paraCelsius(temp);
    } else if (temp == ''){
    	text = 'Digite a temperatura.';
    } else {
    	text = 'Escolha o tipo.';
    }

    if (isNaN(text)) {
    	output.innerHTML = 'A temperatura fornecida n&atilde;o &eacute; um numero valido.'
    } else {
    	output.innerHTML = text;
    }
	});
}

function paraCelsius(valor) {
	let resp = ((5 * valor) - 160) / 9;
	return resp;
}

function paraFahrenheit(valor) {
	let resp = ((9*valor) + 160) / 5;
	return resp;
}