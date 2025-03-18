import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './SalesForecastChart.module.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesForecastChart = () => {
  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: '2024',
        backgroundColor: 'transparent',
        borderColor: '#289991',
        data: [80, 120, 110, 100, 130, 150, 115, 145, 140, 130, 160, 210],
        pointBackgroundColor: 'transparent',
        pointHoverBackgroundColor: '#289991',
        pointBorderColor: 'transparent',
        pointHoverBorderColor: '#289991',
        pointHoverBorderWidth: 3,
        pointBorderWidth: 5,
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: false,
        tension: 0.4,
      },
      {
        label: '2023',
        backgroundColor: 'transparent',
        borderColor: '#D12D34',
        data: [120, 160, 150, 140, 165, 210, 135, 155, 170, 140, 130, 200],
        pointBackgroundColor: 'transparent',
        pointHoverBackgroundColor: '#D12D34',
        pointBorderColor: 'transparent',
        pointHoverBorderColor: '#D12D34',
        pointHoverBorderWidth: 3,
        pointBorderWidth: 5,
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        intersect: false,
        backgroundColor: '#fbfbfb',
        titleColor: '#8F92A1',
        bodyColor: '#272727',
        titleFont: {
          size: 16,
          family: 'Plus Jakarta Sans',
          weight: '400',
        },
        bodyFont: {
          family: 'Plus Jakarta Sans',
          size: 16,
        },
        multiKeyBackground: 'transparent',
        displayColors: false,
        padding: {
          x: 30,
          y: 15,
        },
        borderColor: 'rgba(143, 146, 161, .1)',
        borderWidth: 1,
        enabled: true,
      },
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: 0,
      },
    },
    responsive: true,
    scales: {
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
        ticks: {
          padding: 35,
        },
        max: 350,
        min: 50,
      },
      x: {
        grid: {
          drawBorder: false,
          color: 'rgba(143, 146, 161, .1)',
          drawTicks: false,
          zeroLineColor: 'rgba(143, 146, 161, .1)',
        },
        ticks: {
          padding: 20,
        },
      },
    },
  };

  return (
    <div className={styles.row}>
      <div className={styles.colLg7}>
        <div className={styles.cardStyle}>
          <div className={styles.title}>
            <div className={styles.left}>
              <h6 className={styles.textMedium}>2023 VS 2024</h6>
            </div>
            <div className={styles.right}>
              <div className={styles.selectStyle}>
                <div className={styles.selectPosition}>
                  <select className={styles.selectSm}>
                    <option value="">Last Month</option>
                    <option value="">Last 3 Months</option>
                    <option value="">Last Year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.yearDiv}>
            <div className={styles.firstYear}>
              <div className={styles.cycleOne}></div>
              <p>2024</p>
            </div>
            <div className={styles.secondYear}>
              <div className={styles.cycleTwo}></div>
              <p>2023</p>
            </div>
          </div>
          <div className={styles.chart}>
            <Line data={data} options={options} />
          </div>
          <div className={styles.radioDiv}>
                  <div>
                    <input type="radio" id="salesValue2" name="sales" />
                    <label htmlFor="salesValue2">Sales Value</label>
                  </div>
                  <div>
                    <input type="radio" id="salesVolume1" name="sales" />
                    <label htmlFor="salesVolume1">Sales Volume</label>
                  </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default SalesForecastChart;
