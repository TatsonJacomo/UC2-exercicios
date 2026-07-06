// Exercícios Extras — Nível Intermediário

// Exercício 10 — Cálculo de Imposto

// Solicite o salário de um funcionário.

// Aplicar:

// Até R$ 2.000 → isento
// Até R$ 4.000 → 7,5%
// Até R$ 6.000 → 15%
// Acima de R$ 6.000 → 22%


// Mostrar:

// salário informado
// percentual aplicado
// valor do imposto
// salário líquido


const rl = require("readline-sync")

let salario = rl.questionFloat("Qual seu salrio: ")
let percentual = 0


if (salario <= 2000 ) {
    console.log("Isento")
} else if (salario <= 4000) {
    percentual = 7.5
    console.log("Imposto de 7,5%")
} else if (salario <= 6000) {
    percentual = 15
    console.log("Imposto de 15%")
} else {
    percentual = 22
    console.log("Imposto de 22%")
}

let valorImposto = salario * (percentual / 100)
console.log("O Salario informado: " + salario)
console.log(`percentual aplicado: ${percentual}%`)
console.log(`Valor do imposto: ${salario * (percentual / 100)}`)
console.log(`Salario liquido: ${salario - valorImposto}`)