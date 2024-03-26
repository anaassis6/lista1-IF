/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, tal que 0 é
a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), conforme a
seguinte tabela:
A - nota=&gt;8,5 nota=&lt;10
B - nota=&gt;7 nota&lt;8,5
C - nota=&gt;5 nota&lt;7
D - nota=&gt;3 nota&lt;5
E - nota&gt;3
Nome Aluno: Ana Luiza de Assis
*/
var teclado = require("prompt-sync")();
console.log("* Digite a nota 1 e 2: *");
var n1 = parseFloat(teclado("Nota 1:"));
var n2 = parseFloat(teclado("Nota 2:"));
var media = (n1 + n2) / 2;
console.log("Sua m\u00E9dia \u00E9 ".concat(media));
if (media >= 8.5 && media <= 10) {
    console.log("Sua nota \u00E9 \"A\"");
}
else if (media < 8.5 && media >= 7) {
    console.log("Sua nota \u00E9 \"B\"");
}
else if (media < 7 && media >= 5) {
    console.log("Sua nota \u00E9 \"C\"");
}
else if (media < 5 && media >= 3) {
    console.log("Sua nota \u00E9 \"D\"");
}
else if (media < 3) {
    console.log("Sua nota \u00E9 \"E\"");
}
else {
    console.log("Algo deu errado!");
}
