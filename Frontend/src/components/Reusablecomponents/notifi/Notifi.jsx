import React from 'react'
import styles from '../notifi/Notifi.module.css'

export const Notifi = (props) => {
  return (
    <div className={styles.wrap}> 
    <div className={styles.icon}>
      <img src="new-notification.png" alt="" className={styles.img}/>
      </div>
      <div className={styles.text}>
      {props.msg}
      </div>

      </div>
  )
}
