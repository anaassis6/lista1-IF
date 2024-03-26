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

let cont: number = 0;
const teclado = require (`prompt-sync`)();

console.log (`* ------------------------------------------- *`);
console.log (`* Caso a resposta seja SIM, digite o número 1 *`);
console.log (`* Caso a resposta seja NÃO, digite o número 0 *`);
console.log (`* ------------------------------------------- *`);


let pergunta1: number = teclado (`Telefonou para a vítima?`);
if (pergunta1 == 1){ cont ++}

let pergunta2: number  = teclado (`Esteve no local do crime?`);
if (pergunta2 == 1){ cont ++}

let pergunta3: number  = teclado (`Mora perto da vítima?`);
if (pergunta3 == 1){ cont ++}

let pergunta4: number  = teclado (`Devia para a vítima?`);
if (pergunta4 == 1){ cont ++}

let pergunta5: number  = teclado (`Já trabalhou com a vítima?`);
if (pergunta5 == 1){ cont ++}

if (cont==0 || cont==1){
    console.log(`Inocente!!`);
}
else if (cont == 2){
    console.log (`Suspeita!!`);
}
else if (cont == 3 || cont == 4){
    console.log (`Cúmplice!!`);
}
else if (cont == 5){
    console.log (`Assassino!!`);
}
