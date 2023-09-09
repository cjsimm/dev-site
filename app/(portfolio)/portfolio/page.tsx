import { Metadata } from "next";
import styles from './page.module.css';
import PortfolioMenu from "../_components/PortfolioMenu";
import PortfolioAnimation from "../_components/PortfolioAnimation";
import { portfolioItemData } from "../portfolio.types"
import fs from "fs";
import path from 'path';
import portfolioItems from "../portfolio-items.json"

export const metadata: Metadata = {
  title: `cSimm - Portfolio`,
  description: 'Development portfolio',
}




//serverside fetch to retrieve all portfolio data needed to be rendered
//inside the client-side PortfolioMenu component
async function getPortfolioData(): Promise<portfolioItemData[]> {
  
  const portfolioContent = portfolioItems.map((item) => {
    //html file to set inner dangerously
    const thumbnail = `/portfolio-items/${item.id}/thumbnail.png`
    const expandedContent = fs.readFileSync(path.join(process.cwd(), `/public/portfolio-items/${item.id}/${item.id}.html`), 'utf8');
    return {...item, thumbnail, expandedContent}
  });

  console.log(process.cwd());


  return portfolioContent; 
}

//Parent functiton that fetches all content for the portfolio items on
// the serverside for use in the client side PortfolioMenu component 
export default async function Portfolio() {

    const portfolioData = await getPortfolioData();

    console.log(portfolioData);

    return (
        <div className={styles.contentContainer}>
          <PortfolioAnimation portfolioData={portfolioData} />
        </div>
    )
}