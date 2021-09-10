import React from "react";
import styles from "./Calendar.module.css";
import CalendarData from "./CalendarData.jsx";
import CalendarCard from "./CalendarCard.jsx";



function Calendar() {
    return (
        <div className={styles.wrapper}>
            {CalendarData.map(CalendarCard)}
        </div>
    );
}

export default Calendar;