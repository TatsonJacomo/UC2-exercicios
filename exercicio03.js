          // Exercício 3 — Par ou Ímpar


// Peça um número.

// Utilize %.

// Exiba:

// Número Par
// ou

// Número Ímpar

const rl = require("readline-sync")

let number = rl.questionInt("Digite um numero: ")

if (number % 2 == 0) {
    console.log("Numero Par!")
} else {
    console.log("Número Ímpar!")
}
