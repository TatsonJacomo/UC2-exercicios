// Exercício 13 — Cálculo de Frete

// Solicite o valor da compra e a região de entrega:

// "sul"
// "sudeste"
// "centro-oeste"
// "nordeste"
// "norte"

// Regras:

// Se a compra for acima de R$ 200, o frete é grátis. Caso contrário:

// Sul → R$ 20
// Sudeste → R$ 25
// Centro-Oeste → R$ 30
// Nordeste → R$ 35
// Norte → R$ 40

// Mostrar valor da compra, região e valor do frete.

const rl = require("readline-sync")

let compra = rl.question("Qual valor da compra: ")
let frete = 0
let regiao = rl.question("Qual regiao para entrega: ")

    if (compra <= 200) {
        if (regiao === "sul") frete = 20
        else if (regiao === "sudeste") frete = 25
        else if (regiao === "centro-oeste") frete = 30
        else if (regiao === "nordeste") frete = 35
        else if (regiao === "norte") frete = 40
    }

    {
    console.log(`Compra: R$ ${compra} | Região: ${regiao} | Frete: R$ ${frete}`)
}

