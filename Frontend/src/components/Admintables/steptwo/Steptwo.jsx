import { React, useState } from 'react'
import Steptwotables from './Steptwotables';
import Button from '@mui/material/Button';
import './Steptwo.css'
import { useSelector } from 'react-redux'
import { Dialogbox } from './Dialogbox';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { addsteptwoone } from '../../../https/request'

export const Steptwo = (props) => {
  function nextStep() {
    props.onNext();
    // <button onClick={nextStep}>hi</button>
  }
  const [open, setOpen] = useState(false);
  const [formData, setformData] = useState({});
  const [data, setdatabtn] = useState("")
  const [value, setvalue] = useState(0);
  const storedata = useSelector((state) => state.TableSlice.stepone)
  const valuee = () => { setvalue(value + 1) }
  const stdinfobtn = () => {
    setformData({})
    setOpen(true);
    setdatabtn("stdinfobtn")
  };
  const subjectsbtn = () => {
    setformData({})
    setOpen(true);
    setdatabtn("subjectbtn")
  };
  const languagesbtn = () => {
    setformData({})
    setOpen(true);
    setdatabtn("languagesbtn")
  };
  const onChange = (e) => {
    const { value, id } = e.target
    setformData({ ...formData, [id]: value })
  }
  const handleClose = () => {
    setOpen(false);
  };

  function submit() {
    if (data == "languagesbtn") {
      if (!formData.languagename) return
      const query = `INSERT INTO ${storedata.Sem_Name}_languages (languages) VALUES ("${formData.languagename}");`
      async function adds() {
        try {
          const res = await addsteptwoone({ query })
          console.log(res)
          if (res.status == "200") {
            console.log("sucess")
          }
        } catch (err) {
          console.log("err")
        }
      }
      adds()
      valuee()
    } else {
      console.log("nope")
    }
    // console.log(formData)
  }
  const sectable = {
    height: "30vh",
    display: "flex"
  }
  var infotable1 = { name: `select * from ${storedata.Sem_Name}_studentinfo` }
  var infotable2 = { name: `select * from ${storedata.Sem_Name}_subjects` }
  var infotable3 = { name: `select * from ${storedata.Sem_Name}_languages` }

  return (
    <>
      <div className='back-Bar'>
        <Button variant="contained" color="secondary" startIcon={<ArrowBackIosIcon />}> Back </Button>
        <div className='tablename'>Table name</div>
        <Button variant="contained" color="secondary" endIcon={<ArrowForwardIosIcon />}> Back </Button>
      </div>
      <div className='table'>
        <div className='tableblock'>
          <div className='buto'>Studentinfo<Button variant="contained" color="success" className='useradd' onClick={stdinfobtn}>Add Course</Button></div>
          <Steptwotables search={infotable1}  check={"student"} value={value} data={data} valuee={valuee}/>
        </div>
        <div>
          <div className='tableblock'>
            <div className='buto'>Subjects<Button variant="contained" color="success" className='useradd' onClick={subjectsbtn}>Add Course</Button></div>
            <Steptwotables search={infotable2} sectable={sectable} check={"subject"} value={value} data={data} valuee={valuee}/>
          </div>
          <div className='tableblock'>
            <div className='buto'>Languages<Button variant="contained" color="success" className='useradd' onClick={languagesbtn}>Add Course</Button></div>
            <Steptwotables search={infotable3} sectable={sectable} check={"language"} value={value} data={"languagesbtn"} valuee={valuee}/>
          </div>
        </div>
        <Dialogbox open={open} handleClose={handleClose} data={formData} onChange={onChange} check={data} submit={submit} />
      </div>
    </>
  )
}




