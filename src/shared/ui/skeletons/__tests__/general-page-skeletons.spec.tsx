import { render } from 'shared/lib/test-utils';
import { LayoutPreloader, LayoutPreloaderNoAuth } from '../general-page-skeletons';

describe('general-page-skeletons', () => {
  it('renders LayoutPreloader', () => {
    render(<LayoutPreloader />);
  });

  it('renders LayoutPreloaderNoAuth', () => {
    render(<LayoutPreloaderNoAuth />);
  });
});
