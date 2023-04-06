import { FC } from 'react';
import ErrorPage from 'pages/error-pages/error-page';

const FourOFour: FC = () => {
  return <ErrorPage title={'404'} subtitle={'The page you are looking for doesn&apos;t exist'}></ErrorPage>;
};

export default FourOFour;
