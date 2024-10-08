// src/math.js

function fatorial(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
      throw new TypeError('O argumento deve ser um número inteiro não negativo');
  }
  if (n === 0 || n === 1) {
      return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
      resultado *= i;
  }
  return resultado;
}

function fibonacci(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
      throw new TypeError('O argumento deve ser um número inteiro não negativo');
  }
  if (n === 0) {
      throw new Error('Não existe fibonnaci de número menor ou igual a zero');
  }
  if (n === 1) return 1;
  
  let a = 0, b = 1, c;
  for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
  }
  return b;
}

function ehPrimo(n) {
  if (typeof n !== 'number' || n < 2 || !Number.isInteger(n)) {
      throw new TypeError('O argumento deve ser um número inteiro maior ou igual a 2');
  }
  for (let i = 2; i < n; i++) {
      if (n % i === 0) {
          return false;
      }
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
};