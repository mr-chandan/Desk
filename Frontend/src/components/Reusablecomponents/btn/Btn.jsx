import React from 'react'
import Styles from '../btn/Btn.module.css'

export const Btn = (props) => {
  return (
    <div className={Styles.loginformbtncontainer}>
    <button className={Styles.loginformbtn}>{props.info}</button>
</div>
  )
}
