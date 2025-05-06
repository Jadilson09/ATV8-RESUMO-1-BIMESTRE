/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Jadson Santos Oliveira
*/
console.clear();
var teclado = require("prompt-sync")();
var x = 0;
var y = 0;
var z = 0;
x = parseInt(teclado("Digite o valor de x"));
y = parseInt(teclado("Digite o valor de y"));
z = x;
x = y;
y = z;
console.log("O valor de x \u00E9 ".concat(x, " e o valor de y \u00E9 ").concat(y));
