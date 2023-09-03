import { useState } from "react";
import styles from './components.module.css';
import Image from "next/image";
import { portfolioItemData } from "./PortfolioMenu";

//function that holds the portfolio item description details and preview
//can transition between a minimized and expanded view 
export default function PortfolioItem(
    {data, itemID, onExpand}: {
    data: portfolioItemData, 
    itemID: number,
    onExpand: (itemID: number) => void,
}): JSX.Element {

    const handleClick = () => {
        onExpand(itemID);
    }

    return (
        <div className={styles.portfolioItemContainer}>
            {data.isExpanded ? (
                <button className={styles.portfolioItemExpanded} onClick={handleClick}>
                    <p>{"This portfolio item is expanded!"}</p>
                </button>
            ) : (
                <button className={styles.portfolioItemSmall} onClick={handleClick}>
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