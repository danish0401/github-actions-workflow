import { FC, useMemo } from 'react';
import { Box, Grid, Grow } from '@mui/material';
import { useAuth } from 'shared/providers/auth';
import { ProductGridType, SKELETON_ITEMS_LENGTH, adminHierarchyProduct, products } from '../constants';
import useUserProductList from '../hook/useUserProductList';
import { ProductItem, ProductItemSkeleton } from './product-item';

export const ProductGrid: FC = () => {
  const { data: userProductList, loading } = useUserProductList();
  const { user } = useAuth();

  const projectList = useMemo<ProductGridType[]>(() => {
    return [
      ...(user?.is_superuser ? [adminHierarchyProduct] : []),
      ...products
        .filter((product) => !product.isHidden)
        .map((product) => ({
          ...product,
          isAvailable: (userProductList ?? []).some(({ id }) => id === product.id),
        })),
    ];
  }, [user, userProductList]);

  if (loading) {
    return (
      <Grid container justifyContent={'center'}>
        {[...Array(SKELETON_ITEMS_LENGTH)].map((_, index) => (
          <ProductItemSkeleton key={index} />
        ))}
      </Grid>
    );
  }

  return (
    <Grid container justifyContent={'center'}>
      {projectList.map((project, index) => (
        <Grow in key={project.name} timeout={100 * index}>
          <Box>
            <ProductItem {...project} />
          </Box>
        </Grow>
      ))}
    </Grid>
  );
};
