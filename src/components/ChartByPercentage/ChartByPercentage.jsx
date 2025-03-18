import React, { useEffect, useRef } from 'react';
import * as JSC from 'jscharting';
import styles from './ChartByPercentage.module.css';

const getColor = (colorName) => {
  switch (colorName) {
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
};

const ChartByPercentage = ({ list }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    if (chartRef.current && JSC && JSC.chart) {
      chart = JSC.chart(chartRef.current, {
        debug: true,
        legend_visible: false,
        defaultSeries: {
          type: 'pie donut',
          angle_orientation: 125,
          shape_padding: 0.3,
          mouseTracking_enabled: true
        },
        series: [
          {
            points: list.map((item) => ({
              name: item.name,
              y: item.percentage,
              color: getColor(item.color),
              z: item.percentage,
            }))
          }
        ]
      });
    }

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [list]);

  return (
      <div className={styles.chartPercent}>
        <div
            ref={chartRef}
            className={styles.container}
            // style={{ width: '295px', height: '350px', margin: '0 auto' }}
        />

        <div className={styles.chartNoteContainer}>
          {list.map((item, index) => (
              <div key={index} className={styles.chartNoteMain}>
                <div className={styles.chartNote}>
              <span
                  className={`${styles.dot} ${
                      styles[
                          `dot${item.color.charAt(0).toUpperCase() + item.color.slice(1)}`
                          ]
                  }`}
              />
                  <span className={styles.chartName}>{item.name}</span>
                </div>
                <div>
              <span className={styles.charPercentage}>
                {item.percentage}%
              </span>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default ChartByPercentage;