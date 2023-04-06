import validateEnvironment from '../validateEnvironment';

describe('validateEnvironment', () => {
  it('returns true if valid url provided', () => {
    const result = validateEnvironment({ API_URL: 'https://admanager-smb-back.dev.zypmedia.com/graphql' });
    expect(result).toBeTruthy();
  });

  it('throws error if not valid url provided', () => {
    try {
      validateEnvironment({ API_URL: '', name: 'test api' });
    } catch (e: any) {
      expect(e.message).toEqual('test api url is invalid');
    }
  });
});
