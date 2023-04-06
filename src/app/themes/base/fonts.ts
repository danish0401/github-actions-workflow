import interVarFontTTF from 'shared/assets/fonts/Inter/Inter-VariableFont_slnt,wght.ttf';
import interRegularTTF from 'shared/assets/fonts/Inter/Inter-Regular.ttf';

export const interRegular = {
  fontFamily: 'Inter',
  src: `local('Inter'),
  url(${interVarFontTTF}) format('truetype-variations'),
  url(${interRegularTTF}) format('truetype')`,
  fontWeight: '100 1000',
};
