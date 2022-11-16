import React from 'react'
import styles from '../attendancebar/Attendancebar.module.css'
import { Attbar } from '../Reusablecomponents/attbar/Attbar'

export const Attendancebar = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.txt}>Attendance</div>
            <div className={styles.grid}>
                <div className={styles.txts}>
                    <div className={styles.fnt}>Python - 10%</div>
                    <div className={styles.fnt}>Kannada - 60%</div>
                    <div className={styles.fnt}>English - 80%</div>
                    <div className={styles.fnt}>Computer networks - 90%</div>
                    <div className={styles.fnt}>Linux - 40%</div>
                    <div className={styles.fnt}>Java - 80%</div>
                    <div className={styles.fnt}>Operating System - 20%</div>
                </div>
                <div className={styles.bar}>
                    <Attbar name="Python" percent={10} />
                    <Attbar name="Kannada" percent={60} />
                    <Attbar name="English" percent={80} />
                    <Attbar name="Computer networks" percent={90} />
                    <Attbar name="Linux" percent={40} />
                    <Attbar name="Java" percent={80} />
                    <Attbar name="Operating System" percent={20} />
                </div>
            </div>
        </div>
    )
}
