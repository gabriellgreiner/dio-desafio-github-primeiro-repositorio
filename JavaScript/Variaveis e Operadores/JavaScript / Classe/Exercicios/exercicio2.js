/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = pesso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
    */

    class pessoa {
        nome;
        peso;
        altura;

        constructor(nome, peso, altura) {
            this.nome = nome;
            this.peso = peso;
            this.altura = altura;
        }
    
    calcularImc() {
        return this.peso / (this.altura * this.altura);
        }
    }
    const José = new pessoa('jose', 70, 1.75);
    console.log(José.calcularImc());
    const renan = new pessoa('renan', 63, 1.85);
    console.log(renan.calcularImc());
    const vitor = new pessoa('vitor', 85, 1.92);
    console.log(vitor.calcularImc());



    
