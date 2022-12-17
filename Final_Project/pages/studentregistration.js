import style from "../styles/studentreg.module.css";
import NavBar from "../components/navbar/Navbar";
import Headerbar from "../components/headerbar/headerbar";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

//Module registers students into database
//Also allows Admins,Managers, and Teachers to see who is registered
export default function StudentRegistration({ results: students }) {
  return (
    <>
      <Headerbar></Headerbar>
      <NavBar></NavBar>
      <div className={style.studentRegPage}>
        {/* Registered Students section that shows registered students within the database */}
        <div className={style.registeredStudentsSection}>
          <h1>Registered Students</h1>
          <form>
            <label>Search: </label>
            <input type={"text"} id="searchbar" name="searchbar"></input>
            <button
              type={"submit"}
              value="search"
              className={style.searchButton}
            >
              search
            </button>
          </form>
          <h2>Students Table</h2>
          <table className={style.studentTable}>
            <tbody>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Grade</th>
                <th>School</th>
                <th>Instrument</th>
                <th>Instrument 2</th>
              </tr>
              {students.data.map((s, index) => (
                <tr key={index}>
                  <th>{s.firstName}</th>
                  <th>{s.lastName}</th>
                  <th>{s.grade}</th>
                  <th>{s.school}</th>
                  <th>{s.instrument1}</th>
                  <th>{s.instrument2}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Student Registration Form */}
        <div className={style.studentRegistrationForm}>
          <h1>Student Registration</h1>
          <form action="/api/students" method="POST">
            <label>First Name</label>
            <input
              name="firstName"
              id="firstName"
              required
              maxLength="40"
            ></input>
            <label>Last Name</label>
            <input
              name="lastName"
              id="lastName"
              required
              maxLength="40"
            ></input>
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
            <input
              id="instrument1"
              name="instrument1"
              required
              maxLength="30"
            ></input>
            <label>Instrument 2 (optional)</label>
            <input id="instrument2" name="instrument2" maxLength="30"></input>
            <label>School</label>
            <input id="school" name="school" required maxLength="40"></input>
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
            <select id="preference" name="preference">
              <option value="Band">Band</option>
              <option value="Choir">Choir</option>
              <option value="Orchestra">Orchestra</option>
              <option value="Jazz Band">Jazz Band</option>
              <option value="Jazz Choir">Jazz Choir</option>
            </select>
            <button
              type={"submit"}
              value="Register"
              className={style.submitButton}
            >
              Register
            </button>
          </form>
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
