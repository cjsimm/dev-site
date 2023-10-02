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
                        <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
                        <li><Link href="/" onClick={() => setOpen(false)}>Portfolio</Link></li>
                        <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>
            } 
         </>
    )
}
