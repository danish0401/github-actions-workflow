import { stringAvatar, stringToColor } from '../utils';

describe('utils', () => {
  test('stringToColor should return color string', () => {
    const res = stringToColor('test');
    expect(res).toBe('#924436');
  });

  describe('stringAvatar', () => {
    test('should return first letters and color string', () => {
      const res = stringAvatar('test name');
      expect(res).toStrictEqual({
        children: 'TN',
        sx: {
          bgcolor: '#59312e',
        },
      });
    });
    test('should return first letter of name and color string', () => {
      const res = stringAvatar('test');
      expect(res).toStrictEqual({
        children: 'T',
        sx: {
          bgcolor: '#924436',
        },
      });
    });
  });
});
