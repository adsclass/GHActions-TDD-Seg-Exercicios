function fatorial(n) {
  if (typeof n !== 'number' || n < 0) {
    throw new Error("O argumento deve ser um número inteiro não negativo");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

function fibonacci(n) {
  if (typeof n !== 'number' || n <= 0) {
    throw new Error("O argumento deve ser um número inteiro positivo");
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function ehPrimo(num) {
  if (typeof num !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
  } else if (num <= 1) {
    throw new RangeError("O argumento deve ser um número inteiro maior que 1");
  }
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;

}


module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
};