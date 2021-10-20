import React from "react";
import styles from "./About.module.css";

function About() {

    return (
        <div className={styles.about} id="about">
            <img 
                src="https://media.istockphoto.com/photos/presentation-service-delivery-and-positive-feedback-concept-black-picture-id1261597991?s=612x612" 
                alt="Img" 
                className={styles.about_img}
            />
            <div>
                <h1 className={styles.heading}>About Us</h1>
                {/* <hr className={styles.horizontal_line} /> */}
                <p className={styles.about_description}>
                    <p>Nilgiri is part of our identity. We Nilbulls are one of the oldest hostels in IIT Delhi, with a rich and storied(probably the best) alumini history. Nilgiri has a legacy of academic, cultural and sporting excellence. It is the place where great minds are moulded, and champions are made.
                    We Nil boys give our best in everything, and this has led to many intense rivalries, combined with the fact that the BRCA, BSW and BHM trophies are hotly contested. Nilgiri is renowned for its hostel spirit, which is thought to be as high as the Nilgiri mountain.
                    Despite being one of the oldest, Nilgiri is the newly renovated and one of the most well-maintained hostels on the campus.
                    The Young Bulls are forever participating in everything and earning laurels for Nilgiri while at the same time gaining respect and endearment from the seniors who help us with anything we want.</p>
                </p>
            </div>
        </div>
    );      
}

export default About;