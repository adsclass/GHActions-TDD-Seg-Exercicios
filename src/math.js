function fatorial(n) {
  if (isNaN(n) || n < 0) {
    throw new Error("Argumento inválido para fatorial");
  }
  return n === 0 ? 1 : n * fatorial(n - 1);
}

function fibonacci(n) {
  if (isNaN(n) || n <= 0) {
    throw new Error("Argumento inválido para Fibonacci");
  }
  if (n === 1 || n === 2) return 1;
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

function ehPrimo(n) {
  if (isNaN(n) || n <= 1) {
    throw new Error("Argumento inválido para verificar primalidade");
  }
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
};