// src/Math.js

// Função para calcular o fatorial de um número
function fatorial(n) {
  if (n < 0) throw new Error('Fatorial não definido para números negativos');
  if (n === 0 || n === 1) return 1;
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// Função para calcular o n-ésimo termo da sequência de Fibonacci
function fibonnacci(n) {
  if (n < 0) throw new Error('Fibonacci não definido para números negativos');
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  let a = 0, b = 1, resultado;
  for (let i = 2; i <= n; i++) {
    resultado = a + b;
    a = b;
    b = resultado;
  }
  return b;
}

// Função para verificar se um número é primo
function ehPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  fatorial,
  fibonnacci,
  ehPrimo
};
