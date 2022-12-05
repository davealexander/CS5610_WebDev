import style from "../styles/studentreg.module.css"
import NavBar from "../components/navbar/Navbar"

export default function StudentRegistration(){
    return(
        <>
        <NavBar></NavBar>
        <div className={style.studentRegPage}>
            {/* Registered Students section that shows registered students within the database */}
            <div className={style.registeredStudentsSection}>
                <h1>Registered Students</h1>

                <input type={"text"} id="searchbar" name="searchbar"></input>
            </div>

            {/* Student Registration Form */}
            <div className={style.studentRegistrationForm}>
                <h1>Student Registration</h1>
                <form>
                    <label>First Name</label>
                    <input type={"text"} id="firstname" required maxLength="40"></input>
                    <label>Last Name</label>
                    <input type={"text"} id="lastname" required maxLength="40"></input>
                    <label>Grade</label>
                    <select id="grade" name="grade" required>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <label>Instrument</label>
                    <input type={"text"} id="instrument" name="instrument" required maxLength="30"></input>
                    <label>Instrument 2 (optional)</label>
                    <input type={"text"} id="instrument2" name="instrument2" maxLength="30"></input>
                    <label>School</label>
                    <input type={"text"} id="school" name="school" required maxLength="40"></input>
                    <label>Ensemble 1</label>
                    <select id="ensemble1" name="ensemble1" required>
                        <option value="Band">Band</option>
                        <option value="Choir">Choir</option>
                        <option value="Orchestra">Orchestra</option>
                        <option value="Jazz Band">Jazz Band</option>
                        <option value="Jazz Choir">Jazz Choir</option>
                    </select>
                    <label>Ensemble 2 (optional)</label>
                    <select id="ensemble2" name="ensemble2">
                        <option value="Band">Band</option>
                        <option value="Choir">Choir</option>
                        <option value="Orchestra">Orchestra</option>
                        <option value="Jazz Band">Jazz Band</option>
                        <option value="Jazz Choir">Jazz Choir</option>
                    </select>
                    <label>Preferred Ensemble</label>
                    <select id="prefEnsemble" name="prefEnsemble">
                        <option value="Band">Band</option>
                        <option value="Choir">Choir</option>
                        <option value="Orchestra">Orchestra</option>
                        <option value="Jazz Band">Jazz Band</option>
                        <option value="Jazz Choir">Jazz Choir</option>
                    </select>
                    <button className={style.submitButton}>Register</button>
                </form>
            </div>
        </div>
        </>
    )
}