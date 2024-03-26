/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo
é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno:Ana Luiza de Assis
E-mail: analuassis6@gmail.com
*/
var teclado = require("prompt-sync")();
var n1 = 90;
console.log("* Digite o valor dos tr\u00EAs \u00E2ngulos do tri\u00E2ngulo *");
var an1 = parseFloat(teclado("Primeiro \u00E2ngulo:"));
var an2 = parseFloat(teclado("Segundo \u00E2ngulo:"));
var an3 = parseFloat(teclado("Terceiro \u00E2ngulo:"));
if (an1 == n1 || an2 == n1 || an3 == n1) {
    console.log("O tri\u00E2ngulo \u00E9 um tri\u00E2ngulo ret\u00E2ngulo");
}
else if (an1 > n1 || an2 > n1 || an3 > n1) {
    console.log("O tri\u00E2ngulo \u00E9 um tri\u00E2ngulo obtus\u00E2ngulo");
}
else if (an1 < n1 && an2 < n1 && an3 < n1) {
    console.log("O tri\u00E2ngulo \u00E9 um tri\u00E2ngulo acut\u00E2ngulo");
}
else {
    console.log("Algo deu errado!!");
}
