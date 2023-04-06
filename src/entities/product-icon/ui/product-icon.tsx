import { FC } from 'react';
import { SvgIcon } from '@mui/material';
import { ProductGridType } from 'features/product-grid/constants';

export type ProductIconType = {
  iconSet: ProductGridType['iconSet'];
  disabled: boolean;
  isHovered: boolean;
};

export const ProductIcon: FC<ProductIconType> = ({
  iconSet: { base: BaseIcon, hovered: HoveredIcon, inactive: InactiveIcon },
  disabled,
  isHovered,
}) => {
  let icon = BaseIcon;

  if (disabled) {
    icon = InactiveIcon;
  }
  if (!disabled && isHovered) {
    icon = HoveredIcon;
  }
  return (
    <SvgIcon
      component={icon}
      inheritViewBox
      sx={{
        width: 64,
        height: 64,
      }}
    />
  );
};
