
                                // Operadores Lógicos


         // Operador E (&&)

        // As duas condições precisam ser verdadeiras.

const rl = require("readline-sync")

let idade = rl.question("Qual sua idade? ")
let possuiCNH = rl.keyInYN("Possui CNH? ")


if ((idade >= 18 && idade <= 60) && possuiCNH == true) {
    console.log('✅ Pode dirigir');
} else {
    console.log("⚠️  Não pode dirigir!")
}


console.log(" ")
console.log(" ")



         // Operador OU (||)

        //  Apenas uma condição precisa ser verdadeira.

let possuiIngresso = rl.keyInYN("Tem ingresso: ");
let nomeNaLista = rl.keyInYN("Tem nome na lista: ");

if (possuiIngresso || nomeNaLista) {
    console.log('Entrada liberada');
} else {
    console.log("Você não passar!")
}
   

console.log(" ")
console.log(" ")


           // Operador NÃO (!)

          // Inverte o valor.

let chovendo = false;

if (!chovendo) {
    console.log('Pode sair!');
} else {
    console.log('Pegue um guarda-chuva!')
}

