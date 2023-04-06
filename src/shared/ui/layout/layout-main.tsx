import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from 'shared/providers/error-boundary';
import { useLayout } from 'shared/providers/LayoutEffectsProvider';

import Header from './header';
import Footer from './footer';
import { StyledMain, StyledMainWrapper } from './styled';

export const LayoutMain: FC = () => {
  const { layoutRef } = useLayout();
  return (
    <StyledMainWrapper>
      <Header />
      <StyledMain ref={layoutRef}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </StyledMain>
      <Footer />
    </StyledMainWrapper>
  );
};
