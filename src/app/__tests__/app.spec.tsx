import App from 'app/App';
import withRouter from 'app/hocs/withRouter';
import { render } from 'shared/lib/test-utils';

describe('App', () => {
  it('renders without errors', async () => {
    render(
      <>
        {withRouter(() => (
          <App />
        ))}
      </>,
    );
  });
});
