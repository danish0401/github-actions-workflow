import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from 'shared/providers/error-boundary';
import Footer from './footer';
import { StyledFooter, StyledGridLoginContainer, StyledLoginMain } from './styled';

export const LayoutLogin: FC = () => {
  return (
    <StyledGridLoginContainer container direction='column' wrap='nowrap'>
      <StyledLoginMain>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </StyledLoginMain>

      <StyledFooter container item xs={12}>
        <Footer />
      </StyledFooter>
    </StyledGridLoginContainer>
  );
};
