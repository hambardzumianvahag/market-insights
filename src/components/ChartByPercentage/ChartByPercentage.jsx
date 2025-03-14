import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './ChartByPercentage.module.css';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartByPercentage = ({list}) => {


  const data = {
    labels: list.map(item => item.name),
    datasets: [
      {
        data: list.map(item => item.percentage),
        backgroundColor: list.map(item => {
          switch (item.color) {
            case 'red':
              return '#D12D34';
            case 'blue':
              return '#289991';
            case 'yellow':
              return '#FFBA55';
            case 'darkBlue':
              return '#3B406D';
              case 'green':
                return '#35A669';
              case 'brown':
                return '#BB3E03';
              case 'yellow1':
                return '#FFD380';  
            default:
              return '#ccc';
          }
        }),
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        backgroundColor: '#F3F6F8',
        titleColor: '#8F92A1',
        titleFontSize: 12,
        bodyColor: '#171717',
        bodyFont: {
          weight: 'bold',
          size: 16,
        },
        multiKeyBackground: 'transparent',
        displayColors: false,
        padding: {
          x: 30,
          y: 10,
        },
        bodyAlign: 'center',
        titleAlign: 'center',
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.chartPercent}>
      <div className={styles.chartWrap}>
        <Doughnut data={data} options={options} className={styles.canvas} />
      </div>
      <div className={styles.chartNoteContainer}>
        {list.map((item, index) => (
          <div key={index} className={styles.chartNoteMain}>
            <div className={styles.chartNote}>
              <span className={`${styles.dot} ${styles[`dot${item.color.charAt(0).toUpperCase() + item.color.slice(1)}`]}`} />
              <span className={styles.chartName}>{item.name}</span>
            </div>
            <div>
              <span className={styles.charPercentage}>{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartByPercentage;
