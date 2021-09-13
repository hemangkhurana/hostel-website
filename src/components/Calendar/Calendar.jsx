import React from "react";
import styles from "./Calendar.module.css";
import CalendarData from "./CalendarData.jsx";
import CalendarCard from "./CalendarCard.jsx";


function Calendar() {
    return (
        <div className={styles.calendar} id="calendar">
            {CalendarData.map(CalendarCard)}
        </div>
    );
}

export default Calendar;