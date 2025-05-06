/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: Jadson Santos Oliveira
*/
var teclado = require("prompt-sync")();
var cont = 0;
var contPar = 0;
var contImpar = 0;
var num = 0;
do {
    num = parseInt(teclado("Digite um n\u00FAmero inteiro: "));
    if (num % 2 == 0) {
        contPar++;
    }
    else {
        contImpar++;
    }
    cont++;
} while (cont);
