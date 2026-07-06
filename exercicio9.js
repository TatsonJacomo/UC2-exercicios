// Exercício 9 — Ano Bissexto (versão simplificada)

// Solicite um ano e informe se ele é bissexto ou não bissexto.

// Regra simplificada para esta atividade: Se o ano for divisível por 4, considere bissexto.

// Exemplo:

// Digite o ano: 2024
// Ano bissexto



// O ano precisa ser divisível por 4 para ser bissexto

const rl = require("readline-sync")

let ano = rl.questionInt("Digite o ano: ")

if (ano % 4 === 0) {
    console.log("Ano Bissexto")
} else {
    console.log("Ano Não Bissexto")
}