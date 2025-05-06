/* 10 pontos
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome aluno:Jadson Santos Oliveira
*/
let teclado = require (`prompt-sync`)();

let sexo: string = ``;
let somaF: number = 0;
let somaM: number = 0;
let idade: number = 0;
let divisorM: number = 0;
let divisorF: number = 0;
let cont: number = 0;

while(cont < 50){
   idade = parseInt(teclado(`Digite a idade: `));
   sexo = teclado(`Digite o sexo (M/F): `)

else if(sexo == `M`){
    somaM += idade;
    divisorM++;
}else if


}