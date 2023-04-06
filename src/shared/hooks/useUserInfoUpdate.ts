import { useCallback } from 'react';
import { userModel } from 'entities/user';
import { useTenantLazyQuery, useUpdateTenantMutation } from 'entities/user/api/tenant.generated';
import { useNotificationMessage } from 'shared/snackbar-notification';

export type UserInfoDataTypes = {
  businessName: string;
  zipCode: string;
  city?: string;
  state?: string;
  businessUrl: string;
};

const useUserInfoUpdate = () => {
  const { user } = userModel.useUser();
  const { showNotificationError, showNotificationSuccess } = useNotificationMessage();

  const [updateTenant, { loading: updateTenantLoading }] = useUpdateTenantMutation({
    onError: (error) => showNotificationError(error.message),
    onCompleted: () => showNotificationSuccess('We saved your business information'),
  });

  const [getTenant] = useTenantLazyQuery({
    fetchPolicy: 'network-only',
  });

  const { tenant } = user ?? {};

  const updateUserInfo = useCallback(
    async (data: Partial<UserInfoDataTypes>) => {
      await updateTenant({
        variables: {
          input: {
            name: data?.businessName,
            zipCode: data?.zipCode,
            url: data?.businessUrl,
          },
        },
      });
    },
    [updateTenant],
  );

  const refetchTenant = useCallback(async () => {
    if (tenant?.id != null && user?.id != null) {
      const updatedTenant = await getTenant({ variables: { id: tenant.id } });

      if (updatedTenant?.data?.tenant) {
        // const me = { ...user, tenant: { ...updatedTenant.data.tenant } };
        // setUser(me);
      }
    }
  }, [getTenant, tenant, user]);

  return {
    updateUserInfo,
    refetchTenant,
    data: {
      businessName: tenant?.name,
      zipCode: tenant?.address?.zipCode,
      businessUrl: tenant?.url,
    },
    loading: updateTenantLoading,
  };
};

export default useUserInfoUpdate;
