import React from 'react'

const Stepthree = (props) => {
  function nextStep() {
    props.onNext();
  }
  return (
    <div>step 2
      <button onClick={nextStep}>hi</button>
    </div>
  
  )
}

export default Stepthree