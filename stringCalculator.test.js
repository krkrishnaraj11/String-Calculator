// Jest Test Cases

const add = require('./stringCalculator');

describe('String Calculator', () => {
    test('returns 0 for an empty string', () => {
        expect(add('')).toBe(0);
    })
});