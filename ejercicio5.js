'use strict';

let numero;

function ingresar(){
    do {
        numero = +prompt('Ingrese un número');
    } while (numero == '' || numero == ' ' || isNaN(numero));
}

function mostrar(){
    if (numero % 2 == 0){
        alert('Es un número par');
    } else if (numero % 2 == 1){
        alert('Es un número impar');
    }
}