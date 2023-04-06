import { AHMeResponseType, AHMyProductsResponseType } from 'shared/types/rest';

export const mockedMeResponse: AHMeResponseType = {
  id: 'id',
  email: 'email',
  full_name: 'test account',
  is_active: false,
  is_staff: false,
  is_superuser: false,
  agency_tenants: [],
};

export const mockedMyProdyctREsponse: AHMyProductsResponseType = [
  {
    id: 2,
    name: 'name',
  },
];
