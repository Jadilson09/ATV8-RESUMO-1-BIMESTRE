/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno: Jadson Santos Oliveira
*/
var teclado = require("prompt-sync")();
var num = 0;
var soma = 0;
do {
    num = parseInt(teclado("Digite um n\u00FAmero: "));
    soma += num;
} while (soma <= 100);
