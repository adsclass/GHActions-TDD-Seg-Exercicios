// src/Math.js

function fatorial(n) {
  if (typeof n !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n < 0) {
    throw new Error("Não existe fatorial de número negativo");
  }
  if (n === 0) {
    return 1; // O fatorial de 0 é 1
  }
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function fibonacci(n) {
  if (typeof n !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n <= 0) {
    throw new Error("Não existe fibonnacci de número menor ou igual a zero");
  }
  if (n === 1) return 1; // O primeiro número Fibonacci
  if (n === 2) return 1; // O segundo número Fibonacci
  
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function ehPrimo(n) {
  if (typeof n !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  }
  if (n <= 1) {
    throw new Error("Não número primo de número menor ou igual a 1");
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // Não é primo
    }
  }
  return true; // É primo
}

// Exporta as funções para serem utilizadas nos testes
module.exports = { fatorial, fibonacci, ehPrimo };
