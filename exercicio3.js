// Exercício 3 — Desconto Progressivo

// Peça o valor da compra.

// Regras:

// Até R$100 → sem desconto
// Até R$300 → 5%
// Até R$500 → 10%
// Acima de R$500 → 15%
// Mostrar:

// Valor original
// Percentual aplicado
// Valor final


const rl = require("readline-sync")

let valorCompra = rl.questionFloat("Qual valor da compra: R$ ")

let valorTotal = valorCompra
let desconto = 0

if (valorCompra <= 100) {
    console.log("Sem desconto")
}
else if (valorCompra <= 300) {
    console.log("5% de Desconto")
    desconto = valorCompra * (5 / 100)
    valorTotal = valorCompra - desconto
}
else if (valorCompra <= 500) {
    console.log("10% de Desconto")
    desconto = valorCompra * (10 / 100)
    valorTotal = valorCompra - desconto
}
else {
    console.log("15% de Desconto")
    desconto = valorCompra * (15 / 100)
    valorTotal = valorCompra - desconto
}
console.log(`O valor da compra ficou: R$ ${valorTotal}!`)
