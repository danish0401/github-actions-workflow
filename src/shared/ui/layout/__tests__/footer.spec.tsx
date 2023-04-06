import { footerLinks } from 'shared/ui/layout/constants';
import Footer from 'shared/ui/layout/footer';
import { render, screen } from 'shared/lib/test-utils';

describe.skip('Footer', () => {
  const ui = <Footer />;
  render(ui);

  test('render component', async () => {
    expect(screen.getAllByRole('link')).toHaveLength(footerLinks.length);
  });
});
