"use client";
import { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import styles from './components.module.css';
import { JsxElement } from "typescript";

const data: portfolioItemData[] = [
    {   

        isExpanded: false,
        title: "Hello", 
        thumbnail: "placeholder", 
        description: "this is a placeholder description"
    },
    {   

        isExpanded: false,
        title: "Hello 2", 
        thumbnail: "placeholder", 
        description: "this is a placeholder description"
    },
    {   

        isExpanded: false,
        title: "Hello 3", 
        thumbnail: "placeholder", 
        description: "this is a placeholder description"
    },
    {   

        isExpanded: false,
        title: "Hello 4", 
        thumbnail: "placeholder", 
        description: "this is a placeholder description"
    }
]


//holds the list of portfolio items
//holds state of which portfolio items are expanded 
export type portfolioItemData = {
    isExpanded: boolean
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

    const [expandedItemID, setExpandedItemID] = useState<number>();

    const handleExpand = (itemID: number): void => {
        //debug
        console.log("itemid of clicked component: ", itemID);
        //
        if (expandedItemID === itemID) {  //if the item is being toggled close, rerender with all portfolioitems closed (only 1 portfolio item can be open at a time)
            portfolioItems.forEach((item) => {
                item.props.data.isExpanded = false;
            });
            setExpandedItemID(undefined);
        } else {         //else expand the newly clicked portfolio item and close all the others 
            portfolioItems.forEach((item) => {
                if (item.props.itemID === itemID) {
                    item.props.data.isExpanded = true;
                } else {
                    item.props.data.isExpanded = false;
                }
            });
            setExpandedItemID(itemID);
        }
        return;
    }

    //use effect to update the items when expandeditemid changes 
/*     useEffect(() => {
        //if the expandeditemID was not changed to undefined, swap the isExpanded variable on the correct element 
        if (expandedItemID) {
            console.log(expandedItemID);
            const itemToExpand = portfolioItems.find((item) => item.props.itemID == expandedItemID);
            if (itemToExpand) {
                itemToExpand.props.data.isExpanded = true;
                console.log(itemToExpand);
            } else {
                console.log("something went wrong in useeffect hook when trying to set the expand boolean.");
            }
        }
    }, [expandedItemID]) */



    //populate portfolio items
    //this mock data needs to be replaced with some kind of data retrieval. storing in json data is 
    //probably a good choice 
    const portfolioItems: JSX.Element[] = data.map(
        (item: portfolioItemData, index: number): JSX.Element => {
            return (
                <PortfolioItem key={index+1} itemID={index+1} data={item} onExpand={handleExpand} />
            )
        }
    );

    return (
        <div className={styles.portfolioMenuContainer}>
            {expandedItemID ? (
                portfolioItems
            ) : portfolioItems }
        </div>
    );
}