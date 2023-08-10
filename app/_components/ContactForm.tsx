"use client";
import styles from '../contact/page.module.css';

import { ReactComponentElement, useState } from "react";

export default function ContactForm() {
    return (
        <form className={styles.contactForm} id="contact">
            <div className={styles.cfContainer}>
            <label htmlFor="name">Email Address*:</label>
            <input className={styles.cfName} name="name" type="text" form='contact' required/>
            </div>
            <div className={styles.cfContainer}>
            <label htmlFor="subject">Subject*:</label>
            <input className={styles.cfSubject} name="subject" type="text" form='contact' required/>
            </div>
            <div className={styles.cfContainer}>
            <label htmlFor="message">Message*:</label>
            <textarea className={styles.cfMessage} name="message" form='contact' required/>
            </div>
            <div className={styles.cfContainer}>
            <label htmlFor='submit'></label>
            <input className={styles.cfSubmit} name="submit" type="submit" form='contact'/>
            </div>
        </form>
    );
}