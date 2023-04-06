import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const HeaderLogo = () => {
  const navigate = useNavigate();
  const onClick = () => navigate('/campaigns');

  const { assets } = useTheme();

  return (
    <Box
      {...{
        onClick,
        'data-testid': 'header-logo',
        style: {
          display: 'flex',
          alignItems: 'center',
          margin: 'auto 0',
          cursor: 'pointer',
          minHeight: 70,
        },
      }}
    >
      {assets?.logo && (
        <StyledLogo>
          <LogoIconPart src={assets.logo.icon} alt={assets.logo.alt} />
          {assets.logo.title && <LogoTitlePart src={assets.logo.title} alt={assets.logo.alt} />}
        </StyledLogo>
      )}
    </Box>
  );
};

export default HeaderLogo;

const StyledLogo = styled('figure')`
  margin: 0;
  display: flex;
  width: 100%;
  height: 40px;
  flex-direction: row;
`;

const LogoTitlePart = styled('img')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'block',
    objectFit: 'contain',
    objectPosition: 'left center',
  },
}));

const LogoIconPart = styled('img')`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: left center;
`;
