import React from 'react'
import { Btn } from '../Reusablecomponents/btn/Btn'
import { Input } from '../Reusablecomponents/input/Input'
import Styles from '../Logincard/Logincard.module.css'

export const Logincard = () => {
    return (
        <section className={Styles.container}>
            <div className={Styles.Maincontainer}>
                <div className={Styles.containerlogin}>
                    <div className={Styles.wraplogin}>
                        <div className={Styles.loginpic}>
                            <img src="logo.png" alt="logoimage" />
                        </div>

                        <div className={Styles.loginform}>
                            <span className={Styles.loginformtitle}>Login</span>
                            <Input plachold="Email" type="text"/>
                            <Input plachold="Password" type="password" />
                            <Btn info="Login" />
                            <div className={`${Styles.textcenter} p-t-1}`}>
                                <span className={Styles.txt1}>Forgot</span>
                                <a href="#" className={Styles.txt2}> Username / Password ?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}