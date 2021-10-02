import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return(
        <div className={styles.footer_container}>
            <div className={styles.follow}>
                <span>Follow Us:</span>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
            </div>
            <b>|</b>
            <div className={styles.copyright}>
                <span>All rights reserved © <b>Nilgiri Hostel</b></span>
            </div>
            <b>|</b>
            <div className={styles.contactUs}>
                Contact Us
            </div>
        </div>
    );
}

export default Footer;