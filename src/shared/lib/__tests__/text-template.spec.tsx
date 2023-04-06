import templateText from 'shared/lib/templateText';

describe('templateText', () => {
  it('returns string populated from second param', () => {
    const result = templateText(
      // eslint-disable-next-line no-template-curly-in-string
      'Enter a budget amount of at least ${minTopUp} and we will estimate the number of impression markets that will be delivered, on the right.',
      { minTopUp: 666 },
    );
    expect(result).toBe(
      'Enter a budget amount of at least $666 and we will estimate the number of impression markets that will be delivered, on the right.',
    );
  });
});
