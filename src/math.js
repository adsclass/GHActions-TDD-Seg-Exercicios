function fatorial(n) {
  n = Number(n);
  if (isNaN(n)) throw new TypeError("O argumento deve ser um número válido");
  if (n < 0) throw new Error("Não existe fatorial de número negativo");
  return n === 0 ? 1 : n * fatorial(n - 1);
}

function fibonacci(n) {
  n = Number(n);
  if (isNaN(n)) throw new TypeError("O argumento deve ser um número válido");
  if (n <= 0) throw new Error("Não existe fibonacci de número menor ou igual a zero");
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) [a, b] = [b, a + b];
  return b;
}

function ehPrimo(n) {
  n = Number(n);
  if (isNaN(n)) throw new TypeError("O argumento deve ser um número válido");
  if (n <= 1) throw new Error("Não número primo de número menor ou igual a 1");
  for (let i = 2, raiz = Math.sqrt(n); i <= raiz; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
};
