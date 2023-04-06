import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

const withRouter = <P extends object>(Component: FC<P>): FC<P> => {
  return function WithRouter(props) {
    return (
      <BrowserRouter>
        <Component {...props} />
      </BrowserRouter>
    );
  };
};
export default withRouter;
