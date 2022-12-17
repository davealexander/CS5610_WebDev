import style from "../styles/scoresheet.module.css";
import NavBar from "../components/navbar/Navbar";
import Headerbar from "../components/headerbar/headerbar";
import { useEffect, useState, useRef } from "react";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

// Scoresheet program is used for Judges, Admins,
// and Festival Managers to judicate student audtions
export default function Scoresheet({ results: students }) {
  const studentArray = JSON.stringify(students.data);

  const studentArray2 = JSON.parse(studentArray);

  const [studentSelect, setStudentSelect] = useState(0);

  const [message, setMessage] = useState("");

  function setActiveUser() {
    const timer = setTimeout(() => {
      setMessage("User Set");
    }, 1000);
    return () => {
      setMessage("");
      clearTimeout(timer);
    };
  }

  useEffect(() => {
    const selectedStudent = document.getElementById("studentSelect");
    setStudentSelect(selectedStudent.value);
  }, [message]);

  return (
    <>
      <Headerbar></Headerbar>
      <NavBar></NavBar>

      {/* Scoresheet form */}
      <div className={style.scoresheetSection}>
        <div className={style.ratings}>
          <form
            action={`/api/scoresheets/${studentArray2[studentSelect]._id}`}
            method="POST"
          >
            <h1>Scoresheet</h1>
            <label> Scale 1</label>
            <input type={"hidden"} value />
            <select id="scale1" name="scale1" required>
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
            <label> Scale 2</label>
            <select id="scale2" name="scale2" required>
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
            <label> Scale 3</label>
            <select id="scale3" name="scale3" required>
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
            <label> Etude 1</label>
            <select id="etude1" name="etude1" required>
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
            <label> Etude 1 Comments</label>
            <textarea
              id="etude1comments"
              name="etude1comments"
              required
            ></textarea>
            <label> Etude 2</label>
            <select id="etude2" name="etude2" required>
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
            <label> Etude 2 Comments</label>
            <textarea
              id="etude2comments"
              name="etude2comments"
              required
            ></textarea>
            <button className={style.submitButton} type="submit">
              Submit
            </button>
          </form>
        </div>

        {/* Student Selection form */}
        <div className={style.activeStudent}>
          <h1>Active Student</h1>
          <div className={style.activeStudentForm}>
            <label>Student</label>
            <select id="studentSelect">
              {students.data.map((s, index) => (
                <option key={index} defaultValue={""} value={index}>
                  {s.firstName + " " + s.lastName}
                </option>
              ))}
            </select>
            <div>
              <label>First Name:</label>
              <input type={"hidden"} value={studentArray2[studentSelect]._id} />
              <p id="firstname">{studentArray2[studentSelect].firstName}</p>
              <label>Last Name:</label>
              <p id="lastname">{studentArray2[studentSelect].lastName}</p>
              <label>Grade:</label>
              <p id="grade">{studentArray2[studentSelect].grade}</p>
              <label>School:</label>
              <p id="school">{studentArray2[studentSelect].school}</p>
              <label></label>
              <p id="instrument">{studentArray2[studentSelect].instrument1}</p>
              <label>Scoresheet 1 Status:</label>
              <p id="activescoresheet1">N/A</p>
              <label>Scoresheet 2 Status:</label>
              <p id="activescoresheet2">N/A</p>
              <p>{message}</p>
            </div>
            <button onClick={setActiveUser}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: "/dashboard",
  async getServerSideProps(context) {
    const session = getSession(context.req, context.res);
    const res = await fetch("http://localhost:3000/api/students");
    const json = await res.json();
    const data = json;

    return {
      props: {
        results: data,
      },
    };
  },
});
