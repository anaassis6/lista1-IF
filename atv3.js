/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno: Ana Luiza de Assis
*/
var teclado = require("prompt-sync")();
var letra = teclado("Digite a letra: ");
if (letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U") {
    console.log("A letra digitada \u00E9 uma vogal");
}
else {
    console.log("Isso \u00E9 uma consoante");
}
