/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Ana Luiza de Assis
*/
var teclado = require("prompt-sync")();
console.log("* ------------------------------------- *");
console.log("* Digite tr\u00EAs n\u00FAmeros inteiro distintos *");
console.log("* ------------------------------------- *");
var n1 = parseInt(teclado("Insira o primeiro n\u00FAmero inteiro aqui:"));
var n2 = parseInt(teclado("Insira o segundo n\u00FAmero inteiro aqui:"));
var n3 = parseInt(teclado("Insira o terceiro n\u00FAmero inteiro aqui:"));
var maior = 0;
var meio = 0;
var menor = 0;
console.log("Esses foram os n\u00FAmeros escolhidos ".concat(n1, ", ").concat(n2, " e ").concat(n3));
if (n1 > n2 && n1 > n3) {
    maior = n1;
    if (n2 > n3) {
        meio = n2;
        menor = n3;
    }
    else if (n3 > n2) {
        meio = n3;
        menor = n2;
    }
    else {
        console.log("Algo deu errado!!");
    }
}
if (n2 > n1 && n2 > n3) {
    maior = n2;
    if (n1 > n3) {
        meio = n1;
        menor = n3;
    }
    else if (n3 > n1) {
        meio = n3;
        menor = n1;
    }
    else {
        console.log("Algo deu errado!!");
    }
}
if (n3 > n1 && n3 > n2) {
    maior = n3;
    if (n2 > n1) {
        meio = n2;
        menor = n1;
    }
    else if (n1 > n2) {
        meio = n1;
        menor = n2;
    }
    else {
        console.log("Algo deu errado!!");
    }
}
console.log("Ordem crescente ".concat(menor, ", ").concat(meio, ", ").concat(maior));
