import React from 'react'
import styles from '../Alert/Alert.module.css'
import { Notifi } from '../Reusablecomponents/notifi/Notifi'
export const OneAlert = (props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.txt}>{props.name}</div>
      <div className={styles.box}>
        <Notifi msg={props.msg}/>
        <Notifi msg={props.msg}/>
        <Notifi msg={props.msg}/>
        <Notifi msg={props.msg}/>
        <Notifi msg={props.msg}/>
        <Notifi msg={props.msg}/>
      </div>
    </div>
  )
}
