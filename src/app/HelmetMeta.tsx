import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import reduce from 'lodash/reduce';

const REACT_APP_API_URL = '';

export const allowedSrcCSPC = {
  cybersource: 'https://*.cybersource.com/',
  appzi: 'https://*.appzi.io/',
  google: 'https://*.google.com',
  googleFonts: 'https://fonts.googleapis.com/',
  zendesk1: 'https://static.zdassets.com/',
  zendesk2: 'https://*.zendesk.com/',
  zendesk3: 'https://*.smooch.io',
};

const contentSecurityPolicyConfig = {
  'style-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-hashes'",
    'sha256-nMxMqdZhkHxz5vAuW/PAoLvECzzsmeAxD/BNwG15HuA=',
    allowedSrcCSPC.google,
    allowedSrcCSPC.googleFonts,
  ],
  'frame-src': ["'self'", allowedSrcCSPC.cybersource],
  'child-src': ["'self'", allowedSrcCSPC.cybersource],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    'sha256-D6kpIX0A4TTsmvxfEpOpkS2C/u3VGN/Hbjf0UwftoVg=',
    allowedSrcCSPC.appzi,
    allowedSrcCSPC.cybersource,
    allowedSrcCSPC.zendesk1,
    allowedSrcCSPC.zendesk2,
    allowedSrcCSPC.zendesk3,
    REACT_APP_API_URL,
  ],
};

const concatMeta = (config: Record<string, string[]>): string =>
  reduce(
    config,
    (memo, item, key) => {
      return `${memo + key} ${item?.join(' ')};`;
    },
    '',
  );

const HelmetMeta: FC = () => {
  const theme = useTheme();
  return (
    <Helmet>
      <meta httpEquiv='Content-Security-Policy' content={concatMeta(contentSecurityPolicyConfig)} />
      <link rel='icon' type='image/png' href={theme?.assets?.meta?.publicFavicon} sizes='16x16' />
    </Helmet>
  );
};

export default HelmetMeta;
