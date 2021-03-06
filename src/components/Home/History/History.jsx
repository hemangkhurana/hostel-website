import React from "react";
import styles from "./History.module.css";

function History() {
    return (
        <div className={styles.history} id="history">
            <div>
                <h1 className={styles.heading}>Our History</h1>
                {/* <hr className={styles.horizontal_line} /> */}
                <p className={styles.history_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img 
                src="https://media.istockphoto.com/photos/quill-and-inkwell-on-top-of-declaration-of-independence-picture-id173150593?s=612x612" 
                alt="Image" 
                className={styles.history_img}
            />
        </div>
    );
}

export default History;