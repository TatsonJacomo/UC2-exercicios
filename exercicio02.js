                      // Exercício 2 — Número Positivo


      // Peça um número.

    // Verifique:

   // positivo;
  // negativo;
 // zero.

 const rl = require("readline-sync")

 let number = rl.questionInt("Digite um numero: ")

 if (number > 0) {
    console.log("O numero e positivo!✔️")
 } else if (number <0) {
    console.log("O numero e negativo!➖")
 } else {
    console.log("Zero!")
 }