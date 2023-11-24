// Desafio 1 - 3

function calculadora(num1, num2, operador) {
    try {
        switch (operador) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if (num2 === 0) throw new Error("Divisão por zero!");
                return num1 / num2;
            default:
                throw new Error("Operador inválido");
        }
    } catch (error) {
        return `Erro: ${error.message}`;
    }
}

function banco() {
  try {
    let saldo = parseFloat(prompt("Digite o valor do deposito inicial:"));
    if (isNaN(saldo)) {
      throw new Error("O valor deve ser um número.");
    }

    function consultarSaldo() {
        return `Saldo atual: ${saldo}`;
    }

    function depositar(valor) {
        if (valor <= 0) {
          throw new Error("O valor do depósito deve ser positivo.");
        }
        saldo += valor;
        return `Depósito realizado. Saldo atual: ${consultarSaldo()}`;
    }

    function sacar(valor) {
        if (valor <= 0) {
            throw new Error("O valor do saque deve ser positivo.");
        }
        if (valor > saldo) {
            throw new Error("Saldo insuficiente para o saque.");
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
           throw new Error("Opção inválida");
      }
    } 
  
  } catch (error) {
        return `Erro: ${error.message}`;
  }
}

function jogoDaVelha() {
  
  function criarTabuleiro() {
      return [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  }
  
  function formatarTabuleiroParaAlert(tabuleiro) {
    return tabuleiro.map(linha => linha.join(' | ')).join('\n-------\n');
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
    try {
      imprimirTabuleiro(tabuleiro);
      let tabuleiroFormatado = formatarTabuleiroParaAlert(tabuleiro);
      let jogada = prompt(`Tabuleiro Atual:\n${tabuleiroFormatado}\nJogador ${jogadorAtual}, escolha uma linha e uma coluna de 0 - 2 (ex: 1 2):`).split(' ');
      let linha = parseInt(jogada[0]);
      let coluna = parseInt(jogada[1]);
      
      if (isNaN(linha) || isNaN(coluna) || linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
        throw new Error("Entrada inválida. Por favor, insira números entre 0 e 2.");
      }

      //Jogada - valida a possibilidade
      if (tabuleiro[linha][coluna] !== ' ') {
        throw new Error("Célula já ocupada. Escolha outra célula.");
      }

      tabuleiro[linha][coluna] = jogadorAtual;
      numeroJogadas++;

      if (verificarVitoria(tabuleiro, jogadorAtual)) {
        imprimirTabuleiro(tabuleiro);
        alert(`Jogador ${jogadorAtual} venceu!`);
        return;
      }

      jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';      
    } catch (error) {
      alert(error.message);
      // Não incrementa o número de jogadas se houver erro
    }
  }
  
  imprimirTabuleiro(tabuleiro);
  alert("Empate!");
  
}

//Teste de logica 1 - 2

function minMax(arr) {
    try {
        if (!Array.isArray(arr) || arr.length !== 5) {
            throw new Error("A entrada deve ser um array de cinco números inteiros.");
        }
        arr.sort((a, b) => a - b);
        let min = arr.slice(0, 4).reduce((a, b) => a + b, 0);
        let max = arr.slice(1).reduce((a, b) => a + b, 0);
        return `${min} ${max}`;
    } catch (error) {
        return `Erro: ${error.message}`;
    }

}

function desenharEscada(n) {
    try {
        if (!Number.isInteger(n) || n < 1) {
            throw new Error("O tamanho da escada deve ser um número inteiro positivo.");
        }
        for (let i = 1; i <= n; i++) {
            console.log(' '.repeat(n - i) + '#'.repeat(i));
        }
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }

}


console.log(calculadora(8, 0, "/"));
console.log(banco());
jogoDaVelha();

console.log(minMax([10,8,1,7,1]));
console.log(desenharEscada(5));