export type PasswordPolicyDescription = {
  rules: {
    format: number[];
    message: string;
    code: string;
    verified: boolean;
    items?: {
      message: string;
      code: string;
      verified: boolean;
    }[];
  }[];
  verified: boolean;
};

export enum FormStateEnum {
  signup = 'signup',
  restore = 'restore',
  signin = 'signin',
}
