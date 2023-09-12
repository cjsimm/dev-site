import { useState } from "react";
import styles from './components.module.css';
import Image from "next/image";
import Link from "next/link";
import { portfolioItemData } from "../portfolio.types";


type portfolioItemProps = {
    data: portfolioItemData, 
    itemID: string,
    onExpand: (itemID: string) => void,
}
//function that holds the portfolio item description details and preview
//can transition between a minimized and expanded view 
export function PortfolioItemDefault(
    {data, itemID, onExpand}: portfolioItemProps
    ): JSX.Element {

    const handleClick = () => {
        /* console.log("item clicked", itemID); */
        onExpand(itemID);
    }
    return (
        <div className={styles.portfolioItemContainer}>
            <button className={styles.portfolioItemSmall} onClick={handleClick}>
                <Image
                    className={styles.portfolioImageDefault}
                    src={data.thumbnail}
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

export function PortfolioItemCollapsed(
    {data, itemID, onExpand}: portfolioItemProps
    ): JSX.Element {

    const handleClick = () => {
        /* console.log("item clicked", itemID); */
        onExpand(itemID);
    }

    return (
        <>
            <button className={styles.portfolioItemThumbnail} onClick={handleClick}>
                <Image
                    src={data.thumbnail}
                    alt="placeholder image"
                    width={125}
                    height={125}
                    style={{display: 'block'}}
                />
            </button>
        </>
    );
}

export function PortfolioItemExpanded(
    {data, itemID, onExpand}: portfolioItemProps
    ): JSX.Element {

    const handleClick = () => {
        onExpand(itemID);
    } 
    return (
        <div className={styles.expandedItemContainer}> 
            <section className={styles.expandedItemContentWrapper}>
                <h1>{data.title}</h1>
                <ul className={styles.tagList}>
                    {data.tags.map((tag) => {
                        return <li className={styles.tagListItem} key={tag}>{tag}</li>
                    })}
                </ul>
                <div className={styles.expandedContent} dangerouslySetInnerHTML={{__html: data.expandedContent}} />
            </section>
            <div className={styles.expandedItemButtons}>
                <button><Link className={styles.expandedItemLink} href={data.href} target="_blank">View</Link></button>
                <button onClick={handleClick}>Close</button>
            </div>
        </div> 
    )
}