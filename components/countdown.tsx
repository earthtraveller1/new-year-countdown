import React from "react";

import styles from "./countdown.module.scss"

export default function Countdown() {
    return (
        <div className={styles.countdown}>
            <h1 className={styles.time}>0 W, 0 D, 00:00:00</h1>
            <p className={styles.yearSubtitle}>...until 2023!</p>
        </div>
    )
}