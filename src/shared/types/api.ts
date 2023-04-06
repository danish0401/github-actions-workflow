export enum MessageLevel {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Warning = 'warning',
}

export type ResponseMessage = {
  text: string;
  level: MessageLevel;
};
