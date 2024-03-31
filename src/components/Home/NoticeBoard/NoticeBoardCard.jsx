import React from "react";
import styles from "./NoticeBoard.module.css";

function NoticeBoardCard(item, index) {
    return (
        <div className={styles.noticeBoardCard} key={index}>
            <a href={item.url} className={styles.link} target="_blank" rel="noreferrer"><div className={styles.item_index}>{item.index}.</div>{item.displayName}</a>
        </div>
    );
}

export default NoticeBoardCard;