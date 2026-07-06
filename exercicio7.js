// Exercício 7 — Verificação de Número


// Solicite um número inteiro e informe:

// Se ele é positivo, negativo ou zero
// E também se ele é par ou ímpar


// Exemplo:

// Digite um número: -7
// Número negativo e ímpar

const rl = require("readline-sync")

let numero = rl.questionInt("Digite um numero: ")

if (numero === 0 ) {
    console.log("Zero")
} else if (numero > 0 && numero % 2 === 0 ) {
    console.log("Número Positivo e Par")
} else if (numero > 0 && numero % 2 !== 0 ) {
    console.log("Número Positivo e Ímpar")
} else if (numero < 0 && numero % 2 === 0 ) {
    console.log("Negativo e Par")
} else {
    console.log("Número negativo E Ímpar")
}