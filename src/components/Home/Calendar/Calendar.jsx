import React from "react";
import styles from "./Calendar.module.css";
import CalendarData from "./CalendarData.jsx";
import CalendarCard from "./CalendarCard.jsx";


function Calendar() {
    return (
        <div className={styles.calendar}>
            <h1 className={styles.heading1}>Event Calendar</h1>
            <div className={styles.calendar_container} id="calendar">
                {CalendarData.map(CalendarCard)}
            </div>
        </div>
    );
}

export default Calendar;