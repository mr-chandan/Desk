import React from 'react'
import Styles from '../input/Input.module.css'

export const Input = (props) => {
    return (
        <div className={Styles.wrapinput}>
            <input type={props.type} className={Styles.input} placeholder={props.plachold} required autoComplete="off" />
            <span className={Styles.focusinput}></span>
            <span className={Styles.symbolinput}>
                <i className={`${Styles.fa} fa-envelope`} aria-hidden="true"></i>
            </span>
        </div>
    )
}
