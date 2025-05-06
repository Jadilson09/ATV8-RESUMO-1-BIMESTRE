/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno: Jadson Santos Oliveira
*/
console.log();
var teclado = require("prompt-sync")();
var soma = 0;
var media = 0;
var numero1 = 0;
var saida = false;
console.log("Digite qualquer n\u00FAmero");
console.log("Digite 0 para sair");
do {
    numero1 = parseInt(teclado("Digite um n\u00FAmero"));
    if (numero1 != 0) {
        soma = soma + numero1;
        media++;
    }
    else if (numero1 == 0) {
        saida = true;
    }
} while (saida == false);
console.log("A m\u00E9dia dos valores digitados s\u00E3o : ".concat(soma / media));
