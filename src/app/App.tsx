import { FC } from 'react';
import { withHocs } from 'app/hocs';
import AppRouter from 'pages/AppRouter';

import SnackbarProviderContainer from 'shared/snackbar-notification';
import { AuthProvider } from 'shared/providers/auth';

const App: FC = () => {
  return (
    <>
      <AuthProvider>
        <SnackbarProviderContainer>
          <AppRouter />
        </SnackbarProviderContainer>
      </AuthProvider>
    </>
  );
};

export default withHocs(App);
