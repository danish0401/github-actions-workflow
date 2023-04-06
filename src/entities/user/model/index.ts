import { useApolloClient } from '@apollo/client';
import jwtDecode from 'jwt-decode';
import isEqual from 'lodash/isEqual';
import { useCallback, useEffect, useState } from 'react';
import { UserRoles } from 'entities/user/types';
import { User, UserUpdateInput } from 'types';
import { getAuthToken } from 'shared/api/auth/lib';
import { useAnalytics } from 'shared/providers/analytics/AnalyticsProvider';
import { useNotificationMessage } from 'shared/snackbar-notification';
import { MeDocument, useMeQuery, useUpdateUserMutationMutation } from '../api/user.generated';

type Token = {
  role: string;
};

export const useUser = (): {
  user: User | undefined;
  isAuth: boolean;
  isAdmin: boolean;
  refetch(): void;
  loading: boolean;
  setUser: (user: User) => void;
  updateUser: (props: Partial<UserUpdateInput>) => void;
  token: string | null;
} => {
  const token = getAuthToken();
  const client = useApolloClient();
  const { showNotificationError } = useNotificationMessage();

  const { loading, data, refetch } = useMeQuery({
    skip: true,
    fetchPolicy: 'cache-first', // Used for first execution
    nextFetchPolicy: 'cache-first',
    refetchWritePolicy: 'overwrite',
    onError: (error) => showNotificationError(error?.message, true),
  });

  const [user, setUserState] = useState<User | undefined>(() => data?.me as User);

  const [updateCurrentUser] = useUpdateUserMutationMutation();

  const updateUser = useCallback(
    async (updatedUser: Partial<UserUpdateInput>) => {
      user?.id && (await updateCurrentUser({ variables: { input: { ...updatedUser, id: user.id } } }));
    },
    [user, updateCurrentUser],
  );

  const { mixpanel } = useAnalytics();

  const setUser = useCallback(
    (me: User | undefined) => {
      if (!me) {
        return;
      }

      client.cache.writeQuery({
        query: MeDocument,
        data: { user: { me } },
      });

      setUserState(me);
    },
    [client],
  );

  useEffect(() => {
    if (data?.me && !isEqual(data.me, user)) {
      setUserState(data.me);

      if (mixpanel) {
        mixpanel.identify(data.me?.id);
        mixpanel.people.set({
          id: data.me?.id,
          created_at: data.me?.createdAt,
          $name: data.me?.name,
          $email: data.me?.email,
          role: data.me?.role.label,
          business_name: data.me?.tenant?.name,
          business_url: data.me?.tenant?.url,
          business_address: data.me?.tenant?.address,
          tenant_id: data.me?.tenant?.id,
          host: location.hostname,
          utm_source: mixpanel.get_property('utm_source'),
          utm_medium: mixpanel.get_property('utm_medium'),
          utm_campaign: mixpanel.get_property('utm_campaign'),
          utm_content: mixpanel.get_property('utm_content'),
          utm_term: mixpanel.get_property('utm_term'),
        });
      }
    }
  }, [data, mixpanel, user]);

  const isAdminToken = token && jwtDecode<Token>(token)?.role === UserRoles.superAdmin;

  const isAuth = !!user;
  const isAdminRole = user?.role.name === UserRoles.superAdmin;

  return {
    token,
    user,
    updateUser,
    isAuth,
    isAdmin: !!(isAdminToken && isAdminRole),
    setUser,
    refetch,
    loading,
  };
};
