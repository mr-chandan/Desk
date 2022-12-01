import { React, useState } from 'react'
import Steptwotables from './Steptwotables';
import Button from '@mui/material/Button';
import './Steptwo.css'
import { useSelector } from 'react-redux'
import { Dialogbox } from './Dialogbox';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { addsteptwoone, updsteptwoone } from '../../../https/request'

export const Steptwo = (props) => {
  function nextStep() {
    props.onNext();
    // <button onClick={nextStep}>hi</button>
  }
  const oldstoredata = useSelector((state) => state.TableSlice.olddata)
  const [open, setOpen] = useState(false);
  const [formData, setformData] = useState({});
  const [data, setdatabtn] = useState("")
  const [value, setvalue] = useState(0);
  const [update, setUpdate] = useState(true)
  const storedata = useSelector((state) => state.TableSlice.stepone)
  const valuee = () => { setvalue(value + 1) }

  const stdinfobtn = () => {
    setUpdate(false)
    setformData({})
    setOpen(true);
    setdatabtn("stdinfobtn")
  };
  const subjectsbtn = () => {
    setUpdate(false)
    setformData({})
    setOpen(true);
    setdatabtn("subjectbtn")
  };
  const languagesbtn = () => {
    setUpdate(false)
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
      const query = `INSERT INTO ${storedata.Sem_Name}_languages (languages) VALUES ("${storedata.Sem_Name}_${formData.languagename}");`
      async function adds() {
        try {
          const res = await addsteptwoone({ query })
          console.log(res)
          if (res.status == "200") {
            console.log("sucess")
          }
        } catch (err) {
          console.log("err")
        } finally {
          valuee()
          handleClose()
        }
      }
      adds()
    } else if (data == "subjectbtn") {
      if (!formData.subjectname) return
      const query = `INSERT INTO ${storedata.Sem_Name}_subjects (subject) VALUES ("${storedata.Sem_Name}_${formData.subjectname}");`
      async function adds() {
        try {
          const res = await addsteptwoone({ query })
          console.log(res)
          if (res.status == "200") {
            console.log("sucess")
          }
          handleClose()
        } catch (err) {
          console.log("err")
        } finally {
          valuee()
          handleClose()
        }
      }
      adds()
    } else if (data == "stdinfobtn") {
      const query = `INSERT INTO ${storedata.Sem_Name}_studentinfo (NAME ,SECTION,EMAIL,PASSWORD,LANGUAGE) VALUES ("${formData.NAME}","${formData.SECTION}","${formData.EMAIL}","${formData.PASSWORD}",${formData.LANGUAGE});`
      async function adds() {
        try {
          const res = await addsteptwoone({ query })
          console.log(res)
          if (res.status == "200") {
            console.log("sucess")
          }
          handleClose()
        } catch (err) {
          console.log("err")
        } finally {
          valuee()
          handleClose()
        }
      }
      adds()
    }
  }

  /////////////////////////////////////////////////                       update                /////////////////////////////

  function updateclick() {
    if (data == "languagesbtn") {
      if (!formData.languagename || oldstoredata.languages == formData.languagename) return
      const query = `UPDATE ${storedata.Sem_Name}_languages SET languages = "${storedata.Sem_Name}_${formData.languagename}" WHERE id = ${oldstoredata.id};`
      async function adds() {
        try {
          const res = await updsteptwoone({ query })
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
      handleClose()
    } else if (data == "subjectbtn") {
      if (!formData.subjectname || oldstoredata.subject == formData.subjectname) return
      const query = `UPDATE ${storedata.Sem_Name}_subjects SET subject = "${storedata.Sem_Name}_${formData.subjectname}" WHERE id = ${oldstoredata.id};`
      async function adds() {
        try {
          const res = await updsteptwoone({ query })
          console.log(res)
          if (res.status == "200") {
            console.log("sucess")
          }
        } catch (err) {
          console.log("err")
        } finally {
          valuee()
          handleClose()
        }
      }
      adds()
    } else if (data == "stdinfobtn") {
      const query = `UPDATE ${storedata.Sem_Name}_studentinfo SET NAME = "${formData.NAME}",SECTION = "${formData.SECTION}",EMAIL = "${formData.EMAIL}",PASSWORD = "${formData.PASSWORD}",LANGUAGE = ${formData.LANGUAGE} WHERE id = ${oldstoredata.ID};`
      async function adds() {
        try {
          const res = await updsteptwoone({ query })
          console.log(res)
          if (res.status == "200") {
            console.log("sucess")
          }
        } catch (err) {
          console.log("err")
        } finally {
          valuee()
          handleClose()
        }
      }
      adds()
    }
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
          <Steptwotables search={infotable1} check={"student"} value={value} data={"stdinfobtn"} valuee={setvalue} setformData={setformData} setOpen={setOpen} click={stdinfobtn} setUpdate={setUpdate} />
        </div>
        <div>
          <div className='tableblock'>
            <div className='buto'>Subjects<Button variant="contained" color="success" className='useradd' onClick={subjectsbtn}>Add Course</Button></div>
            <Steptwotables search={infotable2} sectable={sectable} check={"subject"} value={value} data={"subjectbtn"} valuee={setvalue} setformData={setformData} setOpen={setOpen} click={subjectsbtn} setUpdate={setUpdate} />
          </div>
          <div className='tableblock'>
            <div className='buto'>Languages<Button variant="contained" color="success" className='useradd' onClick={languagesbtn}>Add Course</Button></div>
            <Steptwotables search={infotable3} sectable={sectable} check={"language"} value={value} data={"languagesbtn"} valuee={setvalue} setformData={setformData} setOpen={setOpen} click={languagesbtn} setUpdate={setUpdate} />
          </div>
        </div>
        <Dialogbox open={open} handleClose={handleClose} update={update} data={formData} onChange={onChange} check={data} submit={submit} updateclick={updateclick} />
      </div>
    </>
  )
}




