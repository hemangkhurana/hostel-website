import React from "react";
import styles from "./Notice.module.css";
import NoticeData from "./NoticeData";

function Notice() {
    function NoticeCard(props) {
        return (
            <div className={styles.notice_card}>
                <img className={styles.notice} src={props.url} alt="pdf document" />
            </div>
        );
    }
    return (
        <div className={styles.notice_board}>
            <h1 className={styles.heading1}>Notice Board</h1>
            <hr className={styles.hr1}/>
            <div className={styles.notice_board_container}>
                {NoticeData.map(NoticeCard)}
            </div>
        </div>
    );
}

export default Notice;