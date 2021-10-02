import React from "react";
import styles from "./NoticeBoard.module.css";
import NoticeBoardData from "./NoticeBoardData.jsx";
import NoticeBoardCard from "./NoticeBoardCard";

function NoticeBoard() {
    return (
        <div className={styles.noticeBoard}>
            <div className={styles.heading1}>Notice Board</div>
            {/* <hr className={styles.hr}/> */}
            <div className={styles.noticeBoard_body}>
                {NoticeBoardData.map(NoticeBoardCard)}
            </div>
        </div>
    );
}

export default NoticeBoard;