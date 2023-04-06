import isEmail from 'validator/lib/isEmail';
import { ValidationRulesType } from 'shared/types/useForm';
import { VALIDATION_MESSAGE } from './constants';

export const validationRules: ValidationRulesType = {
  email: {
    required: VALIDATION_MESSAGE.email,
    validate: (value: string) => (!isEmail(value) ? VALIDATION_MESSAGE.emailValidation : true),
  },
  password: {
    required: VALIDATION_MESSAGE.password,
  },
};
