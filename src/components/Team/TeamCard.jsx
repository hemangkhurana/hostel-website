import React from "react";
import styles from "./Team.module.css";


function TeamCard(props) {
    return(
        <div className={styles.TeamCard}>
            <img src={props.src} alt="PersonImage" className={styles.Card_img}/>
            <h1 className={styles.name}>{props.name}</h1>
            <h2 className={styles.position}>{props.position}</h2>
            <div className={styles.contact_details}>
                <a className={styles.phone} href="tel: {props.phone}"><i class="fas fa-phone-square-alt"></i></a>
                <a className={styles.mail} href="mailto: {props.mail}"><i class="fas fa-envelope-square"></i></a>
            </div>
        </div>
    );
}

export default TeamCard;