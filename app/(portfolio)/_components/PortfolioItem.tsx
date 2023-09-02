import { useState } from "react";
import styles from './components.module.css';
import Image from "next/image";
import { portfolioItemData } from "./PortfolioMenu";

//function that holds the portfolio item description details and preview
//can transition between a minimized and expanded view 
export default function PortfolioItem({data}: {data: portfolioItemData}): JSX.Element {
    return (
        <div className={styles.portfolioItemContainer}>
            {data.isExpanded ? (
                <div className={styles.portfolioItemExpanded}>
                    <p>{"This portfolio item is expanded!"}</p>
                </div>
            ) : (
                <button className={styles.portfolioItemSmall}>
                    <Image
                        src="/logo.svg"
                        alt="placeholder image"
                        width={200}
                        height={200}
                    />
                    <div className={styles.itemSmallText}>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                    </div>
                </button>
            )}
        </div>
    );
}