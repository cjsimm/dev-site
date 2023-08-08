import styles from './page.module.css';

export default function contact() {
    return (
      <main className={styles.flexboxContainer}>
        <section>
            <h1 className={styles.centeredH1}>Contact</h1>
            <p> 
                For any business enquiries, questions, or comments, 
                please get in touch using the contact form below:
            </p>
            <form className={styles.contactForm} id="contact">
                <label htmlFor="name">Name:</label>
                <input className={styles.cfName} name="name" type="text" form='contact' required/>
                <label htmlFor="message">Message:</label>
                <input className={styles.cfMessage} name="message" type="text" form='contact' required/>
                <label htmlFor='submit'></label>
                <input className={styles.cfSubmit} name="submit" type="submit" form='contact'/>
            </form>
        </section>
      </main>
    )
}