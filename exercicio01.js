                // Exercício 1 — Maior de Idade


    // Peça a idade do usuário.

                   // Se for maior ou igual a 18:

                 // Maior de idade

         // Caso contrário:

       // Menor de idade


const rl = require("readline-sync")

let idade = rl.question("Qual sua idade? ")

if (idade >=18) {
    console.log("Maior de idade!")
} else {
    console.log("Menor de idade!")}
