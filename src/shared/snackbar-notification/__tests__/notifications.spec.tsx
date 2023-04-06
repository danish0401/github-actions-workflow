import { renderHook, act } from 'shared/lib/test-utils';
import { useNotificationMessage } from 'shared/snackbar-notification';

const mockEnqueueSnackbar = vi.fn();

vi.mock('notistack', () => {
  return {
    useSnackbar: () => ({
      enqueueSnackbar: mockEnqueueSnackbar,
    }),
  };
});

describe('notifications', () => {
  it('calls generic', () => {
    const { result } = renderHook(() => useNotificationMessage());

    act(() => {
      result.current.showNotification({ text: 'INFO' });
    });

    expect(mockEnqueueSnackbar).toBeCalled();
  });

  it('calls success', () => {
    const { result } = renderHook(() => useNotificationMessage());

    act(() => {
      result.current.showNotificationSuccess('SUCCESS');
    });

    expect(mockEnqueueSnackbar).toBeCalled();
  });
});
