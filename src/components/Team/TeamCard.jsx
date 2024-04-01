import React from "react";
import styles from "./Team.module.css";


function TeamCard(props, index) {
    return(
        <div className={styles.TeamCard} key={index}>
            <img src={props.src} alt="PersonImage" className={styles.Card_img}/>
            <h1 className={styles.name}>{props.name}</h1>
            <h2 className={styles.position}>{props.position}</h2>
        </div>
    );
}

export default TeamCard;