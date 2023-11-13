// 04 - Adivinhe o Número
function advinharNumero(){
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    let chute = Number(prompt("Adivinhe um número entre 1 e 100:"));


    while(chute !== numeroAleatorio) {
        if (chute < numeroAleatorio) {
            alert("O número é maior do que " + chute + ". Tente novamente!");
        } else {
            alert("O número é menor do que " + chute + ". Tente novamente!");
        }

        chute = Number(prompt("Adivinhe um número entre 1 e 100:"));
    }

    return "Parabéns! Você acertou, o número era " + numeroAleatorio + ". Jogo encerrado!";
}

// 05 - Jogo de Adivinhação com Limite
function advinharNumeroLimite(){
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const limiteTentativas = 5;
    let tentativas = 0;

    let chute = Number(prompt("Adivinhe um número entre 1 e 100:"));
    tentativas++;

    while(chute !== numeroAleatorio && tentativas < limiteTentativas) {
        if (chute < numeroAleatorio) {
            alert("O número é maior do que " + chute + ". Tente novamente!");
        } else {
            alert("O número é menor do que " + chute + ". Tente novamente!");
        }

        chute = Number(prompt("Adivinhe um número entre 1 e 100:"));
        tentativas++;
    }

    if (chute === numeroAleatorio) {
        return "Parabéns! Você acertou, o número era " + numeroAleatorio + ". Jogo encerrado!";
    } else {
        return "Você não acertou. O número era " + numeroAleatorio + ". Jogo encerrado!";
    }
}

console.log(advinharNumero());
alert("Proximo Game");
console.log(advinharNumeroLimite());
