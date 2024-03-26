/* (10 pontos)
7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
Nome Aluno: Ana Luiza de Assis
E-mail: analuassis6@gmail.com
*/
const teclado = require (`prompt-sync`)();

const n1: number = 0.30;
const n2: number = 0.25;

let n3: number = parseInt (teclado(`Qual a quantidade de maçãs comprada?`));

let n4: number = n3 * n1;
let n5: number = n3 *n2;

if (n3 <= 11){
    console.log (`O valor da sua compra é ${n4}`);
}
else if (n3 >= 12 ){
    console.log (`O valor da sua compra é ${n5}`);
}