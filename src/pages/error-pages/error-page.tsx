import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BasicRoundedGrid } from 'shared/ui/common';

type Props = {
  title: string;
  subtitle: string;
};

const ErrorPage: FC<Props> = ({ title, subtitle }) => {
  return (
    <BasicRoundedGrid flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Header>{title}</Header>
      <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
      <StyledLink to={'/'}>
        <Button variant={'contained'}>Go to main page</Button>
      </StyledLink>
    </BasicRoundedGrid>
  );
};

export default ErrorPage;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Header = styled('header')`
  font-size: ${({ theme }) => theme.typography.pxToRem(42)};
  font-weight: 700;
  font-variation-settings: 'wgth' 700;
  color: ${({ theme }) => theme.palette.primary.main};
`;
