import chuckRetryOnAsyncError from '../chuckRetryOnAsyncError';

describe('chuckRetryOnAsyncError', () => {
  it('throws error', async () => {
    try {
      await chuckRetryOnAsyncError(() => Promise.reject(new Error('any error')));
    } catch (e: any) {
      expect(e.message).toEqual('Cant fetch chunk, rejecting promise via error');
    }
  });
});
