import React from "react";

import styles from "./countdown.module.scss"

export default function Countdown() {
    let [nextYear, setNextYear] = React.useState(new Date().getFullYear() + 1)
    
    let [weeks, setWeeks] = React.useState(1)
    let [days, setDays] = React.useState(0)
    let [hours, setHours] = React.useState(0)
    let [minutes, setMinutes] = React.useState(0)
    let [seconds, setSeconds] = React.useState(0)
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            const rightNow = new Date()
            const thisYear = rightNow.getFullYear()
            
            // Update the year!
            if (thisYear + 1 != nextYear) {
                setNextYear(thisYear + 1)
            }
            
            const newYearDay = new Date(nextYear, 0, 1)
            const range = newYearDay.getTime() - rightNow.getTime()
            
            let innerSeconds = Math.floor(range / 1000)
            let innerMinutes = Math.floor(innerSeconds / 60)
            innerSeconds %= 60
            let innerHours = Math.floor(innerMinutes / 60)
            innerMinutes %= 60
            let innerDays = Math.floor(innerHours / 24)
            innerHours %= 24
            let innerWeeks = Math.floor(innerDays / 7)
            innerDays %= 7
            
            setWeeks(innerWeeks)
            setDays(innerDays)
            setHours(innerHours)
            setMinutes(innerMinutes)
            setSeconds(innerSeconds)
            
        }, 1000)
        
        return () => {
            clearInterval(timer)
        }
    }, [])
    
    return (
        <div className={styles.countdown}>
            <h1 className={styles.time}>{weeks} W, {days} D, {hours}:{minutes}:{seconds}</h1>
            <p className={styles.yearSubtitle}>...until {nextYear}!</p>
        </div>
    )
}