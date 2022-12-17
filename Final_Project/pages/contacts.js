import NavBar from "../components/navbar/Navbar";
import style from "../styles/contacts.module.css";
import Headerbar from "../components/headerbar/headerbar";
import axios from "axios";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

//Contacts module shows all registered users of the application and contact info for them
//This is accessible by Admins,Festival Managers, and perhaps Teachers later
export default function contacts({ users: data }) {
  return (
    <>
      {console.log(data)}
      <Headerbar></Headerbar>
      <NavBar></NavBar>
      <div className={style.contactSection}>
        <h1>Registered Contacts</h1>
        <table className={style.table}>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>School</th>
              <th>District</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
            {data.map((user, index) => (
              <tr key={index}>
                <th>{user.firstName}</th>
                <th>{user.lastName}</th>
                <th>{user.school}</th>
                <th>{user.district}</th>
                <th>{user.phoneNumber}</th>
                <th>{user.userEmail}</th>
                <th>{user.role}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: "/dashboard",
  async getServerSideProps(context) {
    const session = getSession(context.req, context.res);
    const { data } = await axios.get(
      "http://localhost:3000/api/userregistration/"
    );
    return {
      props: {
        users: data.data,
      },
    };
  },
});
