export const urlParser = (url: string): URL => {
  const str = /(http(s?)):\/\//i.test(url) ? url : `https://${url}`;
  return new URL(str);
};
