/* (10 pontos)
7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
Nome Aluno: Ana Luiza de Assis
E-mail: analuassis6@gmail.com
*/
var teclado = require("prompt-sync")();
var n1 = 0.30;
var n2 = 0.25;
var n3 = parseInt(teclado("Qual a quantidade de ma\u00E7\u00E3s comprada?"));
var n4 = n3 * n1;
var n5 = n3 * n2;
if (n3 <= 11) {
    console.log("O valor da sua compra \u00E9 ".concat(n4));
}
else if (n3 >= 12) {
    console.log("O valor da sua compra \u00E9 ".concat(n5));
}
