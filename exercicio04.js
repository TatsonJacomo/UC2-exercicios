        // Exercício 4 — Aprovação Escolar


             // Peça a nota do aluno.

        // Regras:

// Nota ≥ 7 → Aprovado
// Nota ≥ 5 → Recuperação
// Nota < 5 → Reprovado


const rl = require("readline-sync")

let nota = rl.questionInt("Qual a nota do aluno? ")

if (nota >= 7) {
    console.log("Aprovado!")
} 
else if (nota >= 5) {
    console.log("Recuperação!")
}  
else  {
    console.log("Reprovado!")
}