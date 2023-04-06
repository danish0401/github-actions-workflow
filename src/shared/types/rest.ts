export type AHMeRequestType = {
  advertiser: number;
  agency: string;
  role: string;
  search: string;
  limit: number;
  offset: number;
};

export type AHAgencyType = {
  id: string;
  str_id: string;
  name: string;
  url: string;
  available_on_sswa: boolean;
  available_on_dashboard: boolean;
  available_on_am: boolean;
  available_on_mediaplanner: boolean;
  created_at: string;
  updated_at: string;
  deactivated_at: string;
};

export type AHAdvertiserType = {
  id: string;
  name: string;
};
export type AHSubAgencieType = {
  id: string;
  name: string;
};
export type AHProductType = {
  id: number;
  name: string;
};

export type AHAgencyTenantsType = {
  id: number;
  is_agency_admin: boolean;
  agency: AHAgencyType;
  advertisers: AHAdvertiserType[];
  sub_agencies: AHAgencyTenantsType[];
  stations: AHStationType[];
  roles: AHRoleType[];
  all_advertisers_selected: boolean;
};
export type AHStationType = {
  id: string;
  name: string;
  agencies: string[];
  available_on_sswa: boolean;
  available_on_dashboard: boolean;
  available_on_am: boolean;
  available_on_mediaplanner: boolean;
  created_at: string;
  updated_at: string;
  deactivated_at: string;
};
export type AHRolePermissionType = {
  id: number;
  code: string;
  name: string;
  product: AHProductType;
};
export type AHRoleType = {
  id: 0;
  name: string;
  permissions: AHRolePermissionType[];
  user_count: string;
};

export type AHMeResponseType = {
  id: string;
  email: string;
  full_name: string;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  agency_tenants: AHAgencyTenantsType[];
};

export type MyProductsType = {
  id: number;
  name: string;
};

export type AHMyProductsResponseType = AHProductType[];

export type AHErrorType = {
  code?: string;
  field?: null | string;
  message: string;
  type?: string;
};

export type AHLoginRequestType = {
  email: string;
  password: string;
};

export type AHTokenResponse = {
  access: string;
  refresh: string;
};
