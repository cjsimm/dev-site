import styles from './page.module.css';
import type { Metadata } from 'next';

const page = 'Contact';
export const metadata: Metadata = {
  title: `Dev Site - ${page}`,
  description: '...',
}

export default function contact() {
    return (
      <main>
        <section className={`sectionFillPage flexCentered bgRed`}>
            <h1>Contact</h1>
            <p> 
                For any business enquiries, questions, or comments, 
                please get in touch using the contact form below:
            </p>
            <form className={styles.contactForm} id="contact">
                <div className={styles.cfContainer}>
                  <label htmlFor="name">Name:</label>
                  <input className={styles.cfName} name="name" type="text" form='contact' required/>
                </div>
                <div className={styles.cfContainer}>
                  <label htmlFor="message">Message:</label>
                  <input className={styles.cfMessage} name="message" type="text" form='contact' required/>
                </div>
                <div className={styles.cfContainer}>
                  <label htmlFor='submit'></label>
                  <input className={styles.cfSubmit} name="submit" type="submit" form='contact'/>
                </div>
            </form>
        </section>
      </main>
    )
}