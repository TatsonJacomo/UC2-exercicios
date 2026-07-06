// Exercício 11 — Tipo de Eleitor

// Solicite a idade da pessoa e informe:

// Menor de 16 → Não vota
// 16 ou 17 → Voto facultativo
// 18 a 69 → Voto obrigatório
// 70 ou mais → Voto facultativo

const rl = require("readline-sync")

let idade = rl.questionInt("Qual sua idade: ")

if (idade < 16) {
    console.log("Não vota")
} else if (idade === 16 || idade === 17) {
    console.log("Voto Facultativo")
} else if (idade === 18 || idade <= 69 ) {
    console.log("Voto Obrigátorio")
} else {
    console.log("Voto Facultativo")
}