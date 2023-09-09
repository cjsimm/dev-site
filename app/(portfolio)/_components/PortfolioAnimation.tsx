"use client";
import styles from './components.module.css';
import PortfolioMenu from './PortfolioMenu';
import { useEffect, useState } from 'react';

export default function PortfolioAnimation({ portfolioData }: {portfolioData: any}) {

    const [shouldAnimate, setAnimate] = useState(true)

    const triggerAnimation = () => {
        setAnimate(true);
    }

    const onAnimationEnd = () => {
        setAnimate(false);  
    }

    console.log("portfolio animation is rerendering");
    //this doesnt work for a fade out
    //because when the children change, the component
    // rerenders before the animation can play. we 
    //need to remount this component on an id change,
    // then recalculate the children within this 
    //component so that the animation
    //has a chance to play

    // item id changes, useffect fadeout animation time delay, 
    //then recalc children 


    return(
        <div 
            className={`
            ${styles.portfolioMenuContainer} 
            ${shouldAnimate && styles.mounted}
            `}
            onAnimationEnd={onAnimationEnd}
            >
            <PortfolioMenu portfolioData={portfolioData} triggerAnimation={triggerAnimation} />
        </div>
    );
}