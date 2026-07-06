// Exercício 14 — Sistema de Desconto por Cliente VIP


// Solicite:

// valor da compra
// se o cliente é VIP (true ou false)

// Regras:

// Se for VIP:

// até R$100 → 5%
// até R$300 → 10%
// acima de R$300 → 15%


// Se não for VIP:

// até R$100 → sem desconto
// até R$300 → 5%
// acima de R$300 → 10%


// Mostrar:

// tipo do cliente
// percentual aplicado
// valor final



const rl = require("readline-sync")

let desconto = 0
let cliente = rl.keyInYN("O cliente é VIP? ")
let valorDaCompra = (rl.questionInt("Qual o valor da compra? "))

if (cliente) {
    if (valorDaCompra <= 100) {
        desconto = 5
    } else if (valorDaCompra <= 300) {
        desconto = 10
    } else {
        desconto = 15
    }
} else {
    if (valorDaCompra <= 100) {
        desconto = 0
    } else if (valorDaCompra <= 300) {
        desconto = 5
    } else {
        desconto = 10
    }
}

let valorFinal = valorDaCompra - (valorDaCompra * desconto / 100)

console.log(`Tipo do cliente: ${cliente ? "VIP" : "Normal"}`)
console.log(`Percentual aplicado: ${desconto}%`)
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`)