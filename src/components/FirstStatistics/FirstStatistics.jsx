import styles from './FirstStatistics.module.css';
import SalesForecastChart from '../SalesForecastChart/SalesForecastChart';
import ChartByPercentage from '../ChartByPercentage/ChartByPercentage';

export default function FirstStatistics() {

  let chartOne = [
    {name: 'Villas', color: 'red', percentage: 20},
    {name: 'Appartments', color: 'blue', percentage: 55},
    {name: 'Plot', color: 'yellow', percentage: 15},
    {name: 'Commercial', color: 'darkBlue', percentage: 10},
  ]

  return (
    <div className={styles.mainDiv}>
      <SalesForecastChart />
      <ChartByPercentage list={chartOne} />
    </div>
  )
};
