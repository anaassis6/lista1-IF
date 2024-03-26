/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo
é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno:Ana Luiza de Assis
E-mail: analuassis6@gmail.com
*/
const teclado = require (`prompt-sync`)();

const n1: number = 90;
 
console.log(`* Digite o valor dos três ângulos do triângulo *`);
let an1: number = parseFloat(teclado(`Primeiro ângulo:`));
let an2: number = parseFloat(teclado(`Segundo ângulo:`));
let an3: number = parseFloat(teclado(`Terceiro ângulo:`));

if (an1 == n1 || an2 == n1 || an3 == n1){
    console.log (`O triângulo é um triângulo retângulo`);
}
else if (an1 > n1 || an2 > n1 || an3 > n1){
    console.log (`O triângulo é um triângulo obtusângulo`);
}
else if (an1 < n1 && an2 < n1 && an3 < n1){
    console.log (`O triângulo é um triângulo acutângulo`);
}
else {
    console.log (`Algo deu errado!!`);
}

