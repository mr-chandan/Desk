import React from 'react'
import { Line } from 'rc-progress';
import styles from '../attbar/Attbar.module.css'
export const Attbar = (props) => {
    return (
        <div className={styles.wrap}>
               <div className={styles.bar}><Line percent={props.percent} strokeWidth={4} strokeColor="#2db7f5" trailWidth={4} /></div>
        </div>
    );

}
