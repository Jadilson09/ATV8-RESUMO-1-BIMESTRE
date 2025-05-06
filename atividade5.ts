/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno: Jadson Santos Oliveira
*/
console.log()
let teclado = require (`prompt-sync`)(); 

let nota1 : number = parseInt(teclado(`Escreva o primeira nota: `));
let nota2 : number = parseInt(teclado(`Escreva o segunda nota: `));
let nota3 : number = parseInt(teclado(`Escreva o terceira nota: `));
let nota4 : number = parseInt(teclado(`Escreva o quarta nota: `));
let nota5 : number = parseInt(teclado(`Escreva o quinta nota: `));
let maior: number = 0
let menor: number = 0

if (nota1 > nota2 && nota1 > nota3 && nota1 > nota4 && nota1 > nota5){
    maior = nota1;
    if (nota2 < nota3 && nota2 < nota4 && nota2 < nota5){
        menor = nota2;
    }
    else if (nota3 < nota2 && nota3 < nota4 && nota3 < nota5){
        menor = nota3;
    }
    else if (nota4 < nota2 && nota4 < nota3 && nota4 < nota5){
        menor = nota4;
    }
    else if (nota5 < nota2 && nota5 < nota3 && nota5 < nota4){
        menor = nota5;
    }
}
if (nota2 > nota1 && nota2 > nota3 && nota2 > nota4 && nota2 > nota5){
    maior = nota2;
    if (nota1 < nota3 && nota1 < nota4 && nota1 < nota5){
        menor = nota1;
    }
    else if (nota3 < nota1 && nota3 < nota4 && nota3 < nota5){
        menor = nota3;
    }
    else if (nota4 < nota1 && nota4 < nota3 && nota4 < nota5){
        menor = nota4;
    }
    else if (nota5 < nota1 && nota5 < nota3 && nota5 < nota4){
        menor = nota5;
    }
}
if (nota3 > nota2 && nota3 > nota1 && nota3 > nota4 && nota3 > nota5){
    maior = nota3;
    if (nota2 < nota1 && nota2 < nota4 && nota2 < nota5){
        menor = nota2;
    }
    else if (nota1 < nota2 && nota1 < nota4 && nota1 < nota5){
        menor = nota1;
    }
    else if (nota4 < nota2 && nota4 < nota1 && nota4 < nota5){
        menor = nota4;
    }
    else if (nota5 < nota2 && nota5 < nota1 && nota5 < nota4){
        menor = nota5;
    }
}
if (nota4 > nota2 && nota4 > nota3 && nota4 > nota1 && nota4 > nota5){
    maior = nota4;
    if (nota2 < nota3 && nota2 < nota1 && nota2 < nota5){
        menor = nota2;
    }
    else if (nota3 < nota2 && nota3 < nota1 && nota3 < nota5){
        menor = nota3;
    }
    else if (nota1 < nota2 && nota1 < nota3 && nota1 < nota5){
        menor = nota1;
    }
    else if (nota5 < nota2 && nota5 < nota3 && nota5 < nota1){
        menor = nota5;
    }
}
if (nota5 > nota2 && nota5 > nota3 && nota5 > nota4 && nota5 > nota1){
    maior = nota5;
    if (nota2 < nota3 && nota2 < nota4 && nota2 < nota1){
        menor = nota2;
    }
    else if (nota3 < nota2 && nota3 < nota4 && nota3 < nota1){
        menor = nota3;
    }
    else if (nota4 < nota2 && nota4 < nota3 && nota4 < nota1){
        menor = nota4;
    }
    else if (nota1 < nota2 && nota1 < nota3 && nota1 < nota4){
        menor = nota1;
    }
}

let media: number = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

console.log(`O maior nota é ${maior} e o menor é ${menor}, média de todas as notas é ${media}`);