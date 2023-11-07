/*Fazer um programa para calcular o valor de uma viagem.

3 variáveis.
1- Preço do combustivel;
2- Gasto médio de combustivel do carro por KM;
3- Distância em KM da viagem;

Imprimir no console o valor que será gasto de combustivel para realizar esta viagem.
*/

const precoCombustivel = 5.79;
const kmPorLitros = 20;
const distanciaEmKm = 2999;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));

 