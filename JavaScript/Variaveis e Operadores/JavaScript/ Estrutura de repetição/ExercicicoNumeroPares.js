// 2) crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const números = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < números.length; i++) {
    const número = números[i];
    if (número % 2 === 0) {
        console.log(número);
    }
}

