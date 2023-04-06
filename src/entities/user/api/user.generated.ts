import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../../types';

import { TenantFragmentFragmentDoc } from './tenant.generated';
const defaultOptions = {} as const;
export type UserFragmentFragment = {
  __typename?: 'User';
  id: string;
  name?: string | null;
  email: string;
  picture?: string | null;
  timezone?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: string | null;
  role: { __typename?: 'Role'; id: string; label: string; name: string };
  tenant?: {
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
  } | null;
  onboardingTours?: { __typename?: 'OnboardingTours'; welcomeBonusHighlight?: boolean | null } | null;
};

export type RoleFragmentFragment = { __typename?: 'Role'; id: string; label: string; name: string };

export type OnboardingToursFragmentFragment = {
  __typename?: 'OnboardingTours';
  welcomeBonusHighlight?: boolean | null;
};

export type UpdateUserMutationMutationVariables = Types.Exact<{
  input: Types.UserUpdateInput;
}>;

export type UpdateUserMutationMutation = {
  __typename?: 'Mutation';
  updateUser: {
    __typename?: 'User';
    id: string;
    name?: string | null;
    email: string;
    picture?: string | null;
    timezone?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    deletedAt?: string | null;
    role: { __typename?: 'Role'; id: string; label: string; name: string };
    tenant?: {
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
    } | null;
    onboardingTours?: { __typename?: 'OnboardingTours'; welcomeBonusHighlight?: boolean | null } | null;
  };
};

export type MeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me: {
    __typename?: 'User';
    id: string;
    name?: string | null;
    email: string;
    picture?: string | null;
    timezone?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    deletedAt?: string | null;
    role: { __typename?: 'Role'; id: string; label: string; name: string };
    tenant?: {
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
    } | null;
    onboardingTours?: { __typename?: 'OnboardingTours'; welcomeBonusHighlight?: boolean | null } | null;
  };
};

export const RoleFragmentFragmentDoc = gql`
  fragment RoleFragment on Role {
    id
    label
    name
  }
`;
export const OnboardingToursFragmentFragmentDoc = gql`
  fragment OnboardingToursFragment on OnboardingTours {
    welcomeBonusHighlight
  }
`;
export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    id
    name
    email
    picture
    role {
      ...RoleFragment
    }
    timezone
    tenant {
      ...TenantFragment
    }
    createdAt
    updatedAt
    deletedAt
    onboardingTours {
      ...OnboardingToursFragment
    }
  }
  ${RoleFragmentFragmentDoc}
  ${TenantFragmentFragmentDoc}
  ${OnboardingToursFragmentFragmentDoc}
`;
export const UpdateUserMutationDocument = gql`
  mutation UpdateUserMutation($input: UserUpdateInput!) {
    updateUser(input: $input) {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type UpdateUserMutationMutationFn = Apollo.MutationFunction<
  UpdateUserMutationMutation,
  UpdateUserMutationMutationVariables
>;

/**
 * __useUpdateUserMutationMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutationMutation, { data, loading, error }] = useUpdateUserMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateUserMutationMutation, UpdateUserMutationMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutationMutation, UpdateUserMutationMutationVariables>(
    UpdateUserMutationDocument,
    options,
  );
}
export type UpdateUserMutationMutationHookResult = ReturnType<typeof useUpdateUserMutationMutation>;
export type UpdateUserMutationMutationResult = Apollo.MutationResult<UpdateUserMutationMutation>;
export type UpdateUserMutationMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutationMutation,
  UpdateUserMutationMutationVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
