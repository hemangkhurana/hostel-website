import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.footer_container}>
            <div className={styles.follow}>
                <span>Follow Us:</span>
                <a
                    href="https://www.instagram.com/nilgiri.house/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-facebook"></i>
                </a>
                <a
                    href="https://www.instagram.com/nilgiri.house/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <b>|</b>
            <div className={styles.copyright}>
                <span>
                    All rights reserved © <b>Nilgiri Hostel</b>
                </span>
            </div>
            <b>|</b>
            <div className={styles.contactUs}>
                <a
                    className={styles.link}
                    href="https://forms.gle/LM3To67JzhVTRnKZ8"
                    target="_blank"
                    rel="noreferrer"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
}

export default Footer;