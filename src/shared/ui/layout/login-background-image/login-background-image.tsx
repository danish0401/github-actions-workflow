import { FC } from 'react';
import bgImg from './assets/login_layout_bg.png';
import { StyledImg } from './styled';

const LoginBackgroundImage: FC = () => {
  return <StyledImg alt={''} src={bgImg} data-testid={'login-background-image'} />;
};

export default LoginBackgroundImage;
