import React from "react";
import styles from "./Calendar.module.css";

function CalendarCard(props) {
    return (
        <div className={styles.item}>
            <h1 className={styles.item_h1}>{props.event}</h1>
            <p className={styles.item_date}>{props.date}</p>
            <p className={styles.item_time}>{props.time}</p>
            <p className={styles.item_p}>{props.description}</p>
            <p className={styles.item_link}><a className={styles.link} href={props.link1} target="_blank" rel="noreferrer">Link</a></p>
        </div>
    );
}

export default CalendarCard;