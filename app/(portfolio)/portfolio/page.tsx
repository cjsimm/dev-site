import { Metadata } from "next";
import styles from './page.module.css';
import PortfolioMenu from "../_components/PortfolioMenu";

export const metadata: Metadata = {
  title: `cSimm - Portfolio`,
  description: 'Development portfolio',
}

//Parent functiton that holds all content on the portfolio page and 
//controls the transition between the portfolio menu and a specific
//piece of portfolio content
export default function Portfolio() {
    return (
        <div className={styles.contentContainer}>
          <PortfolioMenu />
        </div>

    )
}