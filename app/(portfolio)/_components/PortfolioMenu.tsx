"use client";
import { useEffect, useState } from "react";
import { PortfolioItemDefault, PortfolioItemCollapsed, PortfolioItemExpanded } from "./PortfolioItem";
import { portfolioItemData } from "../portfolio.types";
import PortfolioAnimation from "./PortfolioAnimation";
import styles from './components.module.css';

const data: portfolioItemData[] = [
    {   
        title: "Hello 1", 
        thumbnail: "placeholder", 
        description: "this is a placeholderthis is a placeholder this isthisthis is a placeholder this isthisthis is a placeholder this isthisthis is a placeholder this isthisthis is a placeholder this isthisthis is a placeholder this isthisthis is a placeholder this isthisthis is a placeholder this isthisthis is a placeholder this isthisthis is a placeholder this isthisthis is a placeholder this isthisthis is a placeholder this isthisthis is a placeholder this isthisthis is a placeholder this isthis this isthisthis is a placeholder this is a placeholder  is a placeholder  a placeholder description 1 this is a placeholder this is a placeholderthis is a placeholderthis is a placeholder this is a placeholder description 1 this is a placeholder description 1 this is a placeholder description 1 description 1 this is a placeholder description 1"
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

export default function PortfolioMenu({portfolioData, triggerAnimation}: {portfolioData: any, triggerAnimation: any}): JSX.Element {

    const [expandedItemID, setExpandedItemID] = useState<string>();

    const handleExpand = (itemID: string): void => {    
        triggerAnimation(); 
        setExpandedItemID(itemID === expandedItemID ? undefined : itemID);
    };

    //if expandedItemID !undefined, assign expandeditem variable 
    //and place rest of portfolio items into collapsed components
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
    //if expanded item id is undefined, create default portfolio view,
    // else run sortexpanded() 
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

    console.log("portfolio menu is rerendering");

    return (
        <>
            {expandedItem}
            <div className={expandedItem ? styles.collapsedItemsContainer : styles.defaultItemsContainer}>
                {collapsedItems}
            </div>
        </>
    );
}