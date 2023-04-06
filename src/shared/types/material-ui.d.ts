// in the file where you are creating the theme (invoking the function `createTheme()`)

export enum Measurement {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export type AssetsType = {
  meta: {
    publicTitle: string;
    publicFavicon: string;
  };
  logo: {
    alt: 'logo';
    icon: string;
    title: string;
    iconFooter: string;
  };
  logoTitle: {
    top: {
      image: string;
      title: string;
    };
  };
  login: {
    formHeader: string;
  };
  icon: {
    Login: {
      listImage: string;
      mainImage: string;
    };
    Campaign: {
      WelcomePage: {
        image: string;
      };
    };
  };
};

type CustomType = {
  borderRadius: Record<Measurement, string>;
};

type CustomPalette = {
  background: {
    dark: string;
  };
};

declare module '@mui/material/styles' {
  interface Theme {
    custom: CustomType;
    assets: AssetsType;
  }

  interface ThemeOptions {
    custom?: CustomType;
    assets?: AssetsType;
  }

  interface Palette {
    custom: CustomPalette;
  }
  interface PaletteOptions {
    custom: CustomPalette;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    accent: true;
  }
}
