import styles from './SecondStatistics.module.css';
import BarChart from '../BarChart/BarChart';
import ChartByPercentage from '../ChartByPercentage/ChartByPercentage';

export default function SecondStatistics() {

  let chartTwo = [
    {name: 'Primary Sales', color: 'blue', percentage: 70},
    {name: 'Secondary Sales', color: 'red', percentage: 30},
  ]

  return (
    <div className={styles.mainDiv}>
        <BarChart color='#289991' title='Top 10 Trending Locations' value1='value1' value2='value2' />
        <ChartByPercentage list={chartTwo} />
    </div>
  )
};
