// Exercício 12 — Login com Nível de Acesso

// Solicite:

// usuário
// senha
// nível de acesso (1, 2 ou 3)

// Regras:

// Se usuário e senha estiverem corretos:

// nível 1 → Acesso básico
// nível 2 → Acesso intermediário
// nível 3 → Acesso administrador


// Caso usuário ou senha estejam errados:

// mostrar Usuário ou senha inválidos

const rl = require("readline-sync")

const usuarioCorreto = "admin"
const senhaCorreta = "1234"

let usuario = rl.question("Qual o Usuario: ")
let senha = rl.question("Digite a senha: ") 
let acesso = rl.questionInt("Digite seu nivel de acesso: ")

if (usuario === usuarioCorreto && senha === senhaCorreta) {
  
    if (acesso === 1) {
        console.log("Acesso básico")
    } else if (acesso === 2) {
        console.log("Acesso intermediário")
    } else if (acesso === 3) {
        console.log("Acesso administrador")
    } else {
        console.log("Nível de acesso inválido!")
    }
} else {
    console.log("Usuário ou senha inválidos")
}
