/*
1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.
*/

class carro {
    marca;
    cor;
    gastoMedioPorKm;

constructor (marca,cor,gastoMedioPorKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
}

calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    } 
}
 const uno = new carro('fiat', 'preta', 1/12);
 console.log(uno.calcularGastoDePercurso(70, 5));
 const siena = new carro('fiat', 'azul', 1/10);
 console.log(siena.calcularGastoDePercurso(71, 1.65));

 

 