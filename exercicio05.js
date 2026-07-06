                   // Exercício 5 — Login Simples


                // Crie:

// let usuarioCorreto = 'admin';
// let senhaCorreta = '1234';

// Peça usuário e senha.



// Se estiver correto:

// Login realizado com sucesso
// Caso contrário:

// Usuário ou senha inválidos


const rl = require("readline-sync")

let usuarioCorreto = "Tatson"
let senhaCorreta = "1234"

let usuario = rl.question("Digte o usuario: ")
let senha = rl.question("Digite a senha: ")

if (usuario == usuarioCorreto && senha == senhaCorreta ) {
    console.log("login realizado com sucesso!✅")
}
else {
    console.log("Credenciais inválidos! 😡")
}