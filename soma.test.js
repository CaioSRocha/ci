const soma = require('.');

test ('deve somar os paremetros fornecidos', () => {
    expect(soma(1, 2)).toBe(3)
})