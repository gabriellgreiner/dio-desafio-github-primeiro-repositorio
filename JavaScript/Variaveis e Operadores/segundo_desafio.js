/* Fazer um programa para calcular o valor de uma viagem.

5 variáveis.
1- Preço do etanol;
2- Preço da gasolina
3- O tipo de combustivel que está no seu carro;
4- Gasto médio de combustivel do carro por km
5- Distância em km da viagem

Imprimir no console o valor que será gasto de combustivel para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}else {
    const valorGasto = litrosConsumidos * precoGasolina; 
    console.log(valorGasto.toFixed(2));
}


