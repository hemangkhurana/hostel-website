import React from "react";
import styles from "./About.module.css";

function About() {
    return (
        <div className={styles.about} id="about">
            <img 
                src="https://media.istockphoto.com/photos/presentation-service-delivery-and-positive-feedback-concept-black-picture-id1261597991?s=612x612" 
                alt="Image" 
                className={styles.about_img}
            />
            <div>
                <h1 className={styles.heading}>About Us</h1>
                <hr className={styles.horizontal_line} />
                <p className={styles.about_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );      
}

export default About;