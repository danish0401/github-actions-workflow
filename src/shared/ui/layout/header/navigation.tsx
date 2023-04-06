import { styled } from '@mui/material/styles';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import useTestIds from 'shared/hooks/useTestIds';
import { IDS_MAP } from 'shared/lib/test-utils/test-ids';
import { headerLinks, mainHeaderHeight } from '../constants';

const Navigation: FC = () => {
  const { testIds, getTestAttr } = useTestIds(IDS_MAP.NAVIGATION);

  return (
    <StyledNav>
      {headerLinks.map(({ to, title, id }) => (
        <StyledNavLink key={id} to={to} {...getTestAttr(testIds[id])}>
          {title}
        </StyledNavLink>
      ))}
    </StyledNav>
  );
};
export default Navigation;

export const StyledNav = styled('nav')(() => ({
  display: 'flex',
  alignItems: 'center',
  height: mainHeaderHeight,
  justifyContent: 'start',
  margin: 'auto 0',
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  fontSize: theme.typography.pxToRem(20),
  fontVariationSettings: '"wght" 600',
  height: '100%',
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  marginLeft: theme.spacing(4),
  position: 'relative',
  minWidth: 150,
  '&:first-of-type': {
    marginLeft: 0,
  },
  '&::after': {
    content: '" "',
    display: 'block',
    background: theme.palette.common.white,
    position: 'absolute',
    opacity: 0,
    bottom: 0,
    left: 0,
    height: 4,
    width: '100%',
  },
  '&.active': {
    color: theme.palette.common.white,
    '&::after': {
      opacity: 1,
    },
  },

  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.pxToRem(16),
    marginLeft: theme.spacing(2),
    minWidth: 54,
  },
}));
