const soma = require('.');

test ('deve somar os paremetros fornecidos', () => {
    expect(soma(1, 1)).toBe(3)
})