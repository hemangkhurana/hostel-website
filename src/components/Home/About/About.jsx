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
                {/* <hr className={styles.horizontal_line} /> */}
                <p className={styles.about_description}>
                    <p>Our hostel, Nilgiri is one of the oldest and most prestigious hostels in IITD. Over the years, Nilgiri has proven to be one of the stalwart hostels in every field, be it sports or cultural activities, with countless veterans pounding their way to victories and achieving excellence in their fields. </p>
                    <p>Nilgiri has been an everpresent on the sporting scene. This year our sporting champions brought us glory in a number of disciplines. Nilgiri won the gold in Volleyball and Aquatics, and had reached the Finals and Semis in Football and Lawn Tennis. Nilgiri is also a strong force in the Indoor Sports category, having secured first place last year. </p>
                    <p>Besides this, Nilgiri also has three Inter-IIT Team Captains, Parth in Aquatics, Vaidh in hockey, Rohit in Football.</p>
                </p>
            </div>
        </div>
    );      
}

export default About;