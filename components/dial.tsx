import React from "react";

import styles from "./dial.module.scss"

export default function Dial({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.dial}>
            {children}
        </div>
    )
}