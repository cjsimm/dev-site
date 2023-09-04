"use client";
import { useEffect, useState } from "react";
import { PortfolioItemDefault, PortfolioItemCollapsed, PortfolioItemExpanded } from "./PortfolioItem";
/* import PortfolioItemExpanded from "./PortfolioItemExpanded"; */
import styles from './components.module.css';
import { JsxElement } from "typescript";

const data: portfolioItemData[] = [
    {   
        title: "Hello 1", 
        thumbnail: "placeholder", 
        description: "this is a placeholder this isthisthis is a placeholder this is a placeholder  is a placeholder  a placeholder description 1 this is a placeholder this is a placeholderthis is a placeholderthis is a placeholder this is a placeholder description 1 this is a placeholder description 1 this is a placeholder description 1 description 1 this is a placeholder description 1"
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
    },
    {   
        title: "Hello 5", 
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

export default function PortfolioMenu(): JSX.Element {

    const [expandedItemID, setExpandedItemID] = useState<string>();

    const handleExpand = (itemID: string): void => {
        setExpandedItemID(itemID === expandedItemID ? undefined : itemID);
    };

    const sortExpanded = () => {
        const itemArray: JSX.Element[] = [];
        for (let i=0; i<data.length; i++) {
            let item = data[i];
            if (expandedItemID === item.title) {
                expandedItem = (<PortfolioItemExpanded
                key={i}
                itemID={item.title}
                data={item}
                onExpand={handleExpand}
                />);
            } else {
                itemArray.push((
                <PortfolioItemCollapsed
                    key={i}
                    data={item}
                    itemID={item.title}
                    onExpand={handleExpand}
                />
                ));
            }
        }
        return itemArray;
    };
    //still need to switch between thumbnail only view and default view 
    let expandedItem: JSX.Element | undefined;
    const collapsedItems: JSX.Element[] = !expandedItemID ? (
        data.map((item, index) => {
            return (
                <PortfolioItemDefault
                    key={index}
                    data={item}
                    itemID={item.title}
                    onExpand={handleExpand}
                />
            ) 
        }) 
    ): sortExpanded();

    return (
        <div className={styles.portfolioMenuContainer}>
            {expandedItem}
            <div className={expandedItem ? styles.collapsedItemsContainer : styles.defaultItemsContainer}>
                {collapsedItems}
            </div>
        </div>
    );
}