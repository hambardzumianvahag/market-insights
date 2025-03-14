import { useState } from 'react';
import styles from './TrendingList.module.css';
import EachLocation from '../EachLocation/EachLocation';
import img1 from '../../assets/img/trendingList/img1.png';
import img2 from '../../assets/img/trendingList/img2.png';
import img3 from '../../assets/img/trendingList/img3.png';
import img4 from '../../assets/img/trendingList/img4.png';
import img5 from '../../assets/img/trendingList/img5.png';
import img6 from '../../assets/img/trendingList/img6.png';
import img7 from '../../assets/img/trendingList/img7.png';
import img8 from '../../assets/img/trendingList/img8.png';
import img9 from '../../assets/img/trendingList/img9.png';
import img10 from '../../assets/img/trendingList/img10.png';

export default function TrendingList() {
  const [list, setList] = useState([
    {imgSrc: img1, name: 'Jumeirah Village Circle', number: '(1589)', progress: '+19.4% in 2Y'},  
    {imgSrc: img5, name: 'Dubai Hills Estate', number: '(618)', progress: '+20.3% in 2Y'},  
    {imgSrc: img8, name: 'Arjan', number: '(404)', progress: '+19.9% in 2Y'},  
    {imgSrc: img2, name: 'Mirdif', number: '(983)', progress: '+20.1% in 2Y'},  
    {imgSrc: img6, name: 'Dubai Creek Harbour', number: '(483)', progress: '+18.9% in 2Y'},  
    {imgSrc: img9, name: 'Downtown Dubai', number: '(391)', progress: '+18.1% in 2Y'},  
    {imgSrc: img3, name: 'Business Bay', number: '(799)', progress: '+19.6% in 2Y'},  
    {imgSrc: img7, name: 'Dubai Marina', number: '(466)', progress: '+21.7% in 2Y'},  
    {imgSrc: img10, name: 'Jumeirah Lake Towers', number: '(379)', progress: '+19.3% in 2Y'},  
    {imgSrc: img4, name: 'Dubailand Residence Complex', number: '(714)', progress: '+19.8% in 2Y'},  
  ])
  return (
    <div className={styles.trendingList}>
      {list.map((item, index)=>{
        return(
        <EachLocation key={index} imgSrc={item.imgSrc} name={item.name} number={item.number} progress={item.progress} />
      )
      })}
    </div>
  )
}

