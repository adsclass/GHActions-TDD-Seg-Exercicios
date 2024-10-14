function fatorial(w) {
  if (typeof w !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  }

  if (w < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }

  if (w === 0) {
    return 1;
  }

  let resultado = 1;
  for (let i = 1; i <= w; i++) {
    resultado *= i;
  }
  return resultado;
}

function fibonacci(w) {
  if (typeof w !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  }

  if (w <= 0) {
    throw new Error("Não existe fibonacci de número menor ou igual a zero");
  }

  const sequencia = [0, 1];
  for (let i = 2; i <= w; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
  }
  return sequencia[w];
}

function ehPrimo(w) {
  if (typeof w !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  }

  if (w <= 1) {
    throw new Error("Não existe número primo de número menor ou igual a 1");
  }

  for (let i = 2; i <= Math.sqrt(w); i++) {
    if (w % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo,
};