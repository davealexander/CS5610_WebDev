import style from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
  return (
    <>
    <section>
      <ul className= {style.list}>
        <Image width={80} height={100} alt="" className={style.orgLogo} src="/../public/MMEALogoBlue.jpg"/>
        <p className={style.orgTitle}>MMEA</p>
        <p className={style.orgTitle}>Festival Conductor</p>
        <li><a href="dashboard">Home</a></li>
        <li><a href="studentregistration">Registration</a></li>
        <li><a href="invoicing">Invoicing</a></li>
        <li><a href="scheduling">Scheduling</a></li>
        <li><a href="scoresheet">Scoresheet</a></li>
        <li><a href="contacts">Contacts</a></li>
        <li><a href="profile">Profile</a></li>
        <li><a href="">Logout</a></li>
      </ul>
    </section>

    <section>
    </section>
    </>
  );
}