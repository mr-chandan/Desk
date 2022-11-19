import { React, useState } from 'react'
import {Stepone} from '../../components/Admincards/Stepone';
import {Steptwo} from '../../components/Admincards/Steptwo';


const steps = {
  1: Stepone,
  2: Steptwo
};

export const Adminn = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1)
  }

  return <div className='cardWrapper'>
    <Step onNext={onNext} />
  </div>
}