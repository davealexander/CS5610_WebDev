import NavBar from "../components/navbar/Navbar"
import style from "../styles/contacts.module.css"
export default function contacts (){ 
    return(
        <>
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
                <tr>
                    <th>John</th>
                    <th>Smith</th>
                    <th>Roux</th>
                    <th>1</th>
                    <th>2071239876</th>
                    <th>info@app.com</th>
                    <th>Admin</th>
                </tr>
                <tr>
                    <th>Yugiri</th>
                    <th>Ninja</th>
                    <th>Roux</th>
                    <th>2</th>
                    <th>2070001234</th>
                    <th>ninja@app.com</th>
                    <th>Admin</th>
                </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}