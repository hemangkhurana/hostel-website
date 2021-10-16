import React from "react";
import styles from "./Team.module.css";
import TeamCard from "./TeamCard.jsx";
import SecteraryData from "./Data/SecretaryData.jsx";
import RepresentativeData from "./Data/RepresentativeData";
import CaptianAndViceCaptianData from "./Data/CaptianAndViceCaptianData";

function Team() {
    return(
        <div>
            <h1 className={styles.heading1}>Our Team</h1>
            <hr className={styles.hr1}/>
            <h2 className={styles.heading2}>Secretary</h2>
            <div className={styles.Team_container}>
                {SecteraryData.map(TeamCard)}
            </div>
            <hr className={styles.hr2}/>
            <h2 className={styles.heading2}>Representatives</h2>
            <div className={styles.Team_container}>
                {RepresentativeData.map(TeamCard)}
            </div>
            <hr className={styles.hr2}/>
            <h2 className={styles.heading2}>Captian and Vice-Captian</h2>
            <div className={styles.Team_container}>
                {CaptianAndViceCaptianData.map(TeamCard)}
            </div>
        </div>
    );
}

export default Team;