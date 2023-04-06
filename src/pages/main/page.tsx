import { FC } from 'react';
import { Grid } from '@mui/material';
import { ProductGrid } from 'features/product-grid';
import { StyledProfuctsLabel } from './styled';

const Page: FC = () => {
  return (
    <Grid container height={'100%'} alignContent={'center'}>
      <Grid item container xs={12}>
        <Grid item xs={12} mb={4}>
          <StyledProfuctsLabel>Your products</StyledProfuctsLabel>
        </Grid>
        <Grid item xs={12}>
          <ProductGrid />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;
