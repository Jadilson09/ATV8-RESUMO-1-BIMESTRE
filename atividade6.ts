/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: Jadson Santos Oliveira
*/
let teclado = require (`prompt-sync`)();

let cont: number = 0;
let contPar: number = 0;
let contImpar: number = 0;
let num: number = 0;


do{
     num = parseInt(teclado(`Digite um número inteiro: `));
     if(num % 2 == 0){
         contPar++;
     
     }else{
        contImpar++;
        
     }
     cont++;
}while(cont)