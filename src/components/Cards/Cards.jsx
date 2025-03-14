import { useState } from "react";
import styles from './Cards.module.css';
import EachCard from "../EachCard/EachCard";

export default function Cards() {
  const [cards, setCards] = useState([
    {title: '379B', subTitle: 'Sales Value', percentage: '50%', footerText: 'YoY Change'},
    {title: '123.7K', subTitle: 'Sales Volume', percentage: '34%', footerText: 'YoY Change'},
    {title: '1.4K', subTitle: 'Price per sqft', percentage: '13%', footerText: 'YoY Change'},
  ])
  return (
    <section>
      <div className={styles.main}>
        {cards.map((card, index)=>{
          return (
            <EachCard key={index} title={card.title} subTitle={card.subTitle} percentage={card.percentage} footerText={card.footerText}  />
          )
        })}
      </div>
    </section>
  )
}

