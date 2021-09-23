import React from "react";
import styles from "./Team.module.css";


function TeamCard(props) {
    return(
        <div className={styles.TeamCard}>
            <div className={styles.TeamCard_top}>
                <h1 className={styles.name}>{props.name}</h1>
                <h2 className={styles.position}>{props.position}</h2>
            </div>
            <div className={styles.TeamCard_mid}>
                <p className={styles.description}>{props.description}</p>
            </div>
            <div className={styles.TeamCard_bottom}>
                <a className={styles.phone} href="tel: {props.phone}">{props.phone}</a>
                <a className={styles.mail} href="mailto: {props.mail}">{props.mail}</a>
            </div>
            <img src={props.src} alt="Image" className={styles.Card_img}/>
        </div>
    );
}

export default TeamCard;