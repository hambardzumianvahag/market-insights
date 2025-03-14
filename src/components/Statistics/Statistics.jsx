import FirstStatistics from '../FirstStatistics/FirstStatistics';
import SecondStatistics from '../SecondStatistics/SecondStatistics';
import ThirdStatistics from '../ThirdStatistics/ThirdStatistics';
import styles from './Statistics.module.css';

export default function Statistics() {
  return (
    <section className={styles.statisticsMain}>
      <FirstStatistics />
      <SecondStatistics />
      <ThirdStatistics />
    </section>
  )
};
