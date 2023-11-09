
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
        console.log('Meu nome é $(this.nome) e minha idade é &(this.idade)');
    }
}

const gabriel = new pessoa('gabriel', 18);

console.log(gabriel);





