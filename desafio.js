// Pedra, Papel ou Tesoura

// O computador escolhe:

// // Còdigo para gerar um número aleatório entre 0 e 3
// let computador = Math.floor(Math.random() * 3);


// Representando:

// 0 = Pedra
// 1 = Papel
// 2 = Tesoura
// O usuário escolhe uma opção.

// Determine:

// Vitória
// Derrota
// Empate
// Utilizando estruturas condicionais.

const rl = require("readline-sync")


let computador = Math.floor(Math.random() * 3);

let escolha =rl.questionInt('Escolha a opcao:\n[0] - Pedra \n[1] - Papel\n[2] - Tesoura\n: ')

// 0 = Pedra
// 1 = Papel
// 2 = Tesoura

if (escolha >= 0 && escolha <= 2) {

    if ((escolha == 0 && computador == 2) || (escolha == 1 && computador == 0) || (escolha == 2 && computador == 1)) {
        console.log("Venceu!")
    } else if (escolha === computador) {
        console.log("Empate!")
        } else {
            console.log("Perdeu!")
        }
}
else {
    console.log("Opção invalida")
}
