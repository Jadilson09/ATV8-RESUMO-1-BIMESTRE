/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno:
*/
let teclado = require(`prompt-sync`)();
let precoPagar: number = 0;

console.log(`Compra de veiculo, digite a opção desejada`);
console.log(`1 - fusca  - R$5000,00`);
console.log(`2 - ferrari - R$750.000,00`);
console.log(`3 - celta - R$100.000,00`);
console.log(`4 - tesla - R$1500.000,00`);

let opcao: string = teclado(`Digite a opção desejada (1 - 4): `);

console.log(`Digite a forma de pagamento desejada`);
console.log(`A - á vista`);
console.log(`P - parcelado`);
let formaPagamento: string = teclado(`-->`).toUpperCase();


if(opcao == `1`){
  if(formaPagamento == `A`){
   precoPagar = 5000 - (5000 * 0,15);
   console.log(`O preço do fusca à vista é ${precoPagar} `)
  }
  else if (formaPagamento == `P`){
    precoPagar = 5000 + (5000 * 0,13);
    console.log(`O preço do fusca a prazo é ${precoPagar}`)
  }
  else{
    console.log(`Algo deu errado`);
  }
  if(opcao == `1`)
    if(formaPagamento == `A`){
     precoPagar = 750000 - (750000 * 0,15);
     console.log(`O preço da ferrari à vista é ${precoPagar} `)
    }
}
    else if (formaPagamento == `P`){
      precoPagar = 750000 + (7500000 * 0,13);
      console.log(`O preço da ferrari a prazo é ${precoPagar}`);
    }
    if(opcao == `1`)
        if(formaPagamento == `A`){
         precoPagar = 100000 - (100000 * 0,15);
         console.log(`O preço do celta à vista é ${precoPagar} `);
        }
        else if (formaPagamento == `P`){
          precoPagar = 100000 + (100000 * 0,13);
          console.log(`O preço do celta a prazo é ${precoPagar}`);
        }
        if(opcao == `1`)
            if(formaPagamento == `A`){
             precoPagar = 1500000 - (1500000 * 0,15);
             console.log(`O preço do tesla à vista é ${precoPagar} `);
            }
            else if (formaPagamento == `P`){
              precoPagar = 1500000 + (1500000 * 0,13);
              console.log(`O preço do tesla a prazo é ${precoPagar}`)
            }
else {
    console.log(`Algo deu errado!!`);
  }