import TrendingList from '../TrendingList/TrendingList';
import styles from './Trending.module.css';

export default function Trending() {
  return (
    <section className={styles.trending}>
      <div className={styles.trendingTitle}>
        <h2>Top 10 Trending Locations and Sales History - 
        Last 30 Days</h2>
      </div>
      <TrendingList />
    </section>
  )
}

