import { calculate } from '../modules/module2.js';

test('calculate function should add two numbers', () => {
    const result = calculate(5, 3);
    expect(result).toBe(8);
});
