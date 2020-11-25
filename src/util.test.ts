import {
  generateColorFromHex,
} from './util';

describe('generateColorFromHex', () => {
  it('throws when it gets a malformed string', () => {
    const generateColorFromWrongString = () => {
      generateColorFromHex('', 1);
    };
    expect(generateColorFromWrongString).toThrow();
  });
});
