import React from 'react'

const SelectClass = (props) => {
  function nextStep() {
    props.onNext();
  }
  return (
    <div>SelectClass
      <button onClick={nextStep}>hi</button>
    </div>
  
  )
}

export default SelectClass