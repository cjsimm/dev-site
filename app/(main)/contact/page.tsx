import styles from './page.module.css';
import type { Metadata } from 'next';
import ContactForm from '../_components/ContactForm';

const page = 'Contact';
export const metadata: Metadata = {
  title: `cSimm - ${page}`,
  description: '...',
}

export default function contact() {
    return (
      <main>
        <section className={`sectionFillPage flexCentered bgRed`}> 
            <h1>Contact</h1>
            <div className="sectionContent">
              <p> 
                  For any business enquiries, questions, or comments, 
                  please get in touch using the contact form below:
              </p>
              <ContactForm />
            </div>
        </section>
      </main>
    )
}