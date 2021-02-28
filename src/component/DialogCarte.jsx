import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import BackBubble from './BackBubble'
import '../css/Dialog.css';

const DialogTitle = ((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" style={{position : "absolute", top : 8, right : 8, color : "white"}} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function CustomizedDialogs({handleClose, open, title, content, lien, image, langage}) {

  return (
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle className="dialogTitle" onClose={handleClose}>{title}</DialogTitle>
        <DialogContent className="dialogCarte">
          <BackBubble	nbCercle={2}/>
          <Typography gutterBottom>{content}</Typography>
          <img style={{display : "block", margin : "25px auto"}} width="85%" src={image} alt="img dialogue"/>
        </DialogContent>
        <DialogActions>
            <div style={{width : "calc(100% - 140px)", display : "flex"}}>
                {langage.map((item) => {
                  return <img style={{marginLeft : "5%"}} width="28px" src={item} alt="img langage"/>
                })}
            </div>
            <Button style={{color  : "rgba(64,64,64,1)"}} href={lien} autoFocus onClick={handleClose} color="primary">En savoir plus</Button>
        </DialogActions>
      </Dialog>
  );
}