import { React, useState } from 'react'
import './Stepzero.css'
import Tables from './Tables'
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Dialogbox } from './Dialogbox';
import { add, upd } from '../../../https/request';
import { useSelector } from 'react-redux';

export const Stepzero = (props) => {
    function nextStep() {
        props.onNext();
    }
    const [value, setValue] = useState(1);
    const [open, setOpen] = useState(false);
    const [Update, setUpdate] = useState(false);
    const storedata = useSelector((state) => state.TableSlice.olddata)
    const adduser = () => {
        setformData({name: "", })
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
    const handleClick = () => {
        setValue((pre)=>{return pre+1})
      };
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
        handleClick()
    }
    const update = (props) => {
        async function up() {
            try {
                const res = await upd({ id: storedata.id, newname: formData.name, name: storedata.name })
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
            <div className='txts'>Courses</div>
            <div className='cont'>
                <Button variant="contained" color="secondary" startIcon={<ArrowBackIosIcon />}>
                    Back
                </Button>
                <Button variant="contained" onClick={adduser} color="success" className='useradd' >Add Course</Button>
            </div>

           <Tables onpress={nextStep} setformData={setformData} open={handleClickOpen} setUpdate={setUpdate} value={value}  handleClick={handleClick}/>
            <Dialogbox open={open} close={handleClose} data={formData} change={change} submit={submit} Update={Update} update={update} />
        </div>
    )
}
