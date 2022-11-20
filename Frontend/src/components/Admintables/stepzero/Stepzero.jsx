import { React, useState } from 'react'
import './Stepzero.css'
import Tables from '../../Reusablecomponents/Tables/Tables'
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Dialogbox } from '../../Dialog/Dialogbox';
import { add, upd } from '../../../https/request';
import { useSelector } from 'react-redux';

export const Stepzero = (props) => {
    function nextStep() {
        props.onNext();
    }
    const [open, setOpen] = useState(false);
    const [Update, setUpdate] = useState(false);
    const storedata = useSelector((state) => state.TableSlice.olddata)
    const adduser = () => {
        setformData({ id: "", name: "", })
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
        setformData((prev) => {
            return {
                ...prev, [id]: value
            }
        })
    }
    const submit = (props) => {
        async function adds() {
            try {
                const res = await add(formData)
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
    }
    const update = (props) => {
        console.log(storedata.id)
        console.log(formData.name)
        async function up() {
            try {
                const res = await upd({id:storedata.id,newname:formData.name})
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
    }
    return (
        <div className='box'>
            <div className='txts'>Courses</div>
            <div className='cont'>
                <Button variant="contained" color="secondary" startIcon={<ArrowBackIosIcon />}>
                    Back
                </Button>
                <Button variant="contained" onClick={adduser} color="success" className='useradd' >Add Course</Button>
            </div>

            <Tables onpress={nextStep} setformData={setformData} open={handleClickOpen} setUpdate={setUpdate} />
            <Dialogbox open={open} close={handleClose} data={formData} change={change} submit={submit} Update={Update} update={update} />
        </div>
    )
}
