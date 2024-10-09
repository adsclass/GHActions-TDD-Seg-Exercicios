function fatorial(n) {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}

function fibonacci(n) {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n <= 0) {
    throw new Error("Não existe fibonnacci de número menor ou igual a zero");
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  let a = 1, b = 1, temp;
  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}


module.exports = { fatorial, fibonacci };
