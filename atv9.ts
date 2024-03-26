/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça um
aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou
não, caso não diga o(s) motivo(s).
Nome: Ana Luiza de Assis
*/
const teclado = require (`prompt-sync`)();

console.log(` * Preencha as informações a seguir: * `);

let idade: number = parseInt(teclado(`Idade:`));
let peso: number = parseFloat(teclado(`Peso:`));

if(idade >= 18 && idade <= 67){
    console.log (`Sua idade permite realizar doações!`);
}
else {
    console.log (`Sua idade não permite realizar doações!`);

}


if (peso > 60) {
    console.log (`Seu peso permite realizar doações!`);
}
else{
    console.log (`Seu peso não permite realizar doações!`);
}


if (idade >= 18 && idade <= 67 && peso > 60) {
    console.log(`* Seus dados permitem que você realize doações! Obrigada pela iniciativa! *`);
}
else {
    console.log (`* Seus dados não permitem que você realize doações! Sentimos muito e obrigada pela iniciativa! *`);
}



