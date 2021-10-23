import React from "react";
import styles from "./Calendar.module.css";
// import CalendarData from "./CalendarData.jsx";
import CalendarCard from "./CalendarCard.jsx";
import { useState , useEffect } from "react" ; 
// import getEventData from "../../../googleSheet";


function Calendar() {
    
    const [ EventData , setEventData] = useState([]) ; 
   
    useEffect( () => {

          fetch("https://docs.google.com/spreadsheets/d/1bPT3nEepCLT5Oixj0clNaCD9Qg5Gv0QSb4BlzUsVleU/export?format=tsv")
           .then(response => response.text() )
           .then( text => {
             const Events = []  ;   
             const rows =  text.split('\r')  ;
             rows.forEach( row => {
                const col =  row.split('\t')  ; 
                const temp = {
                    event : col[0] , 
                    date : col[1]  , 
                    time : col[2]  ,
                    description : col[3] ,
                    link1 : col[4] ,
                } ; 
                Events.push(temp) ; 
             })
            
             setEventData(Events) ; 
             console.log(Events)  ; 
          })
    
    
    } , []) ;

    return (
        <div className={styles.calendar}>
            <h1 className={styles.heading1}>Event Calendar</h1>
            <div className={styles.calendar_container} id="calendar">
                {EventData.map(CalendarCard)}
            </div>
        </div>
    );
}

export default Calendar ; 