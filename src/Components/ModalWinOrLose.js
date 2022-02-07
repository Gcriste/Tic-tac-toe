import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 280,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
};

const ModalWinOrLose = (props) => {
  const { handleCloseModal, showModal } = props;
  const { open, player, message } = showModal;
  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={12}>
              <Typography id='modal-modal-title' variant='h6'>
                {player} wins!
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                {message}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button onClick={handleCloseModal}>
                <CloseIcon color='primary' />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalWinOrLose;
