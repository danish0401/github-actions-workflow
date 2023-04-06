import numeral from 'numeral';

export const FORMAT_NUMBERS = '0,0';
export const FORMAT_DOLLARS = '$0,0';

export const formatGeneric = <T>(n: T, format = FORMAT_NUMBERS): string => {
  return numeral(n).format(format);
};

export const formatDollars = (amount: number | string | null | undefined, format: string = FORMAT_DOLLARS) => {
  return formatGeneric(amount, format);
};
