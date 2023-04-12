import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { theme, useTheme } from '@mui/material/styles';

export default function ConfirmDelete() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteRecipe = async (id) => {
    const res = await fetch('/api/recipes/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    if (res.ok) {
      console.log('yay!')
    } else {
      console.log('oh no!')
    }
    toIndex();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Test Button
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure you would like to delete this recipe?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You cannot undo this action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            sx={[
              {
                '&:hover': {
                  color: theme.palette.primary.main,
                  backgroundColor: 'white',
                  border: 1,
                  borderColor: theme.palette.primary.main
                },
              backgroundColor: theme.palette.primary.main, 
              color: 'white',
              border: 1,
              borderColor: theme.palette.primary.main
              },
            ]} 
            onClick={handleClose}>
            Cancel
          </Button>
          <Button 
            sx={[
              {
                '&:hover': {
                  color: 'red',
                  backgroundColor: 'white',
                  border: 1,
                  borderColor: 'red'
                },
              backgroundColor: 'red',
              color: 'white',
              border: 1,
              borderColor: 'red'
              },
            ]} 
            onClick={handleDeleteRecipe}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}