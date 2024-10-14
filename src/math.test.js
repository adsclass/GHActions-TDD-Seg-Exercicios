const { fatorial, fibonacci, ehPrimo } = require('./math');

describe('função fatorial', () => {
  test('calcula fatorial de 5 para ser igual a 120', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('calcula fatorial de 0 para ser igual a 1', () => {
    expect(fatorial(0)).toBe(1);
  });

  test('lança erro para número negativo', () => {
    expect(() => fatorial(-1)).toThrow("Não existe fatorial de número negativo");
  });

  test('lança erro para argumento inválido', () => {
    expect(() => fatorial("texto")).toThrow(TypeError);
  });
});

describe('função fibonacci', () => {
  test('Retorna o número fibonacci de 8 igual a 21', () => {
    expect(fibonacci(8)).toBe(21);
  });

  test('lança erro para número menor ou igual a zero', () => {
    expect(() => fibonacci(0)).toThrow("Não existe fibonacci de número menor ou igual a zero");
    expect(() => fibonacci(-1)).toThrow("Não existe fibonacci de número menor ou igual a zero");
  });
});

describe('função ehPrimo', () => {
  test('verifica que 7 e 11 são números primos', () => {
    expect(ehPrimo(7)).toBe(true);
    expect(ehPrimo(11)).toBe(true);
  });

  test('lança erro para número menor ou igual a 1', () => {
    expect(() => ehPrimo(1)).toThrow("Não existe número primo de número menor ou igual a 1");
    expect(() => ehPrimo(0)).toThrow("Não existe número primo de número menor ou igual a 1");
  });
});
