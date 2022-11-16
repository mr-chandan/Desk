import React from 'react'
import { useState } from 'react';
import SelectClass from '../../components/StepSelectClass/SelectClass';
import PutAttendance from '../../components/StepAttendance/Takeatt'
const steps = {
  1: SelectClass,
  2: PutAttendance,
};
const Activate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1)
  }

  return <div className='cardWrapper'>
    <Step onNext={onNext}/>
  </div>

}

export default Activate