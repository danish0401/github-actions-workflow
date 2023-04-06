import { ApolloError } from '@apollo/client';
import { GraphQLErrorExtensions } from 'graphql/error/GraphQLError';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotificationMessage } from 'shared/snackbar-notification';

const NOT_FOUND = 404;

interface GraphQLErrorExtensionsEx extends GraphQLErrorExtensions {
  exception?: {
    code?: number;
  };
}

export const useOnError = (initiator?: string) => {
  const navigate = useNavigate();

  const { showNotificationError } = useNotificationMessage();

  const onError = useCallback(
    (error: ApolloError) => {
      const message = (initiator ? initiator + ': ' : '') + error?.message;

      showNotificationError(message, true);

      if ((error?.graphQLErrors[0]?.extensions as GraphQLErrorExtensionsEx)?.exception?.code === NOT_FOUND) {
        navigate('/four-o-four');
      }
    },
    [initiator, navigate, showNotificationError],
  );

  return {
    onError,
  };
};
