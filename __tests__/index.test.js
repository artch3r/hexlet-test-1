import { test, expect } from '@jest/globals';
import getSquare from '../src/index.js';

test('getSquare', () => {
  expect(getSquare(3)).toBe(9);
});