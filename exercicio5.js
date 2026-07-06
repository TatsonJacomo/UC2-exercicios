// Exercício 5 — Calculadora de IMC

// Solicite:

// Peso
// Altura
// Calcule o IMC.

// Classifique:

// Abaixo de 18.5 → Abaixo do peso
// 18.5 a 24.9 → Peso normal
// 25 a 29.9 → Sobrepeso
// 30 ou mais → Obesidade

const rl = require("readline-sync")

let peso = rl.questionFloat("Qual o seu peso [kg]: ")
let altura = rl.questionFloat("Qual sua altura [m]: ")

let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Abaixo do peso`)
}
else if (imc <= 24.9 ) {
    console.log (`Seu IMC é ${imc.toFixed(2)}. Sobrepeso`)
}
else {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Obesidade`)
}

//outra forma de fazer altura ao quadrado
// altura ** 2 (potenciação)

