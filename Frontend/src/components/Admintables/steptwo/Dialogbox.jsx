import { React, useState } from 'react';
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
            if (!props.update) {
                return <>
                    <TextField id="NAME" value={props.data.name} onChange={e => props.onChange(e)} placeholder='Enter name' label="Name" fullWidth variant='outlined' margin='dense' />
                    <TextField id="SECTION" value={props.data.section} onChange={e => props.onChange(e)} placeholder='Enter name' label="Section" fullWidth variant='outlined' margin='dense' />
                    <TextField id="EMAIL" value={props.data.email} onChange={e => props.onChange(e)} placeholder='Enter name' label="Email" fullWidth variant='outlined' margin='dense' />
                    <TextField id="PASSWORD" value={props.data.password} onChange={e => props.onChange(e)} placeholder='Enter name' label="Password" fullWidth variant='outlined' margin='dense' />
                    <TextField id="LANGUAGE" value={props.data.languages} onChange={e => props.onChange(e)} placeholder='Enter name' label="Language" fullWidth variant='outlined' margin='dense' />
                </>
            } else {
                return <>
                    <TextField id="NAME" value={props.data.NAME} onChange={e => props.onChange(e)} placeholder='Enter name' label="Name" fullWidth variant='outlined' margin='dense' />
                    <TextField id="SECTION" value={props.data.SECTION} onChange={e => props.onChange(e)} placeholder='Enter name' label="Section" fullWidth variant='outlined' margin='dense' />
                    <TextField id="EMAIL" value={props.data.EMAIL} onChange={e => props.onChange(e)} placeholder='Enter name' label="Email" fullWidth variant='outlined' margin='dense' />
                    <TextField id="PASSWORD" value={props.data.PASSWORD} onChange={e => props.onChange(e)} placeholder='Enter name' label="Password" fullWidth variant='outlined' margin='dense' />
                    <TextField id="LANGUAGE" value={props.data.LANGUAGE} onChange={e => props.onChange(e)} placeholder='Enter name' label="Language" fullWidth variant='outlined' margin='dense' />
                </>
            }
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
                    {props.update ? "Update" : "Create new user"}
                </DialogTitle>
                <DialogContent>
                    <form>
                        {check()}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Cancel</Button>
                    <Button onClick={props.update ? props.updateclick : props.submit} autoFocus >
                        {props.update ? "Update" : "Submit"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}




