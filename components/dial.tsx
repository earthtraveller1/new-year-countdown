import React from "react";

import styles from "./dial.module.scss"

export default function Dial({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.border} style={{
            background: "conic-gradient(rgb(0, 0, 128) 0deg, black 64deg)"
        }}>
            <div className={styles.dial}>
                {children}
            </div>
        </div>
    )
}