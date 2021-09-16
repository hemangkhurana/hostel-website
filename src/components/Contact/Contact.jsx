import React from "react";
import styles from "./Contact.module.css";
import ContactCard from "./ContactCard.jsx";
import ContactData from "./ContactData.jsx";

function Contact() {
    return(
        <div>
            <h1 className={styles.heading}>Our Team</h1>
            <hr className={styles.hr}/>
            <div className={styles.Contact_container}>
                {ContactData.map(ContactCard)}
            </div>
        </div>
    );
}

export default Contact;