import { React, useState } from 'react'
import { Stepzero } from '../../components/Admintables/stepzero/Stepzero';
import { Stepone } from '../../components/Admintables/stepone/Stepone';
import { Steptwo } from '../../components/Admintables/steptwo/Steptwo'

const steps = {
  0: Stepzero,
  1: Stepone,
  2: Steptwo
};

export const Adminn = () => {
  const [step, setStep] = useState(0);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1)
  }

  return <div className='cardWrapper'>
    <Step onNext={onNext} />
  </div>
}