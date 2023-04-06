import { FC, Suspense, lazy } from 'react';
import retryChunkLoad from 'shared/lib/chuckRetryOnAsyncError';

const MainPageLazy = lazy(() => retryChunkLoad(() => import('./page')));

const MainPage: FC = () => {
  return (
    <Suspense fallback={null}>
      <MainPageLazy />
    </Suspense>
  );
};
export default MainPage;
