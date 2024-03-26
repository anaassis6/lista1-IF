/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas
são:

&quot;Telefonou para a vítima?&quot;
&quot;Esteve no local do crime?&quot;
&quot;Mora perto da vítima?&quot;
&quot;Devia para a vítima?&quot;
&quot;Já trabalhou com a vítima?&quot;
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se
a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como
&quot;Suspeita&quot;, entre 3 e 4 como &quot;Cúmplice&quot; e 5 como &quot;Assassino&quot;. Caso contrário, ele será
classificado como &quot;Inocente&quot;.
Aluno:
*/
var cont = 0;
var teclado = require("prompt-sync")();
console.log("* ------------------------------------------- *");
console.log("* Caso a resposta seja SIM, digite o n\u00FAmero 1 *");
console.log("* Caso a resposta seja N\u00C3O, digite o n\u00FAmero 0 *");
console.log("* ------------------------------------------- *");
var pergunta1 = teclado("Telefonou para a v\u00EDtima?");
if (pergunta1 == 1) {
    cont++;
}
var pergunta2 = teclado("Esteve no local do crime?");
if (pergunta2 == 1) {
    cont++;
}
var pergunta3 = teclado("Mora perto da v\u00EDtima?");
if (pergunta3 == 1) {
    cont++;
}
var pergunta4 = teclado("Devia para a v\u00EDtima?");
if (pergunta4 == 1) {
    cont++;
}
var pergunta5 = teclado("J\u00E1 trabalhou com a v\u00EDtima?");
if (pergunta5 == 1) {
    cont++;
}
if (cont == 0 || cont == 1) {
    console.log("Inocente!!");
}
else if (cont == 2) {
    console.log("Suspeita!!");
}
else if (cont == 3 || cont == 4) {
    console.log("C\u00FAmplice!!");
}
else if (cont == 5) {
    console.log("Assassino!!");
}
