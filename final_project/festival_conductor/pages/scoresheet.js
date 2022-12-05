import style from "../styles/scoresheet.module.css"
import NavBar from "../components/navbar/Navbar"

export default function scoresheet() {
    return(
        <>
        <NavBar></NavBar>

        <div className={style.scoresheetSection}>
            <div className={style.ratings}>
                <form>
                <h1>Scoresheet</h1>
                <label for="scaleonescore"> Scale 1</label>
                <select id="scaleonescore" name="scaleonescore" required>
                    <option value=""></option>
                    <option value="0">0</option>
                    <option value="1">1</option>  
                    <option value="2">2</option>  
                    <option value="3">3</option>  
                    <option value="4">4</option>  
                    <option value="5">5</option>  
                    <option value="6">6</option>  
                    <option value="7">7</option>  
                    <option value="8">8</option>  
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <label for="scaletwoscore"> Scale 2</label>
                <select id="scaletwoscore" name="scaletwoscore" required>
                    <option value=""></option>
                    <option value="0">0</option>
                    <option value="1">1</option>  
                    <option value="2">2</option>  
                    <option value="3">3</option>  
                    <option value="4">4</option>  
                    <option value="5">5</option>  
                    <option value="6">6</option>  
                    <option value="7">7</option>  
                    <option value="8">8</option>  
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <label for="scalethreescore"> Scale 3</label>
                <select id="scalethreescore" name="scalethreescore" required>
                    <option value=""></option>
                    <option value="0">0</option>
                    <option value="1">1</option>  
                    <option value="2">2</option>  
                    <option value="3">3</option>  
                    <option value="4">4</option>  
                    <option value="5">5</option>  
                    <option value="6">6</option>  
                    <option value="7">7</option>  
                    <option value="8">8</option>  
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <label for="etudeonescore"> Etude 1</label>
                <select id="etudeonescore" name="etudeonescore" required>
                    <option value=""></option>
                    <option value="0">0</option>
                    <option value="1">1</option>  
                    <option value="2">2</option>  
                    <option value="3">3</option>  
                    <option value="4">4</option>  
                    <option value="5">5</option>  
                    <option value="6">6</option>  
                    <option value="7">7</option>  
                    <option value="8">8</option>  
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <label for="etudeonecomments"> Etude 1 Comments</label>
                <textarea id="etudeonecomments" name="etudeonecomments" required></textarea>
                <label for="etudetwoscore"> Etude 2</label>
                <select id="etudetwoscore" name="etudetwoscore" required>
                    <option value=""></option>
                    <option value="0">0</option>
                    <option value="1">1</option>  
                    <option value="2">2</option>  
                    <option value="3">3</option>  
                    <option value="4">4</option>  
                    <option value="5">5</option>  
                    <option value="6">6</option>  
                    <option value="7">7</option>  
                    <option value="8">8</option>  
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <label for="etudetwocomment"> Etude 2 Comments</label>
                <textarea id="etudetwocomment" name="etudetwocomment" required></textarea>
                <button className={style.submitButton} type="submit">Submit</button>
                </form>
            </div>
            <div className={style.activeStudent}>
                <h1>Active Student</h1>
                <div className={style.activeStudentForm}>
                    <form>
                        <label for="activeStudent">Student</label>
                        <select>
                            <option value="hello">HELLO</option>
                        </select>
                        <label for="firstname">First Name:</label>
                        <p id="firstname"></p>
                        <label for="lastname">Last Name:</label>
                        <p id="lastname"></p>
                        <label for="grade">Grade:</label>
                        <p id="grade"></p>
                        <label for="school">School:</label>
                        <p id="school"></p>
                        <label for="instrument"></label>
                        <p id="instrument"></p>
                        <label for="activescoresheet1">Scoresheet 1 Status:</label>
                        <p id="activescoresheet1"></p>
                        <label for="activescoresheet2">Scoresheet 2 Status:</label>
                        <p id="activescoresheet2"></p>
                        </form>
                </div>
            </div>
        </div>
        </>
    )
}