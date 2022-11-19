import { React, useState } from 'react'
import '../Admincards/Admin.css'
import Tables from '../Reusablecomponents/Tables/Tables'
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Dialogbox } from '../Dialog/Dialogbox';

export const Stepone = (props) => {
    function nextStep() {
        props.onNext();
    }
    const [open, setOpen] = useState(false);
    const [Update, setUpdate] = useState(false);

    const adduser = () => {
        setformData({ id: "", course: "", })
        setUpdate(false)
        setOpen(true);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [formData, setformData] = useState({
        id: "",
        course: "",
    });
    const change = (e) => {
        const { value, id } = e.target
        console.log(value, id)
        setformData((prev) => {
            return {
                ...prev, [id]: value
            }
        })
    }
    const submit = (props) => {
        console.log(formData)
    }
    return (
        <div className='box'>
            <div className='txts'>Courses</div>
            <div className='cont'>
                <Button variant="contained" color="secondary" startIcon={<ArrowBackIosIcon />}>
                    Back
                </Button>
                <Button variant="contained" onClick={adduser} color="success" className='useradd'>Add Course</Button>
            </div>

            <Tables onpress={nextStep} setformData={setformData} open={handleClickOpen} setUpdate={setUpdate} />
            <Dialogbox open={open} close={handleClose} data={formData} change={change} submit={submit} Update={Update} />
        </div>
    )
}
