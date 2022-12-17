import GeneralNav from "../components/generalNavBar/GeneralNavBar";
import styles from "../styles/privacy.module.css";

//Quick Q+A section accessible by all to know what the application is about
export default function About() {
  return (
    <>
      <GeneralNav></GeneralNav>
      <div className="container">
        <div className={styles.customContainer}>
          <div>
            <h2>What is Festival Conductor?</h2>
            <p>
              Festival Conductor is a web application that is made for music
              educators to help manage their private/state festival
            </p>
            <h2>What is inside the application?</h2>
            <p>
              Festival Conductor has a way to help manage, scheduled events,
              contacts, student registrations, announcements, and more
            </p>
            <h2>What about scoresheets?</h2>
            <p>
              Festival Conductor is made for festivals and managing the audition
              process for festivals as well. We have a section where judges can
              select a registered and submit a score for them.
            </p>
            <h2>Looks limited at the moment, Is there more?</h2>
            <p>
              Yes! Absolutely. Some of the core elements have been worked on
              like login, protected database,
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
