/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Ana Luiza de Assis
*/

const teclado = require (`prompt-sync`)();


console.log (`* ------------------------------------- *`);
console.log (`* Digite três números inteiro distintos *`);
console.log (`* ------------------------------------- *`);


let n1: number = parseInt (teclado (`Insira o primeiro número inteiro aqui:`));
let n2: number = parseInt (teclado (`Insira o segundo número inteiro aqui:`));
let n3: number = parseInt (teclado (`Insira o terceiro número inteiro aqui:`));
let maior: number = 0;
let meio: number = 0;
let menor: number = 0;

console.log (`Esses foram os números escolhidos ${n1}, ${n2} e ${n3}`);

if (n1 > n2 && n1 > n3){
    maior = n1;
    if(n2 > n3){
        meio =  n2;
        menor = n3;
    }
    else if (n3 > n2){
        meio = n3;
        menor = n2;
    }
    else {
        console.log(`Algo deu errado!!`);
    }
}

if (n2 > n1 && n2 > n3){
    maior = n2;
    if(n1 > n3){
        meio =  n1;
        menor = n3;
    }
    else if (n3 > n1){
        meio = n3;
        menor = n1;
    }
    else {
        console.log(`Algo deu errado!!`);
    }
}
if (n3 > n1 && n3 > n2){
    maior = n3;
    if(n2 > n1){
        meio =  n2;
        menor = n1;
    }
    else if (n1 > n2){
        meio = n1;
        menor = n2;
    }
    else {
        console.log(`Algo deu errado!!`);
    }
}


console.log(`Ordem crescente ${menor}, ${meio}, ${maior}`);

