import { useSnackbar } from 'notistack';
import { useCallback } from 'react';
import { MessageLevel } from 'shared/types/api';

export type ShowNotification = ({ text, level }: { text: string; level?: MessageLevel }) => void;
export type ShowNotificationSuccess = (text: string) => void;
export type ShowNotificationError = (text: string, preventDuplicate?: boolean) => void;

export const useNotificationMessage = (): {
  showNotification: ShowNotification;
  showNotificationSuccess: ShowNotificationSuccess;
  showNotificationError: ShowNotificationError;
} => {
  const { enqueueSnackbar } = useSnackbar();

  const showNotification: ShowNotification = useCallback(
    ({ text, level = MessageLevel.Info }) => {
      enqueueSnackbar(text, { variant: level });
    },
    [enqueueSnackbar],
  );

  const showNotificationSuccess: ShowNotificationSuccess = useCallback(
    (text) => {
      enqueueSnackbar(text, { variant: MessageLevel.Success });
    },
    [enqueueSnackbar],
  );
  const showNotificationError: ShowNotificationError = useCallback(
    (text, preventDuplicate = false) => {
      enqueueSnackbar(text, { variant: MessageLevel.Error, preventDuplicate });
    },
    [enqueueSnackbar],
  );
  return { showNotification, showNotificationSuccess, showNotificationError };
};
