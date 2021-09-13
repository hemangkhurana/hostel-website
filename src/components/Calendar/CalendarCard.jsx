import React from "react";
import styles from "./Calendar.module.css";

function CalendarCard(props) {
    return (
        <div className={styles.item}>
            <h1 className={styles.item_h1}>{props.event}</h1>
            <p className={styles.item_date}>{props.date}</p>
            <p className={styles.item_time}>{props.time}</p>
            <p className={styles.item_p}>{props.description}</p>
        </div>
    );
}

export default CalendarCard;