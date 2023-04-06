import { FC, useState } from 'react';
import { Box, Skeleton } from '@mui/material';
import { ProductIcon } from 'entities/product-icon';
import { ProductGridType, testID } from '../constants';
import useEnrichToken from '../hook/useEnrichToken';
import { StyledBox, StyledIconBox, StyledLabel, StyledWIPLabel } from './styled';

export const ProductItem: FC<ProductGridType> = ({ label, iconSet, isConfluented, link, isAvailable, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { refreshToken, loading } = useEnrichToken(id, isAvailable);

  const disabled = !isConfluented || !isAvailable || loading;

  return (
    <StyledBox
      onPointerEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      data-testid={testID.productGridItem}
      href={disabled ? '#' : `${link}${refreshToken}`}
      target='_blanc'
    >
      <StyledIconBox>
        <ProductIcon iconSet={iconSet} disabled={disabled} isHovered={isHovered} />
      </StyledIconBox>
      <Box>
        {!isConfluented && <StyledWIPLabel>Coming soon</StyledWIPLabel>}
        <StyledLabel disabled={disabled}>{label}</StyledLabel>
      </Box>
    </StyledBox>
  );
};

export const ProductItemSkeleton: FC = () => (
  <StyledBox disabled={false} data-testid={testID.productGridItemSkeleton}>
    <StyledIconBox>
      <Skeleton variant='rounded' width={64} height={64} data-testid={testID.projectItemSkeleton} />
    </StyledIconBox>
    <Box>
      <Skeleton variant='text' width={130} height={14} data-testid={testID.projectItemSkeleton} />
      <Skeleton variant='text' width={130} height={14} data-testid={testID.projectItemSkeleton} />
    </Box>
  </StyledBox>
);
