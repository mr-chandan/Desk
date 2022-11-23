import { React, useState } from 'react'
import Tableone from './Tableone'
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Dialogbox } from '../stepzero/Dialogbox';
import { addsteptwo, updsteptwo } from '../../../https/request'
import { useSelector } from 'react-redux';

export const Stepone = (props) => {
    const storedata = useSelector((state) => state.TableSlice.stepone.name)
    const oldstoredata = useSelector((state) => state.TableSlice.olddata)
    function nextStep() {
        props.onNext();
    }
    const [value, setValue] = useState(1);
    const [open, setOpen] = useState(false);
    const [Update, setUpdate] = useState(false);
    const handleClick = () => {
        setValue((pre) => { return pre + 1 })
    };
    const adduser = () => {
        setformData("")
        setUpdate(false)
        setOpen(true);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [formData, setformData] = useState("");
    const change = (e) => {
        const { value } = e.target
        setformData(value)
    }
    const submit = (props) => {
        async function adds() {
            try {
                const res = await addsteptwo({ formData, storedata })
                console.log(res)
                if (res.status == "200") {
                    console.log("sucess")
                }
            } catch (err) {
                console.log("err")
            }
        }
        adds()
        setOpen(false);
        handleClick()
    }
    const update = (props) => {
        async function up() {
            try {
                const res = await updsteptwo({ storedata, formData, oldstoredata })
                console.log(res)
                if (res.status == "200") {
                    console.log("sucess")
                }
            } catch (err) {
                console.log("err")
            }
        }
        up()
        setOpen(false);
        handleClick()
    }
    return (
        <div className='box'>
            <div className='txts'>{storedata}.info</div>
            <div className='cont'>
                <Button variant="contained" color="secondary" startIcon={<ArrowBackIosIcon />}>
                    Back
                </Button>
                <Button variant="contained" onClick={adduser} color="success" className='useradd'>Add Course</Button>
            </div>

            <Tableone onpress={nextStep} setformData={setformData} open={handleClickOpen} setUpdate={setUpdate} value={value} handleClick={handleClick} />
            <Dialogbox open={open} close={handleClose} data={formData} change={change} submit={submit} Update={Update} update={update} />
        </div>
    )
}
