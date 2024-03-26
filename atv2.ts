/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
Nome Aluno: Ana Luiza de Assis
*/
const teclado = require (`prompt-sync`)();


let n1: number = teclado (`Digite um número aqui:`);
let n2: number = teclado (`Digite o segundo número aqui:`);

console.log (`O número x é ${n1} e o número y é ${n2}`);

let n3: number = n1;
n1 = n2; 
n2 = n3;

console.log (`Agora o número x é ${n1} e o número y é ${n2}`);




