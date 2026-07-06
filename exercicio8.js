// Exercício 8 — Maior entre Três Números

// Peça três números e informe qual é o maior deles.

// Exemplo:

// Digite o primeiro número: 8
// Digite o segundo número: 12
// Digite o terceiro número: 5

// Maior número: 12

const rl = require("readline-sync")

let numero1 = rl.questionInt("Digite o primeiro numero: ")
let numero2 = rl.questionInt("Digite o segundo numero: ")
let numero3 = rl.questionInt("Digite o terceiro numero: ")

if (numero1 >= numero2 && numero1 >= numero3) {
    console.log(`Maior numero: ${numero1}`)
} else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log(`Maior numero: ${numero2}`)
}else {
    console.log(`Maior numero: ${numero3}`)
}