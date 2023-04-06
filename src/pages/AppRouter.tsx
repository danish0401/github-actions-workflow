import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from 'pages/routes';

const AppRouter: FC = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};

export default AppRouter;
