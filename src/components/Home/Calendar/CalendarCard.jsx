import React from 'react';
import styles from './Calendar.module.css';

function CalendarCard(item, index) {
    return (
        <div className={styles.item} key={index}>
            <p className={styles.item_h1}>
                <a
                    className={styles.link}
                    href={item.link1}
                    target="_blank"
                    rel="noreferrer"
                >
                    {item.event}
                </a>
            </p>
            <p className={styles.item_club}>{item.club}</p>
            <div className={styles.item_description_div}>
                <p className={styles.item_description}>{item.description}</p>
            </div>
            <div className={styles.item_timings}>
                <p className={styles.item_date}>{item.date}</p>
                <div className={styles.item_month_and_year}>
                    <p className={styles.item_month}>{item.month}</p>
                    <p className={styles.item_year}>{item.year}</p>
                </div>
                <div className={styles.item_vl}></div>
                <div className={styles.item_time_div}>
                    <div>
                        <p>Start: </p>
                        <p>End: </p>
                    </div>
                    <div className={styles.item_time}>
                        <p className={styles.item_startTime}>
                            {item.startTime}
                        </p>
                        <p className={styles.item_endTime}>{item.endTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalendarCard;
