import { checkAuthTokens } from '../lib';

const invalidData = [
  [],
  ['string'],
  {},
  'string',
  1,
  { access: '' },
  { refresh: '' },
  { access: '123' },
  { refresh: '123' },
  { access: '123', refresh: '' },
  { access: '', refresh: '123' },
];

describe('lib', () => {
  test.each(invalidData)('should throw error with invalid data as %p', (data) => {
    // Test should fail with any type of data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => checkAuthTokens(data as any)).toThrow('accessToken or refreshToken are undefined');
  });

  test('should return true if data is valid', () => {
    const data = {
      access: '123',
      refresh: '123',
    };
    expect(checkAuthTokens(data)).toBe(true);
  });
});
