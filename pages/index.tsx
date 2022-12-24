import Head from "next/head"

import styles from "../styles/Home.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>New Year Countdown</title>
      </Head>
      
      <main className={styles.stuffInMiddle}>
        <h1 className={styles.time}>0 W, 0 D, 00:00:00</h1>
        <p>Until 2023!!!</p>
      </main>
    </>
  )
}