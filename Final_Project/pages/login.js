import style from "../styles/login.module.css";
//import {useSession, signIn, signOut } from "next-auth/react";

export default function Login(){
    return(
    <>
        <div className={style.loginSection}>
            <h1>Festival Conductor Login</h1>
            <div className={style.form}>
                <label>Email</label>
                <input type={"email"}></input>
                <label>Password</label>
                <input type={"password"}></input>
                <a href="" className={style.formLinks1}>Forgot Password?</a>
                <a href="registration" className={style.formLinks2}>Register</a>
                <button onClick={() => signIn()} className={style.loginButton}>Login</button>
            </div>
        </div>
    </>
    )
}