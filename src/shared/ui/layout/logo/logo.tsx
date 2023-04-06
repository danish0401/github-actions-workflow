import { Box } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export type LogoType = {
  logoAsset: string;
};
const Logo: FC<LogoType> = ({ logoAsset }) => {
  const navigate = useNavigate();
  const onClick = () => navigate('/');

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
          maxWidth: 180,
        },
      }}
    >
      {assets?.logo && (
        <StyledLogo>
          {logoAsset && <LogoIconPart src={logoAsset} alt={assets.logo.alt} />}
          {assets.logo.title && <LogoTitlePart src={assets.logo.title} alt={assets.logo.alt} />}
        </StyledLogo>
      )}
    </Box>
  );
};

export default Logo;

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
