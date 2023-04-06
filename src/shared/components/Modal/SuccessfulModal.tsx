import { FC } from 'react';
import { Grid } from '@mui/material';
import {
  StyledSuccessModal,
  StyledButton,
  StyledCheckCircleOutlineIcon,
  StyledTitle,
  StyledSubTitle,
} from 'shared/components/Modal/styledComponents';
import { ModalWindow } from 'shared/components/Modal/index';
import CloseButton from 'shared/components/CloseButton';

export type Props = {
  onClose: () => void;
  title: string;
  successfulText: string[];
};

const SuccessfulModal: FC<Props> = ({ onClose, title, successfulText }) => (
  <ModalWindow open slide onClose={onClose}>
    <StyledSuccessModal>
      <CloseButton handleClose={onClose} />
      <StyledTitle>{title}</StyledTitle>
      <StyledCheckCircleOutlineIcon />
      <Grid container flexDirection='column' justifyContent='center'>
        <StyledSubTitle>Here’s what happens next:</StyledSubTitle>
        <Grid item>
          <ol>
            {successfulText?.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ol>
        </Grid>
      </Grid>
      <StyledButton type='submit' variant='contained' onClick={onClose}>
        Got it
      </StyledButton>
    </StyledSuccessModal>
  </ModalWindow>
);

export default SuccessfulModal;
