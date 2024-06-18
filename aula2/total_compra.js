//Escreva um programa que calcule o valor total de uma compra, 
//considerando o preço unitário de um produto e a quantidade comprada.
// Solicite essas informações ao usuário.

var nomeProduto = prompt("Digite o nome do produto: ");
var precoUnitario = parseFloat(prompt("Digite o valor unitário do produto: "));
var quantidade = parseInt(prompt("Digite a quantidade comprada: "));
var totalCompra = precoUnitario * quantidade;

console.log("Produto: "+ nomeProduto);
console.log("Valor total da compra: " + totalCompra.toFixed(2));
