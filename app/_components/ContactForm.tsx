"use client";
import styles from '../contact/page.module.css';

import { useState } from "react";

export default function ContactForm() {
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        //grab submitted fields from event target (typescript complains due to using array access but cant find a better way due to nextjs renaming the classes)
        const payload = {
            email: String(e.target[0].value),
            subject: String(e.target[1].value),
            message: String(e.target[2].value),
        }
        console.log(payload);
        const response = await fetch("/api/contact",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(payload), 
        });
        if (response.ok) {
            console.log("Contact form message sent successfully");
        } else {
            console.log("error sending message");
        }
    }
    return (
        <form className={styles.contactForm} onSubmit={handleSubmit} id="contact">
            <div className={styles.cfContainer}>
            <label htmlFor="name">Email Address*:</label>
            <input className={styles.cfName} name="name" type="text" form='contact' required/>
            </div>
            <div className={styles.cfContainer}>
            <label htmlFor="subject">Subject*:</label>
            <input className={styles.cfSubject} id="subject" type="text" form='contact' required/>
            </div>
            <div className={styles.cfContainer}>
            <label htmlFor="message">Message*:</label>
            <textarea className={styles.cfMessage} id="message" form='contact' required/>
            </div>
            <div className={styles.cfContainer}>
            <label htmlFor='submit'></label>
            <input className={styles.cfSubmit} id="submit" type="submit" form='contact'/>
            </div>
        </form>
    );
}