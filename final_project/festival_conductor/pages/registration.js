import style from "../styles/login.module.css"
 
export default function Register(){
    return(
    <>
        <div className={style.registrationSection}>
            <h1>Register</h1>
            <form action="/send-data-here" method="post" className={style.form}>
                <label>First Name</label>
                <input type={"text"} id="first" name="first" required maxLength="30"></input>
                <label>Last Name</label>
                <input type={"text"} id="last" name="last" required maxLength="40"></input>
                <label>Email Address</label>
                <input type={"email"} id="email" name="email" required maxLength="60"></input>
                <label>Password</label>
                <input type={"password"} id="password" name="password" required maxLength="30"></input>
                <label>Confirm Password</label>
                <input type={"password"} id="confirmPass" name="confirmPass" required maxLength="30"></input>
                <label>Phone Number</label>
                <input type={"text"} id="phone" name="phone" maxLength="10"></input>
                <label>MMEA Number</label>
                <input type={"text"} id="mmeanum" name="mmeanum" maxLength="8"></input>
                <label>School</label>
                <input type={"text"} id="school" name="school" required maxLength="40"></input>
                <label>School Address</label>
                <input type={"text"} id="schoolAddress" name="schoolAddress" required maxLength="60"></input>
                <label>District</label>
                <select id="district" name="district" required>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label>Role</label>
                <select id="role" name="role" required>
                    <option value=""></option>
                    <option value="administrator">Administrator</option>
                    <option value="festivalmanager">Festival Manager</option>
                    <option value="judge">Judge</option>
                    <option value="educator">Educator</option>
                    <option value="user">User</option>
                </select>
                <a href="login" className={style.formLinks1}>already have a login?</a>
                <button className={style.loginButton}>Register</button>
            </form>
        </div>
    </>
    )
}