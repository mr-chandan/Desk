import React from 'react'
import { OneAlert } from './OneAlert'
import styles from '../Alert/Alert.module.css'
import Fade from 'react-reveal/Fade';

export const Alert = () => {
    return (
        <div className={styles.grid}>
               <Fade left>
             <OneAlert name="Alerts" msg=" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"/>
             </Fade>
             <Fade right>
             <OneAlert name="Notifications" msg=" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC"/>
             </Fade>
        </div>
    )
}
