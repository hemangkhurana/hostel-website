import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return(
        <div className={styles.footer_container}>
            <div className={styles.follow}>
                <span>Follow Us:</span>
                <a href="https://www.instagram.com/nilgiri.cultu/" target="_blank" rel="noreferrer">
                    <i class="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/nilgiri.cultu/" target="_blank" rel="noreferrer">
                    <i class="fab fa-instagram-square"></i>
                </a>
            </div>
            <b>|</b>
            <div className={styles.copyright}>
                <span>All rights reserved © <b>Nilgiri Hostel</b></span>
            </div>
            <b>|</b>
            <div className={styles.contactUs}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdkWiP07wpf6tFObzV6gFO_n0vQAWMp4Cjz9Y-4b0zbhPH7Xw/viewform" target="_blank" rel="noreferrer">
                    Contact Us
                </a>
            </div>
        </div>
    );
}

export default Footer;