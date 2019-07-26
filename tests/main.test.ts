import { helloWorld } from '../src/index';

test('basic', () => {
  expect(helloWorld('John ')).toBe('Hello John');
});
