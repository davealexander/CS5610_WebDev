import Image from "next/image";
import styles from "../styles/HomeOriginal.module.css";
import Link from "next/link";
import GeneralNav from "../components/generalNavBar/GeneralNavBar";

//Home page to the entire site
export default function Home() {
  return (
    <>
      <GeneralNav></GeneralNav>
      <div>
        <div className={styles.header}>
          <h2>Welcome to the Festival Conductor</h2>
        </div>
        <div className={styles.info}>
          This is an application where you and your team of people can manage
          Music festivals. We cover student registration, scheduling,
          scoresheets, and centralizing your festivals information.{" "}
          <Link href={"/"}>Find out more here</Link>
        </div>
        <section className={styles.loginCard}>
          <h3>Enter the app by signing in</h3>
          <Image
            width={150}
            height={150}
            alt=""
            className={styles.loginImage}
            src="/../public/conductor.jpg"
          />
          <Link href="/api/auth/login">
            <button className={styles.button}>Login</button>
          </Link>
          <Link href="/api/auth/logout">
            <button className={styles.buttonLogout}>Logout</button>
          </Link>
        </section>
      </div>
    </>
  );
}
