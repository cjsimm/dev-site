"use client";
import { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioItemExpanded from "./PortfolioItemExpanded";
import styles from './components.module.css';
import { JsxElement } from "typescript";

const data: portfolioItemData[] = [
    {   
        title: "Hello 1", 
        thumbnail: "placeholder", 
        description: "this is a placeholder description 1"
    },
    {   
        title: "Hello 2", 
        thumbnail: "placeholder", 
        description: "this is a placeholder description 2"
    },
    {   
        title: "Hello 3", 
        thumbnail: "placeholder", 
        description: "this is a placeholder description 3 "
    },
    {   
        title: "Hello 4", 
        thumbnail: "placeholder", 
        description: "this is a placeholder description 4"
    }
]


//holds the list of portfolio items
//holds state of which portfolio items are expanded 
export type portfolioItemData = {
    title: string,
    thumbnail: string,
    description: string
}

//redesign
// if the clicked item matches the expanded item id, handle expandsets the state to  undefined  . in use effect, if the state is undefined, we draw the default set of portfolio items 
// if the clicked item doesnt match the expanded item id, handle expandd sets the state of that new item id. in use effect, we draw the portfolio item thumbnails for all except the state and we draw that one as the expanded view

// if state undefined, draw portfolio item standards
// if state 
    // if state == id draw big component
    // else draw thumbnail component 

export default function PortfolioMenu(): JSX.Element {

    const [expandedItemID, setExpandedItemID] = useState<string>();
/*  const [expandedElement, setExpandedElement] = useState<JSX.Element>(); */
/*     const [portfolioItems, setPortfolioItems] = useState<portfolioItemData[]>(data); */

    const handleExpand = (itemID: string): void => {
        setExpandedItemID(itemID === expandedItemID ? undefined : itemID);
    };

    //still need to switch between thumbnail only view and default view 

    // Split the data array into two separate arrays: expanded and collapsed items
    const expandedItem = data.map((item,index) => (
        expandedItemID === item.title ? (
        <PortfolioItemExpanded
            key={index}
            itemID={item.title}
            data={item}
            onExpand={handleExpand}
        />
    ) : null
    ));

    const collapsedItems = data.map((item, index) => (
        expandedItemID === item.title ? null : (
        <PortfolioItem
            key={index}
            data={item}
            itemID={item.title}
            onExpand={handleExpand}
        />
        )
    ));

    return (
        <div className={styles.portfolioMenuContainer}>
            {expandedItem}
            <div className={styles.collapsedItemsContainer}>
                {collapsedItems}
            </div>
        </div>
    );
}