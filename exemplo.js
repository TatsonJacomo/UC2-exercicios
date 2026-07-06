const rl = require("readline-sync");

let idade = rl.questionInt("Qual a sua idade: "); 

if (idade >= 18) { 

    let cnh = rl.keyInYN("Possui CNH?"); 

    if (cnh === true) { 
        console.log("Pode dirigir!"); 
    } else { 
        console.log("Precisa tirar a CNH!"); 
    } 
    
} else { 
    console.log("Você e menor de idade"); 
}
