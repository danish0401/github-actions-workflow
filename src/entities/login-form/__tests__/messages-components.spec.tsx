import MessagesComponent, { MessagesComponentType } from 'entities/login-form/ui/messages-component';
import { render } from 'shared/lib/test-utils';

const error = {
  code: 'code',
  field: 'field',
  message: 'message',
  type: 'type',
};

describe('messages-component', () => {
  const ui = (props: MessagesComponentType) => <MessagesComponent {...props} />;

  test('it renders with error', async () => {
    const { queryByText } = render(ui({ error: [error] }));

    expect(await queryByText(error.message)).toBeInTheDocument();
  });
});
