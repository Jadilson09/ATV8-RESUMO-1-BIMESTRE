/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno: Jadson Santos Oliveira
*/

console.log()
let teclado = require (`prompt-sync`)();
let soma: number =0;
let media: number =0;
let numero1: number =0;
let saida: boolean = false

console.log(`Digite qualquer número`);
console.log(`Digite 0 para sair`);

do{
      numero1 = parseInt(teclado(`Digite um número`));

     if (numero1 != 0){
        soma = soma + numero1;
        media ++
     }
    else if (numero1 == 0){
      saida = true
    }
}  
while(saida == false)
    
    console.log(`A média dos valores digitados são : ${soma / media}`);