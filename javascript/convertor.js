let Conversor = '';
let Temperatura;
let Resultado;

function limpar(){
    document.querySelector('#Temperatura').value = '';
    document.querySelector('#Conversor').innerHTML = '-';
    document.querySelector('#Resultado').value = '';
}

function Calcular(){
    Conversor = document.querySelector('#Conversor').value;

    if (Conversor == '1') {
        converterCelsius();
    }
    if (Conversor == '2') {
        converterFahrenheit();
    }
    if (Conversor == ''){
        alert('')
    }
}

function converterCelsius(){
    Temperatura = parseInt(document.querySelector('#Temperatura').value);

    Resultado = ((Temperatura * 1.8) + 32)

    document.querySelector('#Resultado').innerHTML = Resultado
}

function converterFahrenheit(){
    Temperatura = parseInt(document.querySelector('#Temperatura').value);

    Resultado = ((Temperatura - 32) / 1.8)

    document.querySelector('#Resultado').innerHTML = Resultado
}

