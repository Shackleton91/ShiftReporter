import React from 'react'
import Styles from './Login.module.scss';

const Login = () => {
    return (
        <div className={Styles.loginPage}>
            <h1 className={Styles.title}>Shift Reporter Portal</h1>
            <label className= {Styles.idnumber}>ID Number:</label><br></br>
            <input  placeholder="i.e 763489" required/>
            <br></br>
            <label className={Styles.password}>Password:</label><br></br>
            <input placeholder="******" required/>
            <br></br>
            <button className={Styles.submit} value="login">Login</button>
        </div>
    )
}

export default Login
