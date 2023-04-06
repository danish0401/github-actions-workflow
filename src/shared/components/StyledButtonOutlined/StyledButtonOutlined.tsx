import Button, { ButtonProps } from '@mui/material/Button';

// Only include variant, size, color from MuiButtonProps
// type ButtonBaseProps = Pick<ButtonProps, 'variant' | 'size' | 'color' | 'onClick' | 'disabled' | 'fullWidth'>;

// Include everything from MuiButtonProps except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

type Props = ButtonProps;

export const StyledButtonOutlined = ({ ...rest }: Props) => {
  return <Button {...rest} />;
};

StyledButtonOutlined.defaultProps = {
  size: 'large',
  variant: 'outlined',
  color: 'primary',
  disabled: false,
  fullWidth: false,
};
