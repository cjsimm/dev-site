"use client";
import '../globals.css';
import Link from '@/node_modules/next/link'; 
import { useState } from 'react';

export default function Hamburger() {
    const [isOpen, setOpen] = useState(false);
//onmount mobile nav we need to grow it, and on unmount we need to shrink it back to
    //nothing
    return(
        <>
            <span className="hamburger-button" onClick={() => setOpen(!isOpen)}>
                <div className={`hamburger-logo ${isOpen && 'hamburger-expanded'}`}>
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </div>
            </span>
            {isOpen &&  
                <nav className="mobile-nav">
                    <ul>
                        <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
                        <li><Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link></li>
                        <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
                        <li>
                        <div className="mobile-nav-soc-container">
                        <Link className='social-link' target="_blank" href='https://github.com/cjsimm'>
                            <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                            </svg>
                        </Link>
                        <Link className='social-link' target="_blank" href='https://www.linkedin.com/in/christopher-john-simmons/'>
                            <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                            </svg>
                        </Link>
                    </div>
                    </li>
                    </ul>
                </nav>
            } 
         </>
    )
}
