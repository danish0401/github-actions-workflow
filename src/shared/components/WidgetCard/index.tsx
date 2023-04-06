import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import { StyledCard, StyledTitle } from 'shared/components/WidgetCard/styledComponents';

type WidgetCardProps = {
  title: string;
  isPlaceholderShown?: boolean;
  placeholder?: ReactNode;
  children: ReactNode;
};

// TODO think how to do it better ( placeholder )
const WidgetCard: FC<WidgetCardProps> = ({ title, isPlaceholderShown, placeholder, children, ...rest }) => (
  <StyledCard {...rest}>
    <Box mb={3}>
      <StyledTitle>{title}</StyledTitle>
    </Box>

    {isPlaceholderShown ? placeholder : children}
  </StyledCard>
);

WidgetCard.defaultProps = {
  isPlaceholderShown: false,
  placeholder: undefined,
};

export default WidgetCard;
