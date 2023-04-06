import { Backdrop, Slide } from '@mui/material';
import { FC, ReactNode } from 'react';
import { StyledContainer, StyledModal } from 'shared/components/Modal/styledComponents';

export type CustomModal = {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
  slide?: boolean;
};

const ModalWindow: FC<CustomModal> = ({ children, open, onClose, slide, ...styleProps }) => (
  <StyledModal
    open={open}
    onClose={onClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{ timeout: 500 }}
  >
    {slide ? (
      <Slide direction='up' in={open}>
        <StyledContainer {...styleProps}>{children}</StyledContainer>
      </Slide>
    ) : (
      <StyledContainer {...styleProps}>{children}</StyledContainer>
    )}
  </StyledModal>
);

ModalWindow.defaultProps = {
  slide: false,
  onClose: () => undefined,
};

export default ModalWindow;
