import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export const Dialogboxone = (props) => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.Update ? "Update" : "Create new user"}
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField id='name' value={props.data.name} onChange={props.change} placeholder='Enter the course name' label="Enter the course name" variant="outlined" margin='dense' fullWidth autoComplete='off' />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Disagree</Button>
          <Button onClick={props.Update ? props.update : props.submit} autoFocus >
            {props.Update ? "Update" : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}