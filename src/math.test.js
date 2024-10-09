const { fatorial, fibonacci, ehPrimo } = require('./math');

describe('função fatorial', () => {
  test('valida entrada', () => {
    expect(() => fatorial("Texto")).toThrow(TypeError);
    expect(() => fatorial("Texto")).toThrow("O argumento deve ser um número válido");
    expect(() => fatorial("10")).not.toThrow(TypeError);
    expect(() => fatorial(10)).not.toThrow(TypeError);
  });

  test('calcula fatorial de 5 para ser igual a 120', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('calcula fatorial de 0 para ser igual a 1', () => {
    expect(fatorial(0)).toBe(1);
  });
});

describe('função fibonacci', () => {
  test('valida entrada', () => {
    expect(fibonacci).toBeDefined();
    expect(fibonacci.length).toBe(1);
  });

  test('Retorna o número fibonacci de 8 igual a 21', () => {
    expect(fibonacci(8)).toBe(21);
  });

  test('Retorna o número fibonacci de 10 igual a 55', () => {
    expect(fibonacci(10)).toBe(55);
  });
});

describe('função ehPrimo', () => {
  test('valida entrada', () => {
    expect(() => ehPrimo("Texto")).toThrow(TypeError);
    expect(() => ehPrimo("Texto")).toThrow("O argumento deve ser um número válido");
    expect(() => ehPrimo("10")).not.toThrow(TypeError);
    expect(() => ehPrimo(10)).not.toThrow(TypeError);
  });

  test('verifica que 7 e 11 são números primos', () => {
    expect(ehPrimo(7)).toBe(true);
    expect(ehPrimo(11)).toBe(true);
  });

  test('verifica que 6 e 10 não são números primos', () => {
    expect(ehPrimo(6)).toBe(false);
    expect(ehPrimo(10)).toBe(false);
  });
});
