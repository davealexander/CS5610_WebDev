import axios from "axios";
import { useRouter } from "next/router";
import Headerbar from "../components/headerbar/headerbar";
import NavBar from "../components/navbar/Navbar";
import style from "../styles/login.module.css";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

const url = "http://localhost:3000/api/userregistration/";

//Displays user profile information
export default function Profile({ user: activeuser }) {
  const userID = activeuser.data._id;
  const router = useRouter();
  return (
    <>
      <NavBar></NavBar>
      <Headerbar></Headerbar>
      <div className="container">
        <div className={style.profileSection}>
          <h1>Profile</h1>
          <form
            action={`/api/userregistration/${userID}`}
            className={style.form}
          >
            <label>First Name</label>
            <input
              type={"text"}
              id="firstName"
              name="firstName"
              required
              maxLength="30"
              defaultValue={activeuser.data.firstName}
            ></input>
            <label>Last Name</label>
            <input
              type={"text"}
              id="lastName"
              name="lastName"
              required
              maxLength="40"
              defaultValue={activeuser.data.lastName}
            ></input>
            <label>Email Address</label>
            <input
              type={"email"}
              id="userEmail"
              name="userEmail"
              required
              maxLength="60"
              defaultValue={activeuser.data.userEmail}
            ></input>
            <label>MMEA Number</label>
            <input
              type={"text"}
              id="mmeanumber"
              name="mmeanumber"
              maxLength="8"
              defaultValue={activeuser.data.mmeanumber}
            ></input>
            <label>School</label>
            <input
              type={"text"}
              id="school"
              name="school"
              required
              maxLength="40"
              defaultValue={activeuser.data.school}
            ></input>

            <label>District</label>
            <select id="district" name="district" required>
              <option defaultValue={activeuser.data.district}>
                {activeuser.data.district}
              </option>
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
              defaultValue={activeuser.data.address1}
            ></input>
            <label>Address 2</label>
            <input
              type={"text"}
              id="address2"
              name="address2"
              required
              maxLength="60"
              defaultValue={activeuser.data.address2}
            ></input>
            <label>City</label>
            <input
              type={"text"}
              id="city"
              name="city"
              required
              maxLength="60"
              defaultValue={activeuser.data.city}
            ></input>
            <label>State</label>
            <input
              type={"text"}
              id="state"
              name="state"
              required
              maxLength="60"
              defaultValue={activeuser.data.state}
            ></input>
            <label>Zip Code</label>
            <input
              type={"text"}
              id="zipcode"
              name="zipcode"
              required
              maxLength="60"
              defaultValue={activeuser.data.zipcode}
            ></input>
            <label>Phone Number</label>
            <input
              type={"text"}
              id="phoneNumber"
              name="phoneNumber"
              maxLength="10"
              defaultValue={activeuser.data.phoneNumber}
            ></input>
            <label>Role</label>
            <select id="role" name="role" required>
              <option defaultValue={activeuser.data.role}>
                {activeuser.data.role}
              </option>
              <option value="administrator">Administrator</option>
              <option value="festivalmanager">Festival Manager</option>
              <option value="judge">Judge</option>
              <option value="educator">Educator</option>
              <option value="user">User</option>
            </select>
            <a href="login" className={style.formLinks1}>
              already have a login?
            </a>
            <button type="submit" className={style.submitButton}>
              Submit
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
    const { data } = await axios.get(url + "/639cdd56bd07b86819ea396c");
    return {
      props: {
        user: data,
      },
    };
  },
});
