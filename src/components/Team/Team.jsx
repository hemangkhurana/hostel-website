import React, { useState } from "react";
import styles from "./Team.module.css";
import TeamCard from "./TeamCard.jsx";
import SecteraryData from "./Data/SecretaryData.jsx";
import RepresentativeData from "./Data/RepresentativeData";
import CaptianAndViceCaptianData from "./Data/CaptianAndViceCaptianData";


const Team = () => {
    const [dropSec, setDropSec] = useState(false)
    const [dropReps, setDropReps] = useState(false)
    const [dropCVC, setDropCVC] = useState(false)
    
    const dropToggler = (key) => {
        const arraySetStates = [setDropSec, setDropReps, setDropCVC]
        const arrayStates = [dropSec, dropReps, dropCVC]
        const setState = arraySetStates[key]
        const state = arrayStates[key]

        setState(!state)
        arraySetStates[(key+1)%3](false)
        arraySetStates[(key+2)%3](false)
        
    }
    return(
        <div className={styles.team}>
            <h1 className={styles.heading1}>OUR TEAM</h1>
            <hr className={styles.hr1}/>

            <h2 className={styles.heading2} onClick={() => {dropToggler(0)}}>Secretary</h2>
            <hr className={styles.hr2}/>
            {dropSec?
                <>
                <div className={styles.Team_container}>
                    {SecteraryData.map(TeamCard)}
                </div>
                <hr className={styles.hr2}/>
                </>
                :<></>
            }

            <h2 className={styles.heading2} onClick={() => {dropToggler(1)}}>Representatives</h2>
            <hr className={styles.hr2}/>
            {dropReps?
                <>
                <div className={styles.Team_container}>
                    {RepresentativeData.map(TeamCard)}
                </div>
                <hr className={styles.hr2}/>
                </>
                :<></>
            }
            
            <h2 className={styles.heading2} onClick={() => {dropToggler(2)}}>Captian and Vice-Captian</h2>
            <hr className={styles.hr2}/>
            {dropCVC?
                <>
                <div className={styles.Team_container}>
                    {CaptianAndViceCaptianData.map(TeamCard)}
                </div>
                <hr className={styles.hr2}/>
                </>
                :<></>
            }
        </div>
    );
}

export default Team;