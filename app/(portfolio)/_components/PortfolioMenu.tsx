"use client";
import { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import styles from './components.module.css';

//holds the list of portfolio items
//holds state of which portfolio items are expanded 
export type portfolioItemData = {
    isExpanded: boolean
    title: string,
    thumbnail: string,
    description: string
}


export default function PortfolioMenu(): JSX.Element {

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
    return (
        <div className={styles.portfolioMenuContainer}>
            <PortfolioItem data={data[0]} />
            <PortfolioItem data={data[1]}/>
            <PortfolioItem data={data[2]}/>
            <PortfolioItem data={data[3]}/>
        </div>
    );
}