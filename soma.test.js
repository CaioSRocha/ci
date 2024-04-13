const soma = require('.');

test ('deve somar os paremetros fornecidos', () => {
    expect(1).toEqual(1);
    expect(soma(1, 2)).toBe(3)
})