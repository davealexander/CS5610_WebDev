import style from "../styles/login.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import Navbar from "../components/navbar/Navbar";
import Headerbar from "../components/headerbar/headerbar";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

//Registration module that allows authenticated users to register their information
export default function Register(props) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    user && (
      <>
        <Headerbar></Headerbar>
        <Navbar></Navbar>
        <div className="container">
          <div className={style.registrationSection}>
            <h1>Register</h1>
            <form
              action="/api/userregistration/"
              method="POST"
              className={style.form}
            >
              <input
                type={"text"}
                id="auth0"
                name="auth0"
                value={user.sub}
                disabled
              />
              <label>First Name</label>
              <input
                type={"text"}
                id="firstName"
                name="firstName"
                required
                maxLength="30"
              ></input>
              <label>Last Name</label>
              <input
                type={"text"}
                id="lastName"
                name="lastName"
                required
                maxLength="40"
              ></input>
              <label>Email Address</label>
              <input
                type={"email"}
                id="userEmail"
                name="userEmail"
                required
                maxLength="60"
              ></input>
              <label>MMEA Number</label>
              <input
                type={"text"}
                id="mmeanumber"
                name="mmeanumber"
                maxLength="8"
              ></input>
              <label>School</label>
              <input
                type={"text"}
                id="school"
                name="school"
                required
                maxLength="40"
              ></input>
              <label>District</label>
              <select id="district" name="district" required>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label>Address</label>
              <input
                type={"text"}
                id="address1"
                name="address1"
                required
                maxLength="60"
              ></input>
              <label>Address 2</label>
              <input
                type={"text"}
                id="address2"
                name="address2"
                required
                maxLength="60"
              ></input>
              <label>City</label>
              <input
                type={"text"}
                id="city"
                name="city"
                required
                maxLength="60"
              ></input>
              <label>State</label>
              <input
                type={"text"}
                id="state"
                name="state"
                required
                maxLength="60"
              ></input>
              <label>Zip Code</label>
              <input
                type={"text"}
                id="zipcode"
                name="zipcode"
                required
                maxLength="60"
              ></input>
              <label>Phone Number</label>
              <input
                type={"text"}
                id="phoneNumber"
                name="phoneNumber"
                maxLength="10"
              ></input>
              <label>Role</label>
              <select id="role" name="role" required>
                <option value=""></option>
                <option value="administrator">Administrator</option>
                <option value="festivalmanager">Festival Manager</option>
                <option value="judge">Judge</option>
                <option value="educator">Educator</option>
                <option value="user">User</option>
              </select>
              <a href="login" className={style.formLinks1}>
                already have a login?
              </a>
              {/* <Link href="/dashboard"> */}
              <button type={"submit"} className={style.loginButton}>
                Register
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </>
    )
  );
}
export const getServerSideProps = withPageAuthRequired({
  returnTo: "/dashboard",
  async getServerSideProps(context) {
    const session = getSession(context.req, context.res);
    return {
      props: {},
    };
  },
});
