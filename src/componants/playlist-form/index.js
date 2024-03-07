import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
const PlaylistForm =({open,handleClose,getPlaylistId})=> {
  
   const [state,setState]=useState('');
   const handleSubmit = ()=>{
     //handle uri
     
    if(!state){
        alert('invalid state');
    }
    else{
        getPlaylistId(state);
        setState('');
        handleClose();
    }
   };
  return (
    
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new playlist please insert the playlist id or playlist link.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            //id="name"
            //name="email"
            label="playlist id or link"
            //type="email"
            fullWidth
            variant="standard"
            onChange={(e)=> setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
    
  );
}
export default PlaylistForm;