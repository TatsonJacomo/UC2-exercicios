// Exercício 4 — Aprovação com Frequência

// Solicite:

// Nota final
// Frequência (%)


// Regras:

// Se frequência for menor que 75%:

// Reprovado por frequência


// Caso contrário:

// Nota ≥ 7 → Aprovado
// Nota ≥ 5 → Recuperação
// Nota < 5 → Reprovado


const rl = require("readline-sync")

let nota = rl.questionFloat("Qual a nota final: ")
let frequencia = rl.questionInt("Qual a sua frequencia (%): ")

if (frequencia >= 75) {
    if (nota >= 7) {
    console.log("Aprovado")
}
else if (nota >= 5) {
    console.log("Em Recuparação")
}
else {
    console.log("Reprovado")
}
}
else {
    console.log("Reprovado por frequencia")
}
