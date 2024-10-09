// src/Math.test.js

const { fatorial, fibonnacci, ehPrimo } = require('./math');

// Testes para a função fatorial
test('fatorial(5) deve retornar 120', () => {
  expect(fatorial(5)).toBe(120);
});

test('fatorial(0) deve retornar 1', () => {
  expect(fatorial(0)).toBe(1);
});

test('fatorial(-1) deve lançar um erro', () => {
  expect(() => fatorial(-1)).toThrow('Fatorial não definido para números negativos');
});

// Testes para a função fibonnacci
test('fibonnacci(5) deve retornar 5', () => {
  expect(fibonnacci(5)).toBe(5);
});

test('fibonnacci(0) deve retornar 0', () => {
  expect(fibonnacci(0)).toBe(0);
});

test('fibonnacci(1) deve retornar 1', () => {
  expect(fibonnacci(1)).toBe(1);
});

test('fibonnacci(-2) deve lançar um erro', () => {
  expect(() => fibonnacci(-2)).toThrow('Fibonacci não definido para números negativos');
});

// Testes para a função ehPrimo
test('ehPrimo(7) deve retornar true', () => {
  expect(ehPrimo(7)).toBe(true);
});

test('ehPrimo(4) deve retornar false', () => {
  expect(ehPrimo(4)).toBe(false);
});

test('ehPrimo(1) deve retornar false', () => {
  expect(ehPrimo(1)).toBe(false);
});

test('ehPrimo(2) deve retornar true', () => {
  expect(ehPrimo(2)).toBe(true);
});
