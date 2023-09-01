"use client";
import styles from '../contact/page.module.css';
import { useState } from "react";

export default function ContactForm() {
    const [sending, setSending] = useState(false);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSending(true);
        //grab submitted fields from event target (typescript complains due to using array access but cant find a better way due to nextjs renaming the classes)
        const payload = {
            email: String(e.target[0].value),
            subject: String(e.target[1].value),
            message: String(e.target[2].value),
        }
        const response = await fetch("/api/contact",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload), 
        });
        if (response.ok) {
            console.log("Message successfully sent via contact form");
            setSending(false);
            //clear form values to symbolize that the message was sent
            e.target[0].value = '';
            e.target[1].value = '';
            e.target[2].value = '';
        } else {
            console.log("Message failed to be sent via contact form.")
            setSending(false);
            //create some action in the ui to show that the form was not sent by email
        }
    }
    return (
        <form className={styles.contactForm} onSubmit={handleSubmit} id="contact">
            <div className={styles.contactInfo}>
                <div className={styles.cfContainer}>
                    <label htmlFor="name">Email*:</label>
                    <input className={styles.cfName} name="name" type="text" form='contact' required/>
                </div>
                <div className={styles.cfContainer}>
                    <label htmlFor="subject">Subject*:</label>
                    <input className={styles.cfSubject} id="subject" type="text" form='contact' required/>
                </div>
            </div> 
            <div className={styles.cfMessageContainer}>
                <label htmlFor="message">Message*:</label>
                <textarea className={styles.cfMessage} id="message" form='contact' required/>
            </div>
            <div className={styles.cfSubmitContainer}>
                <input className={styles.cfSubmit} id="submit" type="submit" form='contact' value="Submit" disabled={sending} />
            </div>
        </form>
    );
}