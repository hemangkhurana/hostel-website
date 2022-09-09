import React from "react";
import styles from "./Calendar.module.css";

function CalendarCard(props) {
    return (
        <div className={styles.item}>
            <p className={styles.item_h1}><a className={styles.link} href={props.link1} target="_blank" rel="noreferrer">{props.event}</a></p>
            <p className={styles.item_club}>{props.club}</p>
            <div className={styles.item_description_div}>
                <p className={styles.item_description}>{props.description}</p>
            </div>
            <div className={styles.item_timings}>
                <p className={styles.item_date}>{props.date}</p>
                <div className={styles.item_month_and_year}>
                    <p className={styles.item_month}>{props.month}</p>
                    <p className={styles.item_year}>{props.year}</p>
                </div>
                <div className={styles.item_vl}></div>
                <div className={styles.item_time_div}>
                    <div>
                        <p>Start: </p>
                        <p>End: </p>
                    </div>
                    <div className={styles.item_time}>
                        <p className={styles.item_startTime}>{props.startTime}</p>
                        <p className={styles.item_endTime}>{props.endTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarCard;