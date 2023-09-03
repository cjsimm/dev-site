import { useState } from "react";
import styles from './components.module.css';
import Image from "next/image";
import { portfolioItemData } from "./PortfolioMenu";

//function that holds the portfolio item description details and preview
//can transition between a minimized and expanded view 
export default function PortfolioItem(
    {data, itemID, onExpand}: {
    data: portfolioItemData, 
    itemID: string,
    onExpand: (itemID: string) => void,
}): JSX.Element {

    const handleClick = () => {
        console.log("item clicked", itemID);
        onExpand(itemID);
    }

    return (
        <div className={styles.portfolioItemContainer}>
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
        </div>
    );
}