// 01 - Verificação de Números Pares e Ímpares (If e Ternário)
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "É par";
  } else {
    return "É ímpar";
  }
}

function verificarParOuImparTernario(numero) {
  return numero % 2 === 0 ? "É par" : "É ímpar";
}

// 02 - Verificação de Nota
function verificarNota(nota) {
  if (nota >= 90) {
    return "Aprovado com mérito";
  } else if (nota >= 70) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

// 03 - Determinação do Maior Número
function determinarMaiorNumero(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

// 04 - Verificação de Triângulo
function verificarTriangulo(a, b, c) {
  if (a === b && b === c) {
    return "Equilátero";
  } else if (a === b || a === c || b === c) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// 05 - Verificação de Ano Bissexto
function verificarAnoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return "Ano bissexto";
  } else {
    return "Não é um ano bissexto";
  }
}

// 06 - Verificação de Idade para Compra de Bebida Alcoólica (If e Ternário)
function verificarCompraBebida(idade) {
  if (idade >= 18) {
    return "Pode comprar bebida alcoólica";
  } else {
    return "Não pode comprar bebida alcoólica";
  }
}

function verificarCompraBebidaTernario(idade) {
  return idade >= 18
    ? "Pode comprar bebida alcoólica"
    : "Não pode comprar bebida alcoólica";
}

// 08 - Verificação de Números Pares e Ímpares (Usar switch Case)
function verificarParOuImparSwitch(numero) {
  switch (numero % 2) {
    case 0:
      return "É par";
    case 1:
      return "É ímpar";
    default:
      return "Número inválido";
  }
}

// 09 - Conversão de Notas em Conceitos
function verificarVogalOuConsoante(letra) {
  switch (letra.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return "É uma vogal";
    default:
      return "É uma consoante";
  }
}

// 10 - Determinação de Estação do Ano
function determinarEstacaoDoAno(mes) {
  switch (mes.toLowerCase()) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
      return "Inverno";
    case "março":
    case "abril":
    case "maio":
      return "Primavera";
    case "junho":
    case "julho":
    case "agosto":
      return "Verão";
    case "setembro":
    case "outubro":
    case "novembro":
      return "Outono";
    default:
      return "Mês inválido";
  }
}

// Testando as funções com console.log
console.log(verificarParOuImpar(3));
console.log(verificarParOuImparTernario(4));
console.log(verificarNota(89));
console.log(determinarMaiorNumero(-5, 300, 84));
console.log(verificarTriangulo(5, 5, 5));
console.log(verificarAnoBissexto(2020));
console.log(verificarCompraBebida(19));
console.log(verificarCompraBebida(17));
console.log(verificarParOuImparSwitch(4));
console.log(verificarVogalOuConsoante("b"));
console.log(determinarEstacaoDoAno("julho"));
