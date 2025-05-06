/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno: Jadson Santos Oliveira
*/
console.log();
var teclado = require("prompt-sync")();
var nota1 = parseInt(teclado("Escreva o primeira nota: "));
var nota2 = parseInt(teclado("Escreva o segunda nota: "));
var nota3 = parseInt(teclado("Escreva o terceira nota: "));
var nota4 = parseInt(teclado("Escreva o quarta nota: "));
var nota5 = parseInt(teclado("Escreva o quinta nota: "));
var maior = 0;
var menor = 0;
if (nota1 > nota2 && nota1 > nota3 && nota1 > nota4 && nota1 > nota5) {
    maior = nota1;
    if (nota2 < nota3 && nota2 < nota4 && nota2 < nota5) {
        menor = nota2;
    }
    else if (nota3 < nota2 && nota3 < nota4 && nota3 < nota5) {
        menor = nota3;
    }
    else if (nota4 < nota2 && nota4 < nota3 && nota4 < nota5) {
        menor = nota4;
    }
    else if (nota5 < nota2 && nota5 < nota3 && nota5 < nota4) {
        menor = nota5;
    }
}
if (nota2 > nota1 && nota2 > nota3 && nota2 > nota4 && nota2 > nota5) {
    maior = nota2;
    if (nota1 < nota3 && nota1 < nota4 && nota1 < nota5) {
        menor = nota1;
    }
    else if (nota3 < nota1 && nota3 < nota4 && nota3 < nota5) {
        menor = nota3;
    }
    else if (nota4 < nota1 && nota4 < nota3 && nota4 < nota5) {
        menor = nota4;
    }
    else if (nota5 < nota1 && nota5 < nota3 && nota5 < nota4) {
        menor = nota5;
    }
}
if (nota3 > nota2 && nota3 > nota1 && nota3 > nota4 && nota3 > nota5) {
    maior = nota3;
    if (nota2 < nota1 && nota2 < nota4 && nota2 < nota5) {
        menor = nota2;
    }
    else if (nota1 < nota2 && nota1 < nota4 && nota1 < nota5) {
        menor = nota1;
    }
    else if (nota4 < nota2 && nota4 < nota1 && nota4 < nota5) {
        menor = nota4;
    }
    else if (nota5 < nota2 && nota5 < nota1 && nota5 < nota4) {
        menor = nota5;
    }
}
if (nota4 > nota2 && nota4 > nota3 && nota4 > nota1 && nota4 > nota5) {
    maior = nota4;
    if (nota2 < nota3 && nota2 < nota1 && nota2 < nota5) {
        menor = nota2;
    }
    else if (nota3 < nota2 && nota3 < nota1 && nota3 < nota5) {
        menor = nota3;
    }
    else if (nota1 < nota2 && nota1 < nota3 && nota1 < nota5) {
        menor = nota1;
    }
    else if (nota5 < nota2 && nota5 < nota3 && nota5 < nota1) {
        menor = nota5;
    }
}
if (nota5 > nota2 && nota5 > nota3 && nota5 > nota4 && nota5 > nota1) {
    maior = nota5;
    if (nota2 < nota3 && nota2 < nota4 && nota2 < nota1) {
        menor = nota2;
    }
    else if (nota3 < nota2 && nota3 < nota4 && nota3 < nota1) {
        menor = nota3;
    }
    else if (nota4 < nota2 && nota4 < nota3 && nota4 < nota1) {
        menor = nota4;
    }
    else if (nota1 < nota2 && nota1 < nota3 && nota1 < nota4) {
        menor = nota1;
    }
}
var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
console.log("O maior nota \u00E9 ".concat(maior, " e o menor \u00E9 ").concat(menor, ", m\u00E9dia de todas as notas \u00E9 ").concat(media));
