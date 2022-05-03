import React from "react";
import styles from "./About.module.css";

function About() {

    return (
        <div className={styles.about} id="about">
            <img 
                src = {require("./AboutImage.png").default}
                alt="Img" 
                className={styles.about_img}
            />
            <div className={styles.about_body}>
                <h1 className={styles.heading}>About Us</h1>
                {/* <hr className={styles.horizontal_line} /> */}
                <p className={styles.about_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div>
        </div>
    );      
}

export default About;