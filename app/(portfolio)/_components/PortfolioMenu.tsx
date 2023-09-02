import { ReactComponentElement } from "react";
import PortfolioItem from "./PortfolioItem";
import styles from './components.module.css';

//holds the list of portfolio items
export default function PortfolioMenu(): JSX.Element {

    return (
        <div className={styles.portfolioMenuContainer}>
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </div>
    );
}