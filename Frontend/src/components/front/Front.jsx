import React from 'react'
import styles from '../front/Front.module.css'

export const Front = () => {
    return (
        <section className={`${styles.cont} ${styles.gap}`}>
            <div className={` ${styles.test} `}>
                <div className={styles.format}>
                    <img src="user.png" className={styles.profileimg} alt="profile" />
                    <h3 className={styles.stdname}> SANDEEP</h3>
                    <hr className={styles.line}/>
                    <div className={styles.info}>
                        <div className={styles.boldtxt}>StudentId :  485321</div>
                        <div className={styles.boldtxt}>Course :  Bca</div>
                        <div className={styles.boldtxt}>Section :  A2</div>
                        <button className={`${styles.bn} ${styles.btn} `}>Get Student Info</button>
                    </div>
                </div>
                <div className={styles.homepara}>
                    <div className={styles.boldtxt}>About Surana</div>
                    <img src='./logo.png' className={styles.fontimg} alt="logo"/>
                    <p className={styles.fronttext}>
                        Surana College, under GDA Foundation Trust is affiliated to
                        Bangalore University , and is also included under section 2 &
                        12 of the UGC Act 1956. The institution has been catering to all
                        sections of society on need-based quality education.
                    </p>
                </div>
            </div>
        </section>
    )
}
