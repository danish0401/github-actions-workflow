/* eslint-disable import/export */
import { queries, render, RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { withHocs } from 'app/hocs';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & Omit<RenderOptions, 'queries'>,
): RenderResult => {
  const Wrapper = ({ children }: ChildrenProps) => {
    return <>{children}</>;
  };
  return render(ui, { wrapper: withHocs(Wrapper), queries, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
