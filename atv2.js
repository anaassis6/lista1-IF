/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
Nome Aluno: Ana Luiza de Assis
*/
var teclado = require("prompt-sync")();
var n1 = teclado("Digite um n\u00FAmero aqui:");
var n2 = teclado("Digite o segundo n\u00FAmero aqui:");
console.log("O n\u00FAmero x \u00E9 ".concat(n1, " e o n\u00FAmero y \u00E9 ").concat(n2));
var n3 = n1;
n1 = n2;
n2 = n3;
console.log("Agora o n\u00FAmero x \u00E9 ".concat(n1, " e o n\u00FAmero y \u00E9 ").concat(n2));
