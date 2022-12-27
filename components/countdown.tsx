import React from "react";
import { TimeRange, padNumber } from "../lib/utils";

import styles from "./countdown.module.scss"

export default function Countdown() {
    let [nextYear, setNextYear] = React.useState(new Date().getFullYear() + 1)
    
    let [weeks, setWeeks] = React.useState('1')
    let [days, setDays] = React.useState('0')
    let [hours, setHours] = React.useState('0')
    let [minutes, setMinutes] = React.useState('0')
    let [seconds, setSeconds] = React.useState('0')
    
    let [opacity, setOpacity] = React.useState(0)
    
    React.useEffect(() => {
        const maxOpacity = 100
        let innerOpacity = 0
        
        function fadeIn() {
            if (innerOpacity < maxOpacity) {
                innerOpacity += 0.25
                if (innerOpacity > maxOpacity) {
                    innerOpacity = maxOpacity
                }
                setOpacity(innerOpacity)
                
                setTimeout(fadeIn, 1)
            }
        }
        
        fadeIn()
    }, [])
    
    React.useEffect(() => {
        const func = () => {
            const rightNow = new Date()
            const thisYear = rightNow.getFullYear()
            
            // Update the year!
            if (thisYear + 1 != nextYear) {
                setNextYear(thisYear + 1)
            }
            
            const newYearDay = new Date(nextYear, 0, 1)
            const range = new TimeRange(rightNow.getTime(), newYearDay.getTime())
            
            setWeeks(range.weeks.toString())
            setDays(range.days.toString())
            setHours(padNumber(range.hours, 2))
            setMinutes(padNumber(range.minutes, 2))
            setSeconds(padNumber(range.seconds, 2))
        }
        
        func()
        
        const timer = setInterval(() => {
            func()
        }, 1000)
        
        return () => {
            clearInterval(timer)
        }
    }, [])
    
    return (
        <div className={styles.countdown} style={{opacity: `${opacity}%`}}>
            <h1 className={styles.time}>{weeks} W, {days} D, {hours}:{minutes}:{seconds}</h1>
            <p className={styles.yearSubtitle}>...until {nextYear}!</p>
        </div>
    )
}