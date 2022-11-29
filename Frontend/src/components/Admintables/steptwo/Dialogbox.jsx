import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export function Dialogbox(props) {
    const check = () => {
        if (props.check == "languagesbtn") {
            return <TextField id="languagename" value={props.data.section} onChange={e => props.onChange(e)} placeholder='Enter Language name to add' label="Language" fullWidth variant='outlined' margin='dense' />
        }
        else if (props.check == "subjectbtn") {
            return <TextField id="subjectname" value={props.data.section} onChange={e => props.onChange(e)} placeholder='Enter Subject name to add' label="Subject" fullWidth variant='outlined' margin='dense' />
        }
        else {
            return <><TextField id="NAME" value={props.data.name} onChange={e => props.onChange(e)} placeholder='Enter name' label="name" fullWidth variant='outlined' margin='dense' />
                <TextField id="SECTION" value={props.data.section} onChange={e => props.onChange(e)} placeholder='Enter name' label="name" fullWidth variant='outlined' margin='dense' />
                <TextField id="EMAIL" value={props.data.email} onChange={e => props.onChange(e)} placeholder='Enter name' label="name" fullWidth variant='outlined' margin='dense' />
                <TextField id="PASSWORD" value={props.data.password} onChange={e => props.onChange(e)} placeholder='Enter name' label="name" fullWidth variant='outlined' margin='dense' />
                <TextField id="LANGUAGE" value={props.data.languages} onChange={e => props.onChange(e)} placeholder='Enter name' label="name" fullWidth variant='outlined' margin='dense' /> </>
        }
    }
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Create new user
                </DialogTitle>
                <DialogContent>
                    <form>
                        {check()}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Cancel</Button>
                    <Button>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}




