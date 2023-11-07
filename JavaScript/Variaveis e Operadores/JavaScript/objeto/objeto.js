
class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2005 - idade;
    }

descrever() {
    console.log('Meu nome é ${this.nome} e minha idade ${this.idade}');
    }
}
    
const Gabriel = new pessoa('Gabriel', 18);

console.log(Gabriel);


















