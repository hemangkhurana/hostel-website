import React from 'react';
import styles from './Calendar.module.css';
// import CalendarData from "./CalendarData.jsx";
import CalendarCard from './CalendarCard.jsx';
import { useState, useEffect } from 'react';
// import getEventData from "../../../googleSheet";

function Calendar() {
    const [EventData, setEventData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const resp = await fetch(
                'https://docs.google.com/spreadsheets/d/1GJ1SUAIRbK9ep96SxbID8AmHUxiT_asiELv9WZQkGBE/export?format=tsv'
            );
            const text = await resp.text();
            // console.log(text)

            const Events = [];
            const rows = text.split('\r');

            rows.forEach((row, index) => {
                if (index === 0 || index === 1) {
                    return;
                }
                const col = row.split('\t');
                const temp = {
                    event: col[0].slice(1),
                    club: col[1],
                    date: col[2],
                    month: col[3],
                    year: col[4],
                    startTime: col[5],
                    endTime: col[6],
                    description: col[7],
                    link1: col[8],
                };
                Events.push(temp);
            });

            setEventData(Events);
            console.log(Events);
        };
        fetchData();
    }, []);

    return (
        <div className={styles.calendar}>
            <img
                className={styles.heading_icon}
                src={require('./HeadingIcon.png')}
                alt="Img"
            />
            <h1 className={styles.heading1}>Event Calendar</h1>
            <div className={styles.calendar_container} id="calendar">
                {EventData.map(CalendarCard)}
            </div>
        </div>
    );
}

export default Calendar;
