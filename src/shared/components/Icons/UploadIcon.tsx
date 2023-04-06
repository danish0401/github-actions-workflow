import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';

const UploadIcon = (props: SvgIconProps) => {
  const theme = useTheme();
  return (
    <>
      <SvgIcon {...props}>
        <path
          /* eslint-disable max-len */
          d='M48.375 25.6693C46.675 17.0443 39.1 10.5693 30 10.5693C22.775 10.5693 16.5 14.6693 13.375 20.6693C5.85 21.4693 0 27.8443 0 35.5693C0 43.8443 6.725 50.5693 15 50.5693H47.5C54.4 50.5693 60 44.9693 60 38.0693C60 31.4693 54.875 26.1193 48.375 25.6693ZM35 33.0693V43.0693H25V33.0693H17.5L30 20.5693L42.5 33.0693H35Z'
          fill='url(#paint0_linear_3292:34593)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_3292:34593'
            x1='30'
            y1='10.5693'
            x2='30'
            y2='50.5693'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor={theme.palette.primary.main} />
            <stop offset='0.9999' stopColor={theme.palette.secondary.main} />
            <stop offset='1' stopColor={theme.palette.secondary.dark} />
          </linearGradient>
        </defs>
      </SvgIcon>
    </>
  );
};

export default UploadIcon;
