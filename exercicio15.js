// Exercício 15 — Pode Fazer a Prova?

// Solicite:

// nome do aluno
// percentual de frequência
// se entregou o trabalho final (true ou false)


// Regras:

// Se a frequência for menor que 75%:


// Aluno impedido de fazer a prova final por falta


// Se a frequência for suficiente:

// Se entregou o trabalho final → Pode fazer a prova
// Caso contrário → Não pode fazer a prova, trabalho pendente



const rl = require("readline-sync")

let nome = rl.question("Nome do aluno: ")
let frequencia = (rl.questionInt("Percentual de frequencia: "))
let trabalhoFinal = rl.keyInYN("Entregou o trabalho final? ")

console.log(`\nAluno: ${nome}`)

if (frequencia < 75) {
       console.log("Aluno impedido de fazer a prova final por falta.")
} else {
    if (trabalhoFinal) {
        console.log("Pode fazer a prova.")
} else {
        console.log("Nao pode fazer a prova, trabalho pendente.")
    }
}