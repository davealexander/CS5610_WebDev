import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/navbar'
import { Container } from '@mui/system'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <div>
          <h2>Welcome to the Festival Conductor</h2>
        </div>
        <div>
          This is an application where you and your team of people can manage Music festivals. 
          We cover student registration, scheduling, scoresheets, and centralizing your festivals information. 
          Login or sign up below
        </div>
      </Container>
      <section className={styles.loginCard}>
          <p>Enter the app by signing in</p>
          <Image width={150} height={150} alt="" className={styles.loginImage} src="/../public/conductor.jpg"/>
          <button className={styles.button}>Login</button>
          <button className={styles.button}>Sign up!</button>
      </section>       
      
    </>
    
  )
}

