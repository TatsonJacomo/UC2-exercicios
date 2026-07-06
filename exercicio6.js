// Exercícios Extras — Nível Básico


// Exercício 6 — Classificação de Nota por Conceito

// Solicite a nota de um aluno de 0 a 10.


// Exiba:

// Nota maior ou igual a 9 → Conceito A
// Nota maior ou igual a 7 → Conceito B
// Nota maior ou igual a 5 → Conceito C
// Abaixo de 5 → Conceito D


// Exemplo:

// Digite a nota: 8
// Conceito B


const rl = require("readline-sync")

let nota = rl.questionInt("Qual sua nota: ")

if (nota >= 9 ) {
    console.log("Conceito A")
} else if (nota >= 7 ) {
    console.log("Conceito B")
} else if (nota >=5 ) {
    console.log("Conceito C")
} else {
    console.log("Conceito D")
}