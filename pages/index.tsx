import Head from "next/head"

import Dial from "../components/dial"
import Countdown from "../components/countdown"

import styles from "../styles/Home.module.scss"

export default function Home() {
    return (
        <>
            <Head>
                <title>New Year Countdown</title>
            </Head>

            <main className={styles.main}>
                <Dial>
                    <Countdown/>
                </Dial>
            </main>
        </>
    )
}