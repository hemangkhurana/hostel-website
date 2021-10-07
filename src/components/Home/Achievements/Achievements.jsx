import React from "react";
import styles from "./Achievements.module.css";

function Achievements() {
    return (
        <div className={styles.achievements} id="achievements">
        <img 
            src="https://media.istockphoto.com/photos/teamwork-friendship-hiking-help-each-other-trust-assistance-in-of-picture-id1255203350?s=612x612" 
            alt="Image" 
            className={styles.achievements_img}
        />
            <div>
                <h1 className={styles.heading}>Our Achievements</h1>
                {/* <hr className={styles.horizontal_line} /> */}
                <p className={styles.achievements_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
}

export default Achievements;