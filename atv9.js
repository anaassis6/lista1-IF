/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça um
aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou
não, caso não diga o(s) motivo(s).
Nome: Ana Luiza de Assis
*/
var teclado = require("prompt-sync")();
console.log(" * Preencha as informa\u00E7\u00F5es a seguir: * ");
var idade = parseInt(teclado("Idade:"));
var peso = parseFloat(teclado("Peso:"));
if (idade >= 18 && idade <= 67) {
    console.log("Sua idade permite realizar doa\u00E7\u00F5es!");
}
else {
    console.log("Sua idade n\u00E3o permite realizar doa\u00E7\u00F5es!");
}
if (peso > 60) {
    console.log("Seu peso permite realizar doa\u00E7\u00F5es!");
}
else {
    console.log("Seu peso n\u00E3o permite realizar doa\u00E7\u00F5es!");
}
if (idade >= 18 && idade <= 67 && peso > 60) {
    console.log("* Seus dados permitem que voc\u00EA realize doa\u00E7\u00F5es! Obrigada pela iniciativa! *");
}
else {
    console.log("* Seus dados n\u00E3o permitem que voc\u00EA realize doa\u00E7\u00F5es! Sentimos muito e obrigada pela iniciativa! *");
}
