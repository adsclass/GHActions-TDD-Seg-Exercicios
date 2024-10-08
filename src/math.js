function fatorial(n) {
  if (typeof n !== 'number' || n < 0) {
    TypeError('O argumento deve ser um número inteiro não negativo');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}
function fibonacci(n) {
  if (typeof n !== 'number' || n < 1) {
    TypeError('O argumento deve ser um número inteiro positivo');
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function ehPrimo(n) {
  if (typeof n !== 'number' || n <= 1) {
    throw new RangeError('O número deve ser maior que 1 para ser primo');
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
}