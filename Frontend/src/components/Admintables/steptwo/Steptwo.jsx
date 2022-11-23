import React from 'react'
import Steptwotables from './Steptwotables';
import Button from '@mui/material/Button';
import './Steptwo.css'

export const Steptwo = (props) => {
  function nextStep() {
    props.onNext();
    // <button onClick={nextStep}>hi</button>
  }
  const sectable = {
    height: "35vh",
    display: "flex"
  }
  return (
    <div className='table'>
      <div className='tableblock'>
        <div className='buto'>Name<Button variant="contained" color="success" className='useradd'>Add Course</Button></div>
        <Steptwotables />
      </div>
      <div>
        <div className='tableblock'>
          <div className='buto'>Name<Button variant="contained" color="success" className='useradd'>Add Course</Button></div>
          <Steptwotables sectable={sectable} />
        </div>
        <div className='tableblock'>
          <div className='buto'>Name<Button variant="contained" color="success" className='useradd'>Add Course</Button></div>
          <Steptwotables sectable={sectable} />
        </div>
      </div>

    </div>
  )
}


