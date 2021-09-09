import React from "react";
import styles from "./About.module.css";

function About() {
    return (
        <div className={styles.about} id="about">
            <h1 className={styles.heading}>About Us</h1>
            <hr className={styles.horizontal_line} />
            <p className={styles.about_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

export default About;