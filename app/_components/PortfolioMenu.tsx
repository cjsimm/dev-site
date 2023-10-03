import {  useState } from "react";
import { PortfolioItemDefault, PortfolioItemCollapsed, PortfolioItemExpanded } from "./PortfolioItem";
import { portfolioItemData } from "../portfolio.types";
import styles from './components.module.css';

export default function PortfolioMenu({portfolioData, triggerAnimation}: {portfolioData: portfolioItemData[], triggerAnimation: () => void}): JSX.Element {

    const [expandedItemID, setExpandedItemID] = useState<string>();

    const handleExpand = (itemID: string): void => {    
        triggerAnimation(); 
        setExpandedItemID(itemID === expandedItemID ? undefined : itemID);
    };

    //if expandedItemID !undefined, assign expandeditem variable 
    //and place rest of portfolio items into collapsed components
    const sortExpanded = () => {
        const itemArray: JSX.Element[] = [];
        for (let i=0; i<portfolioData.length; i++) {
            let item = portfolioData[i];
            if (expandedItemID === item.id) {
                expandedItem = (<PortfolioItemExpanded
                key={i}
                itemID={item.id}
                data={item}
                onExpand={handleExpand}
                />);
            } else {
                itemArray.push((
                <PortfolioItemCollapsed
                    key={i}
                    data={item}
                    itemID={item.id}
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
        portfolioData.map((item, index) => {
            return (
                <PortfolioItemDefault
                    key={index}
                    data={item}
                    itemID={item.id}
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
