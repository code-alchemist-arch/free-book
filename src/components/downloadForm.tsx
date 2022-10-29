import React, { Dispatch, SetStateAction } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ActiveCampaignForm from './activeCampaignForm';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface DownloadFormProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DownloadForm = ({ isOpen, setIsOpen }: DownloadFormProps) => {
  
  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogTitle
        sx={{
          fontSize: '1.8rem',
          fontWeight: 700,
          lineHeight: '1.2',
          textAlign: 'center',
          padding: '32px 32px 24px 32px'
        }}
      >
        {'Where Should We Send The Download?'}
      </DialogTitle>
      <DialogContent
        sx={{
          padding: '32px'
        }}
      >
        <ActiveCampaignForm
          thanksText='By signing up you agree to receive future email marketing communication from UltraHandy'
        />
      </DialogContent>
    </Dialog>
  )
}

export default DownloadForm;