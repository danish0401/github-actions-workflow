import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: import.meta.env.REACT_APP_API_URL,
  documents: 'src/**/!(schema.graphql).graphql',
  generates: {
    'src/types.ts': {
      plugins: ['typescript'],
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: { extension: '.generated.tsx', baseTypesPath: 'types.ts' },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        scalars: {
          ID: 'string',
          String: 'string',
          Boolean: 'boolean',
          Int: 'number',
          Float: 'number',
          AccountNumber: 'string',
          BigInt: 'number',
          Date: 'string',
          DateTime: 'string',
          EmailAddress: 'string',
          JSON: 'Record<string, any>',
          JWT: 'string',
          LocalDate: 'string',
          LocalEndTime: 'string',
          LocalTime: 'string',
          NegativeFloat: 'number',
          NegativeInt: 'number',
          NonEmptyString: 'string',
          NonNegativeFloat: 'number',
          NonNegativeInt: 'number',
          NonPositiveFloat: 'number',
          NonPositiveInt: 'number',
          ObjectID: 'string',
          PositiveFloat: 'number',
          PositiveInt: 'number',
          SafeInt: 'number',
          Time: 'string',
          TimeZone: 'string',
          Timestamp: 'string',
          URL: 'string',
          UUID: 'string',
          Void: 'void',
        },
      },
      hooks: {
        afterAllFileWrite: ['eslint --cache --fix', 'prettier --write'],
      },
    },
  },
};

export default config;
