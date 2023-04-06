import HelmetMeta from 'app/HelmetMeta';
import { render } from 'shared/lib/test-utils';

describe('Helmet meta', () => {
  it('renders without errors', async () => {
    render(<HelmetMeta />);
  });
});
