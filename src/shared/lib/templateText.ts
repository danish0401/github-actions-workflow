// not good, will fix in a sprint type and add formatDollars
// TODO: remove
type Values = Record<string, boolean | number | string | string[] | number[]>;

export default function (str: string, val: Values): string {
  const reg = /{(\w+)}/g;

  return str?.replace(reg, (_, key) => {
    return val[key] || key;
  });
}
