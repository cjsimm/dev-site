"use client"; //tells nextjs to make client component (holds state)
import { useState } from "react";
import styles from './components.module.css';
import Image from "next/image";

//function that holds the portfolio item description details and preview
//can transition between a minimized and expanded view 
// state held: isExpanded (opens and closes the expanded view)
export default function PortfolioItem(): JSX.Element {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className={styles.portfolioItemContainer}>
            {expanded ? (
                <div className={styles.portfolioItemExpanded}>
                    <p>{"This portfolio item is expanded!"}</p>
                </div>
            ) : (
                <div className={styles.portfolioItemSmall}>
                    <Image
                        src="/logo.svg"
                        alt="placeholder image"
                        width={32}
                        height={32}
                    />
                    <p>{"Hello World!"}</p>
                </div>
            )}
        </div>
    );
}