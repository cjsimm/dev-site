import { portfolioItemData } from "./PortfolioMenu";
import styles from "./components.module.css";


//component that holds the information of the sole expanded portfolio item, always the first child of the portfolioMenuContainer flex box if it exists. following elements of the 
//portfoliomenucontainer will be thumbnails 

//need to add button and click event handler here 
export default function PortfolioItemExpanded({data, itemID, onExpand}: {
    data: portfolioItemData, 
    itemID: string,
    onExpand: (itemID: string) => void,
}): JSX.Element {

    const handleClick = () => {
        onExpand(itemID);
    } 
    return (
        <div className={styles.expandedItemContainer}> 
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <button onClick={handleClick}>Close</button>
        </div> 
    )
}