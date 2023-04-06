import { FC } from 'react';
import ErrorPage from 'pages/error-pages/error-page';

const FourOThree: FC = () => {
  return <ErrorPage title={'403'} subtitle={'You do not have permission to access this page.'}></ErrorPage>;
};

export default FourOThree;
