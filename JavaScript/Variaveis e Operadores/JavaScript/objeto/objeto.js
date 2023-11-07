
class pessoa {
    nome;
    idade;

    descrever() {
        console.log('Meu nome é ${Gabriel L Greiner} e minha idaade é ${18}');
        console.log('Meu nome é ${Davi L Greiner} e minha idaade é ${4}');
    }
}

const Gabriel = new pessoa();
Gabriel.nome = 'Gabriel L Greiner';
Gabriel.idade = 18;

const Davi = new pessoa();
Davi.nome = 'Davi L Greiner';
Davi.idade = 4;



Gabriel.descrever();
Davi.descrever();






















