import React from "react";
import styles from "./Calendar.module.css";

function CalendarCard(props) {
    return (
        <div className={styles.item}>
            <h1>{props.event}</h1>
            <hr />
            <p>{props.description}</p>
        </div>
    );
}

export default CalendarCard;