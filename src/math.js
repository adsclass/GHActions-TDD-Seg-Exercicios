function fatorial(n) {
  if (typeof n === 'string' && !isNaN(n)) {
    n = Number(n);
  }
  if (typeof n !== 'number' || isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n < 0) return undefined;
  if (n === 0) return 1;

  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function fibonacci(n) {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }

  if (n < 0) return undefined;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function ehPrimo(n) {
  if (typeof n === 'string' && !isNaN(n)) {
    n = Number(n);
  }
  if (typeof n !== 'number' || isNaN(n)) {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
};
