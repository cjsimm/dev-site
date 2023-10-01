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
            <button className="hamburger-button" onClick={() => setOpen(!isOpen)}>
                <div className="hamburger-logo">
                    placeholder
                </div>
            </button>
            {isOpen &&  
                <nav className="mobile-nav">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/">Portfolio</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            } 
         </>
    )
}
