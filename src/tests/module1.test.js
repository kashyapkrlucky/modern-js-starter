import { sayHello } from '../modules/module1.js';

test('sayHello function should log greeting', () => {
    // const logSpy = jest.spyOn(console, 'log');
    const msg = sayHello();
    expect(msg).toBe('Hello from Module 1!');
});
