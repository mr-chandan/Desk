import { React, useState } from 'react'
import { Stepzero } from '../../components/Admintables/stepzero/Stepzero';
import { Stepone } from '../../components/Admintables/stepone/Stepone';


const steps = {
  1: Stepzero,
  2: Stepone
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