declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare namespace jest {
  // Vitest naming
  interface It {
    fails: It;
  }
}
