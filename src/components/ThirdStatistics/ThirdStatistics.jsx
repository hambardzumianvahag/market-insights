import styles from './ThirdStatistics.module.css';
import BarChart from '../BarChart/BarChart';
import ChartByPercentage from '../ChartByPercentage/ChartByPercentage';


let chartThree = [
  {name: '1B/R', color: 'blue', percentage: 20},
  {name: '2B/R', color: 'red', percentage: 20},
  {name: '3B/R', color: 'yellow', percentage: 20},
  {name: '4B/R', color: 'darkBlue', percentage: 12},
  {name: '5B/R', color: 'green', percentage: 10},
  {name: '6B/R', color: 'brown', percentage: 10},
  {name: '7B/R', color: 'yellow1', percentage: 8},
]

export default function ThirdStatistics() {
  return (
    <div className={styles.divMain}>
        <BarChart color='#D12D34' title='Top 10 Trending Projects' value1='value3' value2='value4' />
        <ChartByPercentage list={chartThree} />
    </div>
  )
};
