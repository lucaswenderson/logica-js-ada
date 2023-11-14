// 08 - Contar Vogais
function contarVogais(palavra) {
    let cont = 0;
    const vogais = "aeiou";

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i].toLowerCase())) {
            cont++;
        }
    }

    return cont;
}

// 09 - Ordenação de arrays ( Bruto com Bubble Sort Otimizado )

function ordenarArray(array) {
    let troca;
    do {
        troca = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                troca = true;
            }
        }
    } while (troca);

    return array;
}

// 09.1 - Ordenação de arrays nativo

function ordenarArrayNativo(array) {
    return array.sort((a, b) => a - b);
}

// 10,11,12 - Rolagem de Dados

function rolarDados(quantidadeDados, quantidadeLados, tentativas) {
    for (let i = 1; i <= tentativas; i++) {
        console.log(`Tentativa ${i}`);
        console.log("Rolagens Individuais:");
        let soma = 0;

        for (let j = 1; j <= quantidadeDados; j++) {
            let rolagem = Math.floor(Math.random() * quantidadeLados) + 1;
            console.log(`Dado ${j}: ${rolagem}`);
            soma += rolagem;
        }

        console.log(`Soma dos Valores: ${soma}`);
        console.log();
    }
}


console.log(contarVogais("Lucas"));
console.log(ordenarArray([20,5,800,5,6,97,54,0]));
console.log(ordenarArrayNativo([20,5,800,5,6,97,54,0]));
console.log(rolarDados(3, 9, 2));
