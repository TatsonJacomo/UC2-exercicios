// Exercício 2 — Triângulo


// Peça três lados.

// Verifique:

// Equilátero → todos iguais
// Isósceles → dois iguais
// Escaleno → todos diferentes



const rl = require("readline-sync")

let lado1 = rl.questionInt("Digite um numero para o lado 1: ")
let lado2 = rl.questionInt("Digite um numero para o lado 2: ")
let lado3 = rl.questionInt("Digite um numero para o lado 3: ")

if(lado1 ===lado2 && lado1 === lado3) {
    console.log("Equilatero (Todos Iguais)")
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("Isósceles (Dois iguais)")
}
else {
    console.log("Escaleno (Todos Diferentes)")
}
