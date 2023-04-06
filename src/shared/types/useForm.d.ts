type ValidateGeneric<T = string> = (value: T) => boolean | string;
type RecordValues = {
  value: string | number;
  message: string;
};
type FieldValidationRules = {
  validate?: ValidateGeneric<T>;
  required?: boolean | string;
  min?: RecordValues;
  max?: RecordValues;
};

type FieldValidationRulesAsFunction = (prop: string | boolean) => {
  validate?: ValidateGeneric<T>;
};

export type ValidationRulesType = Record<string, FieldValidationRules, FieldValidationRulesAsFunction>;
