import React from "react";
import { TimeRange } from "../lib/utils";

import styles from "./dial.module.scss"

export default function Dial({ children }: { children: React.ReactNode }) {
    let [progress, setProgress] = React.useState(0)
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            const rightNow = new Date()
            const newYearDay = new Date(rightNow.getFullYear() + 1, 0, 1)
            
            const range = new TimeRange(rightNow.getTime(), newYearDay.getTime())
            
            setProgress(range.fractionOfYearOver() * 360)
        }, 1000)
        
        return () => { clearInterval(timer) }
    }, [])
    
    return (
        <div className={styles.border} style={{
            background: `conic-gradient(rgb(0, 0, 128) ${progress}deg, black 0deg)`
        }}>
            <div className={styles.dial}>
                {children}
            </div>
        </div>
    )
}