import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../../types';
const defaultOptions = {} as const;
export type TenantFragmentFragment = {
  __typename?: 'Tenant';
  id: string;
  name: string;
  url?: string | null;
  clientTheme?: string | null;
  budget?: number | null;
  address?: {
    __typename?: 'TenantAddress';
    zipCode?: string | null;
    state?: string | null;
    city?: string | null;
  } | null;
};

export type UpdateTenantMutationVariables = Types.Exact<{
  input: Types.UpdateTenantInput;
}>;

export type UpdateTenantMutation = {
  __typename?: 'Mutation';
  updateTenant: {
    __typename?: 'Tenant';
    id: string;
    name: string;
    url?: string | null;
    clientTheme?: string | null;
    budget?: number | null;
    address?: {
      __typename?: 'TenantAddress';
      zipCode?: string | null;
      state?: string | null;
      city?: string | null;
    } | null;
  };
};

export type TenantQueryVariables = Types.Exact<{
  id: Types.Scalars['UUID'];
}>;

export type TenantQuery = {
  __typename?: 'Query';
  tenant: {
    __typename?: 'Tenant';
    id: string;
    name: string;
    url?: string | null;
    clientTheme?: string | null;
    budget?: number | null;
    address?: {
      __typename?: 'TenantAddress';
      zipCode?: string | null;
      state?: string | null;
      city?: string | null;
    } | null;
  };
};

export const TenantFragmentFragmentDoc = gql`
  fragment TenantFragment on Tenant {
    id
    name
    address {
      zipCode
      state
      city
    }
    url
    clientTheme
    budget
  }
`;
export const UpdateTenantDocument = gql`
  mutation UpdateTenant($input: UpdateTenantInput!) {
    updateTenant(input: $input) {
      ...TenantFragment
    }
  }
  ${TenantFragmentFragmentDoc}
`;
export type UpdateTenantMutationFn = Apollo.MutationFunction<UpdateTenantMutation, UpdateTenantMutationVariables>;

/**
 * __useUpdateTenantMutation__
 *
 * To run a mutation, you first call `useUpdateTenantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTenantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTenantMutation, { data, loading, error }] = useUpdateTenantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTenantMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateTenantMutation, UpdateTenantMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTenantMutation, UpdateTenantMutationVariables>(UpdateTenantDocument, options);
}
export type UpdateTenantMutationHookResult = ReturnType<typeof useUpdateTenantMutation>;
export type UpdateTenantMutationResult = Apollo.MutationResult<UpdateTenantMutation>;
export type UpdateTenantMutationOptions = Apollo.BaseMutationOptions<
  UpdateTenantMutation,
  UpdateTenantMutationVariables
>;
export const TenantDocument = gql`
  query Tenant($id: UUID!) {
    tenant(id: $id) {
      ...TenantFragment
    }
  }
  ${TenantFragmentFragmentDoc}
`;

/**
 * __useTenantQuery__
 *
 * To run a query within a React component, call `useTenantQuery` and pass it any options that fit your needs.
 * When your component renders, `useTenantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTenantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTenantQuery(baseOptions: Apollo.QueryHookOptions<TenantQuery, TenantQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TenantQuery, TenantQueryVariables>(TenantDocument, options);
}
export function useTenantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TenantQuery, TenantQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TenantQuery, TenantQueryVariables>(TenantDocument, options);
}
export type TenantQueryHookResult = ReturnType<typeof useTenantQuery>;
export type TenantLazyQueryHookResult = ReturnType<typeof useTenantLazyQuery>;
export type TenantQueryResult = Apollo.QueryResult<TenantQuery, TenantQueryVariables>;
