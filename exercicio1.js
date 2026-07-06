// Exercício 1 — Faixa Etária

// Solicite a idade.

// Exiba:

// Criança → até 12 anos
// Adolescente → 13 a 17
// Adulto → 18 a 59
// Idoso → 60 ou mais





const rl = require("readline-sync")

let idade = rl.questionInt("Qual sua idade: ")

if (idade <= 12) {
    console.log("Criança")
}
else if (idade >= 13 && idade <= 17) {
  console.log("Adolescente")
}
else if (idade >= 18 && idade <= 59) {
    console.log("Adulto")
}
else {
        console.log("Idoso")
}