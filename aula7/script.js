// Desafio 1 - 3

function calculadora(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Divisão por zero!';
        default:
            return 'Operador inválido';
    }
}

function banco(saldoInicial) {
  let saldo = parseFloat(saldoInicial);
  
  function consultarSaldo() {
      return `Saldo atual: ${saldo}`;
  }
  
  function depositar(valor) {
      saldo += valor;
      return `Depósito realizado. Saldo atual: ${consultarSaldo()}`;
  }

  function sacar(valor) {
      if (valor > saldo) {
          return 'Saldo insuficiente!';
      }
      saldo -= valor;
      return `Saque realizado. Saldo atual: ${consultarSaldo()}`;
  } 

  while (true) {
    let opcao = prompt("Escolha uma operação: \n1. Depósito \n2. Saque \n3. Consultar Saldo \n4. Sair");

    switch (opcao) {
      case '1':
        let valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
        alert(depositar(valorDeposito));
        break;
      case '2':
        let valorSaque = parseFloat(prompt("Digite o valor do saque:"));
        alert(sacar(valorSaque));
        break;
      case '3':
        alert(consultarSaldo());
        break;
      case '4':
        return;
      default:
        alert("Opção inválida.");
    }
  }  
}

function jogoDaVelha() {
  
  function criarTabuleiro() {
      return [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  }

  function imprimirTabuleiro(tabuleiro) {
      tabuleiro.forEach(linha => console.log(linha.join('|')));
      console.log('-------');
  }

  function verificarVitoria(tabuleiro, jogador) {
      // Verifica linhas e colunas
      for (let i = 0; i < 3; i++) {
          // Pensa em uma abstração firme essa aqui
          if (tabuleiro[i].every(celula => celula === jogador) || tabuleiro.every(linha => linha[i] === jogador)) {
              return true;
          }
      }
    
      // Verifica diagonais
      if (tabuleiro[0][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][2] === jogador ||
          tabuleiro[0][2] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][0] === jogador) {
          return true;
      }

      return false;
  }
  
  let tabuleiro = criarTabuleiro();
  let jogadorAtual = 'X';
  let numeroJogadas = 0;

  while (numeroJogadas < 9) {
    imprimirTabuleiro(tabuleiro);
    let jogada = prompt(`Jogador ${jogadorAtual}, escolha uma linha e uma coluna de 0 - 2 (ex: 1 2):`).split(' ');
    let linha = parseInt(jogada[0]);
    let coluna = parseInt(jogada[1]);

    //Jogada - valida a possibilidade
    if (tabuleiro[linha][coluna] === ' ') {
      tabuleiro[linha][coluna] = jogadorAtual;
      numeroJogadas++;

      if (verificarVitoria(tabuleiro, jogadorAtual)) {
        imprimirTabuleiro(tabuleiro);
        alert(`Jogador ${jogadorAtual} venceu!`);
        return;
      }

      jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
    } else {
      alert("Esta célula já está ocupada!");
    }
  }

  alert("Empate!");
}

//Teste de logica 1 - 2

function minMax(arr) {
    arr.sort((a, b) => a - b);
    let min = arr.slice(0, 4).reduce((a, b) => a + b, 0);
    let max = arr.slice(1).reduce((a, b) => a + b, 0);
    return `${min} ${max}`;
}

function desenharEscada(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '#'.repeat(i));
    }
}


console.log(calculadora(8, 5, "/"));
console.log(banco(2000));
jogoDaVelha();

console.log(minMax([10,8,1,7,1]));
console.log(desenharEscada(5));