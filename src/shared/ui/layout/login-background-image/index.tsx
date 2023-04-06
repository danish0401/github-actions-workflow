import { FC, lazy, Suspense } from 'react';
import retryChunkLoad from 'shared/lib/chuckRetryOnAsyncError';
import { StyledImg } from './styled';

const LoginBackground = lazy(() => retryChunkLoad(() => import('./login-background-image')));

const LoginBackgroundLazy: FC = () => {
  return (
    <Suspense fallback={<StyledImg as={'div'} isFallback={true} />}>
      <LoginBackground />
    </Suspense>
  );
};
export default LoginBackgroundLazy;
