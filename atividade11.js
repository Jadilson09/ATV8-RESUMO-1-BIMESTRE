/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno:
*/
var teclado = require("prompt-sync")();
var precoPagar = 0;
console.log("Compra de veiculo, digite a op\u00E7\u00E3o desejada");
console.log("1 - fusca  - R$5000,00");
console.log("2 - ferrari - R$750.000,00");
console.log("3 - celta - R$100.000,00");
console.log("4 - tesla - R$1500.000,00");
var opcao = teclado("Digite a op\u00E7\u00E3o desejada (1 - 4): ");
console.log("Digite a forma de pagamento desejada");
console.log("A - \u00E1 vista");
console.log("P - parcelado");
var formaPagamento = teclado("-->").toUpperCase();
if (opcao == "1")
    if (formaPagamento == "A") {
        precoPagar = 5000 - (5000 * 0, 15);
        console.log("O pre\u00E7o do fusca \u00E0 vista \u00E9 ".concat(precoPagar, " "));
    }
    else if (formaPagamento == "P") {
        precoPagar = 5000 + (5000 * 0, 13);
        console.log("O pre\u00E7o do fusca a prazo \u00E9 ".concat(precoPagar));
    }
if (opcao == "1")
    if (formaPagamento == "A") {
        precoPagar = 750000 - (750000 * 0, 15);
        console.log("O pre\u00E7o da ferrari \u00E0 vista \u00E9 ".concat(precoPagar, " "));
    }
    else if (formaPagamento == "P") {
        precoPagar = 750000 + (750000 * 0, 13);
        console.log("O pre\u00E7o da ferrari a prazo \u00E9 ".concat(precoPagar));
    }
if (opcao == "1")
    if (formaPagamento == "A") {
        precoPagar = 100000 - (100000 * 0, 15);
        console.log("O pre\u00E7o do celta \u00E0 vista \u00E9 ".concat(precoPagar, " "));
    }
    else if (formaPagamento == "P") {
        precoPagar = 100000 + (100000 * 0, 13);
        console.log("O pre\u00E7o do celta a prazo \u00E9 ".concat(precoPagar));
    }
if (opcao == "1")
    if (formaPagamento == "A") {
        precoPagar = 1500000 - (1500000 * 0, 15);
        console.log("O pre\u00E7o do tesla \u00E0 vista \u00E9 ".concat(precoPagar, " "));
    }
    else if (formaPagamento == "P") {
        precoPagar = 1500000 + (1500000 * 0, 13);
        console.log("O pre\u00E7o do tesla a prazo \u00E9 ".concat(precoPagar));
    }
    else {
        console.log("Algo deu errado!!");
    }
