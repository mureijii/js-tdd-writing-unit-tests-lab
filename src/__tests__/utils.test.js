// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  it('returns true for a palindrome like "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('returns false for a non-palindrome like "car"', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  // Edge cases:
  it('returns true for a palindrome with mixed case like "RaceCar"', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  it('returns false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  it('throws an error for non-alphabetic characters like "racecar!"', () => {
    expect(() => isPalindrome('racecar!')).toThrow('Input must contain only alphabetic characters.');
  });

  it('throws an error for non-string input like 12345', () => {
    expect(() => isPalindrome(12345)).toThrow('Input must be a string.');
  });
});
