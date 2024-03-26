/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o
número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é
${variavel}`, se ser iguais uma frase: ` Os números ${variavel} e ${variavel} são iguais`.
Nome: Ana Luiza de Assis
*/

const teclado = require (`prompt-sync`)();

console.log (`* Digite dois números *`);

let n1: number = parseInt (teclado (`Primeiro número:`));
let n2: number = parseInt (teclado (`Segundo número:`));

if (n1 > n2){
    console.log (`O número maior é ${n1} e o número menor é
${n2}`);
}

else if (n2 > n1){
    console.log (`O número maior é ${n2} e o número menor é
${n1}`);
}


else if ( n1 == n2){
    console.log (`Os números ${n1} e ${n2} são iguais`);
}

else {
    console.log (`Algo deu errado!!`);
}
