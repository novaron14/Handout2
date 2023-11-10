import { greet } from "../src/app";

test('handles no input', () => {
  expect(greet([])).toBe('Hello, my friend');
});

test('handles single input', () => {
  expect(greet(['Bob'])).toBe('Hello Bob.');
});

test('handles multiple inputs', () => {
  expect(greet(['Alice', 'Bob', 'Jerry'])).toBe('Hello Alice, Bob and Jerry.');
});

