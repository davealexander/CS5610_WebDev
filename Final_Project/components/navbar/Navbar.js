import style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <section>
        <ul className={style.list}>
          <Image
            width={80}
            height={100}
            alt=""
            className={style.orgLogo}
            src="/../public/MMEALogoBlue.jpg"
          />
          <p className={style.orgTitle}>MMEA</p>
          <p className={style.orgTitle}>Festival Conductor</p>
          <li>
            <Link href="dashboard">Home</Link>
          </li>
          <li>
            <Link href="studentregistration">Registration</Link>
          </li>
          <li>
            <Link href="events">Events</Link>
          </li>
          <li>
            <Link href="scoresheet">Scoresheet</Link>
          </li>
          <li>
            <Link href="contacts">Contacts</Link>
          </li>
          <li>
            <Link href="profile">Profile</Link>
          </li>
          <li>
            <Link href="registration">Registration</Link>
          </li>
          <li>
            <Link href="/api/auth/logout">Logout</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
