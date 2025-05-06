/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno: Jadson Santos Oliveira
*/
let teclado = require (`prompt-sync`)();

let num: number = 0;
let soma: number = 0;

do{
    num = parseInt(teclado(`Digite um número: `));
    soma += num;
}while(soma <= 100);