import { lazy, Suspense } from 'react';
import retryChunkLoad from 'shared/lib/chuckRetryOnAsyncError';

const LoginPageLazy = lazy(() => retryChunkLoad(() => import('./page')));

const LoginPage = () => {
  return (
    <Suspense fallback={null}>
      <LoginPageLazy />
    </Suspense>
  );
};

export default LoginPage;
