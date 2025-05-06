/*10 pontos
3 - Faça um algoritmo que leia um valor e informe se ele está dentro de
um intervalo específico (por exemplo, entre 10 e 20, 20 e 30, até o 100).
Nome Aluno: Jadson Santos Oliveira
*/
console.clear();
var teclado = require("prompt-sync")();
var valor = parseInt(teclado("Digite o n\u00FAmero:"));
if (valor >= 0 && valor <= 10) {
    console.log("O valor \u00E9 de 0-10");
}
else if (valor > 10 && valor <= 20) {
    console.log("O valor de 10-20");
}
else if (valor > 20 && valor <= 30) {
    console.log("O valor \u00E9 de 20-30");
}
else if (valor > 30 && valor <= 40) {
    console.log("O valor de 30-40");
}
else if (valor > 40 && valor <= 50) {
    console.log("O valor \u00E9 de 40-50");
}
else if (valor > 50 && valor <= 60) {
    console.log("O valor \u00E9 de 50-60");
}
else if (valor > 60 && valor <= 70) {
    console.log("O valor \u00E9 de 60-70");
}
else if (valor > 70 && valor <= 80) {
    console.log("O valor \u00E9 de 70-80");
}
else if (valor > 80 && valor <= 90) {
    console.log("O valor \u00E9 de 80-90");
}
else if (valor > 90 && valor <= 100) {
    console.log("O valor \u00E9 de 90-100");
}
else {
    console.log("Algo deu errado");
}
