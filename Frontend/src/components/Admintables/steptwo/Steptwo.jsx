import { React, useState } from 'react'
import Steptwotables from './Steptwotables';
import Button from '@mui/material/Button';
import './Steptwo.css'
import { useSelector } from 'react-redux'
import { Dialogbox } from './Dialogbox';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Steptwo = (props) => {
  function nextStep() {
    props.onNext();
    // <button onClick={nextStep}>hi</button>
  }
  const [open, setOpen] = useState(false);
  const [formData, setformData] = useState({});
  const [data,setdatabtn] = useState("")

  const stdinfobtn = () => {
    setOpen(true);
    setdatabtn("stdinfobtn")
  };
  const subjectsbtn = () => {
    setOpen(true);
    setdatabtn("subjectbtn")
  };
  const languagesbtn = () => {
    setOpen(true);
    setdatabtn("languagesbtn")
  };
  const onChange = (e) => {
    const { value, id } = e.target
    setformData({ ...formData, [id]: value })
    console.log(formData)
  }
  const handleClose = () => {
    setOpen(false);
  };
  const storedata = useSelector((state) => state.TableSlice.stepone)
  const sectable = {
    height: "30vh",
    display: "flex"
  }
  var infotable1 = { name: `select * from ${storedata.Sem_Name}_studentinfo`}
  var infotable2 = { name: `select * from ${storedata.Sem_Name}_subjects` }
  var infotable3 = { name: `select * from ${storedata.Sem_Name}_languages` }

  return (
    <>
    <div className='back-Bar'>
    <Button variant="contained" color="secondary" startIcon={<ArrowBackIosIcon />}> Back </Button>
    <div className='tablename'>Table name</div>
    <Button variant="contained" color="secondary"  endIcon={<ArrowForwardIosIcon/>}> Back </Button>
  </div>
    <div className='table'>
      <div className='tableblock'>
        <div className='buto'>Studentinfo<Button variant="contained" color="success" className='useradd' onClick={stdinfobtn}>Add Course</Button></div>
        <Steptwotables search={infotable1} colm />
      </div>
      <div>
        <div className='tableblock'>
          <div className='buto'>Subjects<Button variant="contained" color="success" className='useradd' onClick={subjectsbtn}>Add Course</Button></div>
          <Steptwotables search={infotable2} sectable={sectable} check={"subject"}/>
        </div>
        <div className='tableblock'>
          <div className='buto'>Languages<Button variant="contained" color="success" className='useradd' onClick={languagesbtn}>Add Course</Button></div>
          <Steptwotables search={infotable3} sectable={sectable} check={"language"}/>
        </div>
      </div>
      <Dialogbox open={open} handleClose={handleClose} data={formData} onChange={onChange} check={data}/>
    </div>
    </>
  )
}




