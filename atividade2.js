/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno: Jadson Santos Oliveira
*/
console.log();
var teclado = require("prompt-sync")();
var numero1 = 0;
var numero2 = 0;
var numero3 = 0;
var variavel1 = 0;
var variavel2 = 0;
var variavel3 = 0;
numero1 = parseInt(teclado("Digite o valor do numero 1"));
numero2 = parseInt(teclado("Digite o valor do numero 2"));
numero3 = parseInt(teclado("Digite o valor de numero 3"));
if (numero1 > numero2 && variavel1 > variavel2) {
    variavel2 = numero1;
    if (variavel2 > variavel3) {
        numero2 = variavel2;
        numero1 = variavel3;
    }
    if (variavel3 > variavel2) {
        numero2 = variavel3;
        numero1 = variavel2;
    }
}
;
if (numero2 > numero3 && variavel2 > variavel3) {
    variavel2 = numero1;
    if (variavel2 > variavel3) {
        numero2 = variavel2;
        numero1 = variavel3;
    }
    if (variavel3 > variavel2) {
        numero2 = variavel3;
        numero1 = variavel2;
    }
}
;
if (numero3 > numero1 && variavel3 > variavel3) {
    variavel2 = numero1;
    if (variavel2 > variavel3) {
        numero2 = variavel2;
        numero1 = variavel3;
    }
    if (variavel3 > variavel2) {
        numero2 = variavel3;
        numero1 = variavel2;
    }
}
;
