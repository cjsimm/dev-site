import { Metadata } from "next";
import styles from './page.module.css';
import PortfolioMenu from "../_components/PortfolioMenu";
import PortfolioAnimation from "../_components/PortfolioAnimation";
import { portfolioItemData } from "../portfolio.types"

export const metadata: Metadata = {
  title: `cSimm - Portfolio`,
  description: 'Development portfolio',
}

//serverside fetch to retrieve all portfolio data needed to be rendered
//inside the client-side PortfolioMenu componenet
async function getPortfolioData(): Promise<portfolioItemData[]> {
  return {}
}

//Parent functiton that fetches all content for the portfolio items on
// the serverside for use in the client side PortfolioMenu component 
export default async function Portfolio() {

    const portfolioData = await getPortfolioData();

    return (
        <div className={styles.contentContainer}>
          <PortfolioAnimation portfolioData={portfolioData} />
        </div>
    )
}