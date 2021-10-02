import React from "react";
import styles from "./NoticeBoard.module.css";

function NoticeBoardCard(props) {
    return (
        <div className={styles.noticeBoardCard}>
            <a href={props.url} className={styles.link} target="_blank" rel="noreferrer"><div className={styles.item_index}>{props.index}.</div>{props.displayName}</a>
        </div>
    );
}

export default NoticeBoardCard;