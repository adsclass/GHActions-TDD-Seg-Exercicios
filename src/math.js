// Função Fatorial
function fatorial(n) {
  if (typeof n !== 'number') throw new TypeError('O argumento deve ser um número válido');
  if (n < 0) throw new Error('Não existe fatorial de número negativo');
  if (n === 0) return 1;
  return n === 1 ? 1 : n * fatorial(n - 1);
}

// Função Fibonacci
function fibonacci(n) {
  if (typeof n !== 'number') throw new TypeError('O argumento deve ser um número válido');
  if (n <= 0) throw new Error('O número deve ser maior que zero');
  
  let a = 0, b = 1, temp;
  for (let i = 1; i < n; i++) {
    temp = a;
    a = b;
    b = temp + b;
  }
  return b;
}

// Função que verifica se um número é primo
function ehPrimo(n) {
  if (typeof n !== 'number') throw new TypeError('O argumento deve ser um número válido');
  if (n <= 1) throw new Error('Não existe número primo menor ou igual a 1');
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = { fatorial, fibonacci, ehPrimo };
