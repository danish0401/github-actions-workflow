import { Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import dayjs from 'dayjs';
import { footerHeight } from '../constants';
import Logo from '../logo';

const Footer: FC = () => {
  const { assets } = useTheme();

  return (
    <StyledFooterWrapper>
      <Logo logoAsset={assets?.logo?.iconFooter} />

      <Typography variant='body2' fontSize={12} color={'primary.contrastText'}>
        ©{dayjs().year()} Compulse 360. All Rights Reserved.
      </Typography>

      {/* TODO: uncomment when email will be ready to use  */}
      {/* <Box fontSize={12} color={'primary.contrastText'}>
        Need help?{' '}
        <StyledLink href='mailto:support@compulse.com' target='_blank'>
          support@compulse.com
        </StyledLink>
      </Box> */}
    </StyledFooterWrapper>
  );
};

export default Footer;

export const StyledDivider = styled('span')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),
  fontWeight: 700,
  padding: theme.spacing(0, 0.5),
  color: theme.palette.primary.light,
  '&::before': {
    content: '"·"',
  },
}));

export const StyledFooterWrapper = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.custom.background.dark,
  padding: theme.spacing(1, 3),
  height: footerHeight,
  position: 'sticky',
  bottom: 0,
  left: 0,
  width: '100%',
  zIndex: 100,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: theme.palette.primary.light,
}));

export const StyledLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  fontWeight: 'bold',
  color: theme.palette.primary.contrastText,
}));
